import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokemonZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getPokemon = getEndpointFetchBuilder(
    endpointCollectionName,
    pokemonZ,
);

export const getPokemonQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: keyFactory.detail(id),
        queryFn: () => getPokemon({ id }),
    });
};
