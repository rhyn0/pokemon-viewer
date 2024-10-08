import { queryOptions, useQuery } from "@tanstack/react-query";
import type { BerryId, PokeBerryT } from "../types";
import pokeBerryZ from "../types/schema";
import { berryKeys } from "./keys";

export async function getBerry({
    berryId,
}: { berryId: BerryId }): Promise<PokeBerryT> {
    const url = `https://pokeapi.co/api/v2/berry/${berryId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    const data = await response.json();
    return pokeBerryZ.parse(data);
}

export const getBerryQueryOptions = (berryId: BerryId) => {
    return queryOptions({
        queryKey: berryKeys.detail(berryId),
        queryFn: () => getBerry({ berryId }),
    });
};

export function useBerryQuery(berryId: BerryId) {
    return useQuery({
        ...getBerryQueryOptions(berryId),
    });
}
