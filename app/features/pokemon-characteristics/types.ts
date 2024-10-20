import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokePaginationResult,
    type LanguageRefT,
    languageRefZ,
} from "@/types/api";

const endpointCollectionName = "characteristic" as const;

type StatRefT = {
    name: string;
    url: PokeExactEndpoint<"stat">;
};

export type PokemonCharacteristicDescriptionsT = {
    description: string;
    language: LanguageRefT;
};

export type PokeCharacteristicT = {
    id: number;
    gene_modulo: number;
    possible_values: number[];
    highest_stat: StatRefT;
    descriptions: PokemonCharacteristicDescriptionsT[];
};
export type PokeCharacteristicRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
};
export type PokeCharacteristicListT = PokePaginationResult<
    PokeCharacteristicRefT,
    typeof endpointCollectionName
>;

export const pokeStatRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("stat"),
}) satisfies z.ZodType<StatRefT>;

export const pokeCharacteristicDescriptionZ = z.object({
    description: z.string(),
    language: languageRefZ,
}) satisfies z.ZodType<PokemonCharacteristicDescriptionsT>;

export const pokeCharacteristicZ = z.object({
    id: z.number(),
    gene_modulo: z.number().min(0),
    possible_values: z.array(z.number()),
    highest_stat: pokeStatRefZ,
    descriptions: z.array(pokeCharacteristicDescriptionZ),
}) satisfies z.ZodType<PokeCharacteristicT>;

export const characteristicRefZ = z.object({
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokeCharacteristicRefT>;

export const characteristicListZ = pokePaginationResultZ(
    characteristicRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokeCharacteristicListT>;

export const englishPokemonCharacteristicDescriptionZ =
    pokeCharacteristicZ.transform(
        (val) =>
            ({
                ...val,
                descriptions: val.descriptions.filter(
                    (desc) => desc.language.name === "en",
                ),
            }) as PokeCharacteristicT,
    );
