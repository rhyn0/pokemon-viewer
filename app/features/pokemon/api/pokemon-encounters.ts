import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

/**
 * Loosely returns an object as the typing for this spans 3 other collections.
 * TODO: typing improvement
 *
 * @param param0 id of the pokemon
 */
export async function getPokemonEncounters({
    id,
}: { id: string | number }): Promise<{ [key: string]: unknown }> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    return await response.json();
}

export const getPokemonEncounterQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: keyFactory.encounters(id),
        queryFn: () => getPokemonEncounters({ id }),
    });
};
