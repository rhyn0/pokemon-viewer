import { z } from "zod";
import {
    pokeExactEndpointZ,
    pokePaginationResultZ,
    type PokeApiReference,
    type PokePaginationResult,
} from "@/types/api";

export type BerryFlavorT = {
    id: number;
    name: string;
    berries: {
        berry: PokeApiReference<"berry">;
        potency: number;
    }[];
    contest_type: PokeApiReference<"contest-type">;
};
export type BerryFlavorRefT = PokeApiReference<"berry-flavor">;
export type BerryFlavorListT = PokePaginationResult<
    BerryFlavorRefT,
    "berry-flavor"
>;

export const berryFlavorZ = z.object({
    id: z.number(),
    name: z.string(),
    berries: z.array(
        z.object({
            berry: z.object({
                url: pokeExactEndpointZ("berry"),
                name: z.string(),
            }),
            potency: z.number(),
        }),
    ),
    contest_type: z.object({
        name: z.string(),
        url: pokeExactEndpointZ("contest-type"),
    }),
}) satisfies z.ZodType<BerryFlavorT>;

export const berryFlavorRefZ = z.object({
    name: z.string(),
    url: pokeExactEndpointZ("berry-flavor"),
}) satisfies z.ZodType<BerryFlavorRefT>;

export const berryFlavorListZ = pokePaginationResultZ(
    berryFlavorRefZ,
    "berry-flavor",
);
