import { z } from "zod";
import {
    type PokeExactEndpoint,
    pokeExactEndpointZ,
    type PokePaginationResult,
    pokePaginationResultZ,
} from "@/types/api";
import type { BerryRefT } from "../poke-berry/types";

export type BerryFirmnessRefT = {
    name: string;
    url: PokeExactEndpoint<"berry-firmness">;
};

export type BerryFirmnessT = {
    berries: BerryRefT[];
    id: number;
    name: string;
};

export type BerryFirmnessListT = PokePaginationResult<
    BerryFirmnessRefT,
    "berry-firmness"
>;

export const berryFirmnessRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("berry-firmness"),
}) satisfies z.ZodType<BerryFirmnessRefT>;

export const berryFirmnessZ = z.object({
    berries: z.array(
        z.object({
            url: pokeExactEndpointZ("berry"),
            name: z.string(),
        }),
    ),
    id: z.number(),
    name: z.string(),
}) satisfies z.ZodType<BerryFirmnessT>;

export const berryFirmnessListZ = pokePaginationResultZ(
    berryFirmnessRefZ,
    "berry-firmness",
);
