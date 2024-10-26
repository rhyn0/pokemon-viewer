import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokePaginationResult,
    type LanguageRefT,
    languageRefZ,
    type PokemonSpeciesRefT,
} from "@/types/api";

const endpointCollectionName = "egg-group" as const;

export type PokeEggGroupT = {
    id: number;
    name: string;
    names: {
        language: LanguageRefT;
        name: string;
    }[];
    pokemon_species: PokemonSpeciesRefT[];
};
export type PokeEggGroupRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
    name: string;
};
export type PokeEggGroupListT = PokePaginationResult<
    PokeEggGroupRefT,
    typeof endpointCollectionName
>;

export const pokeEggGroupZ = z.object({
    id: z.number(),
    name: z.string().min(1),
    names: z.array(
        z.object({
            language: languageRefZ,
            name: z.string().min(1),
        }),
    ),
    pokemon_species: z.array(
        z.object({
            name: z.string().min(1),
            url: pokeExactEndpointZ("pokemon-species"),
        }),
    ),
}) satisfies z.ZodType<PokeEggGroupT>;

export const pokeEggGroupRefZ = z.object({
    name: z.string().min(1),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokeEggGroupRefT>;

export const eggGroupListZ = pokePaginationResultZ(
    pokeEggGroupRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokeEggGroupListT>;

export const englishPokeEggGroupNamesZ = pokeEggGroupZ.transform(
    (val) =>
        ({
            ...val,
            names: val.names.filter((desc) => desc.language.name === "en"),
        }) as PokeEggGroupT,
);
