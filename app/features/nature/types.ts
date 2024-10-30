import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokePaginationResult,
    type LanguageRefT,
    languageRefZ,
    type PokeApiReference,
} from "@/types/api";
import {
    type BerryFlavorRefT,
    berryFlavorRefZ,
} from "@/features/poke-berry-flavor/types";

export const endpointCollectionName = "nature" as const;

export type PokeStatRefT = PokeApiReference<"stat">;
export const pokeStatRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("stat"),
}) satisfies z.ZodType<PokeStatRefT>;

export type PokeAthlonStatRefT = PokeApiReference<"pokeathlon-stat">;
export const pokeAthlonStatRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("pokeathlon-stat"),
}) satisfies z.ZodType<PokeAthlonStatRefT>;

export type PokeAthlonStatChangeT = {
    max_change: number;
    pokeathlon_stat: PokeAthlonStatRefT;
};
export const pokeAthlonStatChangeZ = z.object({
    max_change: z.number(),
    pokeathlon_stat: pokeAthlonStatRefZ,
}) satisfies z.ZodType<PokeAthlonStatChangeT>;

export type MoveBattleStyleRefT = PokeApiReference<"move-battle-style">;
export const moveBattleStyleRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("move-battle-style"),
}) satisfies z.ZodType<MoveBattleStyleRefT>;

export type MoveBattleStylePrefT = {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: MoveBattleStyleRefT;
};
export const moveBattleStylePrefZ = z.object({
    low_hp_preference: z.number(),
    high_hp_preference: z.number(),
    move_battle_style: moveBattleStyleRefZ,
}) satisfies z.ZodType<MoveBattleStylePrefT>;

export type PokeNatureNameT = {
    name: string;
    language: LanguageRefT;
};
export const pokeNatureNameZ = z.object({
    name: z.string(),
    language: languageRefZ,
}) satisfies z.ZodType<PokeNatureNameT>;

export type PokeNatureT = {
    id: number;
    name: string;
    decreased_stat: PokeStatRefT | null;
    increased_stat: PokeStatRefT | null;
    likes_flavor: BerryFlavorRefT | null;
    hates_flavor: BerryFlavorRefT | null;
    pokeathlon_stat_changes: PokeAthlonStatChangeT[];
    move_battle_style_preferences: MoveBattleStylePrefT[];
    names: PokeNatureNameT[];
};
export type PokeNatureRefT = {
    url: PokeExactEndpoint<typeof endpointCollectionName>;
    name: string;
};
export type PokeNatureListT = PokePaginationResult<
    PokeNatureRefT,
    typeof endpointCollectionName
>;

export const pokeNatureZ = z.object({
    id: z.number(),
    name: z.string().min(1),
    decreased_stat: pokeStatRefZ.nullable(),
    increased_stat: pokeStatRefZ.nullable(),
    likes_flavor: berryFlavorRefZ.nullable(),
    hates_flavor: berryFlavorRefZ.nullable(),
    pokeathlon_stat_changes: z.array(pokeAthlonStatChangeZ),
    move_battle_style_preferences: z.array(moveBattleStylePrefZ),
    names: z.array(pokeNatureNameZ),
}) satisfies z.ZodType<PokeNatureT>;

export const pokeNatureRefZ = z.object({
    name: z.string().min(1),
    url: pokeExactEndpointZ(endpointCollectionName),
}) satisfies z.ZodType<PokeNatureRefT>;

export const pokeNatureListZ = pokePaginationResultZ(
    pokeNatureRefZ,
    endpointCollectionName,
) satisfies z.ZodType<PokeNatureListT>;
