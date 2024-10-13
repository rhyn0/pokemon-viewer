import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokeApiReference,
    type PokePaginationResult,
} from "@/types/api";

const endpointCollectionName = "ability" as const;

type GenerationRefT = {
    name: `generation-${string}`; // uses roman numerals
    url: PokeExactEndpoint<"generation">;
};

type LanguageRefT = PokeApiReference<"language">;

export type AbilityNameT = {
    name: string;
    language: LanguageRefT;
};

export type AbilityEffectT = {
    effect: string;
    short_effect: string;
    language: LanguageRefT;
};

export type AbilityEffectChangeT = {
    effect_entries: {
        effect: string;
        language: LanguageRefT;
    }[];
    version_group: PokeApiReference<"version-group">;
};

export type AbilityFlavorTextT = {
    flavor_text: string;
    language: LanguageRefT;
    version_group: PokeApiReference<"version-group">;
};

export type AbilityPokemonT = {
    is_hidden: boolean;
    /**
     *  From the docs:
     * >	Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
     * >    This is the slot of this ability for the referenced pokemon.
     */
    slot: number;
    pokemon: PokeApiReference<"pokemon">;
};

export type PokeAbilityT = {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: GenerationRefT;
    names: AbilityNameT[];
    effect_entries: AbilityEffectT[];
    effect_changes: AbilityEffectChangeT[];
    flavor_text_entries: AbilityFlavorTextT[];
    pokemon: AbilityPokemonT[];
};
export type PokeAbilityRefT = PokeApiReference<typeof endpointCollectionName>;
export type PokeAbilityListT = PokePaginationResult<
    PokeAbilityRefT,
    typeof endpointCollectionName
>;

const generationRefZ = z.object({
    name: z.custom<`generation-${string}`>((val) => {
        const parsedString = z.string().parse(val);
        return parsedString.startsWith("generation-");
    }),
    url: pokeExactEndpointZ("generation"),
}) satisfies z.ZodType<GenerationRefT>;

const languageRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("language"),
}) satisfies z.ZodType<LanguageRefT>;

const abilityNameZ = z.object({
    name: z.string(),
    language: languageRefZ,
}) satisfies z.ZodType<AbilityNameT>;

const abilityEffectZ = z.object({
    effect: z.string(),
    short_effect: z.string(),
    language: languageRefZ,
}) satisfies z.ZodType<AbilityEffectT>;

const abilityEffectChangeZ = z.object({
    effect_entries: z.array(
        z.object({
            effect: z.string(),
            language: languageRefZ,
        }),
    ),
    version_group: z.object({
        name: z.string(),
        url: pokeExactEndpointZ("version-group"),
    }),
}) satisfies z.ZodType<AbilityEffectChangeT>;

const abilityFlavorTextZ = z.object({
    flavor_text: z.string(),
    language: languageRefZ,
    version_group: z.object({
        name: z.string(),
        url: pokeExactEndpointZ("version-group"),
    }),
}) satisfies z.ZodType<AbilityFlavorTextT>;

const abilityPokemonZ = z.object({
    is_hidden: z.boolean(),
    slot: z.number().min(1).max(3),
    pokemon: z.object({
        name: z.string(),
        url: pokeExactEndpointZ("pokemon"),
    }),
}) satisfies z.ZodType<AbilityPokemonT>;

export const pokeAbilityZ = z.object({
    id: z.number(),
    name: z.string(),
    is_main_series: z.boolean(),
    generation: generationRefZ,
    names: z.array(abilityNameZ),
    effect_entries: z.array(abilityEffectZ),
    effect_changes: z.array(abilityEffectChangeZ),
    flavor_text_entries: z.array(abilityFlavorTextZ),
    pokemon: z.array(abilityPokemonZ),
}) satisfies z.ZodType<PokeAbilityT>;

export const abilityRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokeAbilityRefT>;

export const abilityListZ = pokePaginationResultZ(
    abilityRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokeAbilityListT>;

export const englishPokemonAbilityZ = pokeAbilityZ.transform(
    (val) =>
        ({
            ...val,
            names: val.names.filter((name) => name.language.name === "en"),
            effect_entries: val.effect_entries.filter(
                (effect) => effect.language.name === "en",
            ),
            effect_changes: val.effect_changes.filter((change) =>
                change.effect_entries.some(
                    (effect) => effect.language.name === "en",
                ),
            ),
            flavor_text_entries: val.flavor_text_entries.filter(
                (text) => text.language.name === "en",
            ),
        }) as PokeAbilityT,
);
