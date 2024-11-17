import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { pokemonListZ, endpointCollectionName } from "@/features/pokemon/types";
import { infiniteQueryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export const getPokemonList = listEndpointFetchBuilder(
    endpointCollectionName,
    pokemonListZ,
);

export const getListPokemonQueryOptions = infiniteQueryOptions({
    queryKey: keyFactory.all,
    queryFn: ({ pageParam }) => getPokemonList({ offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
        if (!lastPage.next) {
            // no more pages
            return undefined;
        }
        return getOffsetParam(lastPage.next);
    },
});
