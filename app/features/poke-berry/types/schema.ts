import { z } from "zod";
import {
    pokeExactEndpointZ,
    pokeListEndpointZ,
    type PokePaginationResult,
} from "@/types/api";

const berryRef = <TPokeType extends string>(pokeCategory: TPokeType) =>
    z.object({
        name: z.string(),
        url: pokeExactEndpointZ<TPokeType>(pokeCategory),
    });
//  satisfies z.ZodType<PokeApiReference<TPokeType>>;

const pokeBerryZ = z.object({
    id: z.number(),
    name: z.string(),
    growth_time: z.number(),
    max_harvest: z.number(),
    natural_gift_power: z.number(),
    size: z.number(),
    smoothness: z.number(),
    soil_dryness: z.number(),
    firmness: berryRef("berry-firmness"),
    flavors: z.array(
        z.object({
            potency: z.number(),
            flavor: berryRef("berry-flavor"),
        }),
    ),
    item: berryRef("item"),
    natural_gift_type: berryRef("type"),
});

const berryPaginationZ = z.object({
    count: z.number(),
    next: pokeListEndpointZ("berry").nullable(),
    previous: pokeListEndpointZ("berry").nullable(),
    results: z.array(berryRef("berry")),
}) satisfies z.ZodType<PokePaginationResult<BerryRefT, "berry">>;

export default pokeBerryZ;
export { berryRef, berryPaginationZ };
export type PokeBerryT = z.infer<typeof pokeBerryZ>;
export type BerryRefT = z.infer<ReturnType<typeof berryRef<"berry">>>;
