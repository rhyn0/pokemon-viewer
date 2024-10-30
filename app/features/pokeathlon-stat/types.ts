import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokePaginationResult,
    type LanguageRefT,
    languageRefZ,
} from "@/types/api";
import type { PokeNatureRefT } from "../nature/types";

export const endpointCollectionName = "pokeathlon-stat" as const;

export type PokeathlonNatureAffectStatT = {
    max_change: number;
    nature: PokeNatureRefT;
};
export const pokeathlonNatureAffectStatZ = z.object({
    max_change: z.number(),
    nature: z.object({
        name: z.string(),
        url: pokeExactEndpointZ("nature"),
    }),
}) satisfies z.ZodType<PokeathlonNatureAffectStatT>;

export type PokeathlonStatT = {
    id: number;
    name: string;
    affecting_natures: {
        increase: PokeathlonNatureAffectStatT[];
        decrease: PokeathlonNatureAffectStatT[];
    };
    names: {
        name: string;
        language: LanguageRefT;
    }[];
};
export type PokeathlonStatRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
    name: string;
};
export type PokeathlonStatListT = PokePaginationResult<
    PokeathlonStatRefT,
    typeof endpointCollectionName
>;

export const pokeathlonStatZ = z.object({
    id: z.number(),
    name: z.string().min(1),
    affecting_natures: z.object({
        increase: z.array(pokeathlonNatureAffectStatZ),
        decrease: z.array(pokeathlonNatureAffectStatZ),
    }),
    names: z.array(
        z.object({
            name: z.string(),
            language: languageRefZ,
        }),
    ),
}) satisfies z.ZodType<PokeathlonStatT>;

export const pokeathlonStatRefZ = z.object({
    name: z.string().min(1),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokeathlonStatRefT>;

export const pokeathlonStatListZ = pokePaginationResultZ(
    pokeathlonStatRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokeathlonStatListT>;
