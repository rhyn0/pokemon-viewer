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

export const endpointCollectionName = "growth-rate" as const;

export type GrowthRateDescriptionT = {
    description: string;
    language: LanguageRefT;
};

export type GrowthRateT = {
    id: number;
    name: string;
    formula: string; // tex formula, with properly escaped backslashes
    descriptions: GrowthRateDescriptionT[];
    levels: {
        level: number;
        experience: number;
    }[];
    pokemon_species: PokemonSpeciesRefT[];
};
export type GrowthRateRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
    name: string;
};
export type GrowthRateListT = PokePaginationResult<
    GrowthRateRefT,
    typeof endpointCollectionName
>;

export const growthRateDescriptionZ = z.object({
    description: z.string().min(1),
    language: languageRefZ,
}) satisfies z.ZodType<GrowthRateDescriptionT>;

export const growthRateZ = z.object({
    id: z.number(),
    name: z.string().min(1),
    formula: z.string().min(1),
    descriptions: z.array(growthRateDescriptionZ),
    levels: z.array(
        z.object({
            level: z.number().min(1).int(),
            experience: z.number(),
        }),
    ),
    pokemon_species: z.array(
        z.object({
            name: z.string().min(1),
            url: pokeExactEndpointZ("pokemon-species"),
        }),
    ),
}) satisfies z.ZodType<GrowthRateT>;

export const growthRateRefZ = z.object({
    name: z.string().min(1),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<GrowthRateRefT>;

export const growthRateListZ = pokePaginationResultZ(
    growthRateRefZ,
    endpointCollectionName,
) satisfies z.ZodType<GrowthRateListT>;

export const englishGrowthRateDescZ = growthRateZ.transform(
    (val) =>
        ({
            ...val,
            descriptions: val.descriptions.filter(
                (desc) => desc.language.name === "en",
            ),
        }) as GrowthRateT,
);
