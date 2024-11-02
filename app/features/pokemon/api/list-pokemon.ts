import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { pokemonListZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getPokemonList = listEndpointFetchBuilder(
    endpointCollectionName,
    pokemonListZ,
);

export const getListPokemonQueryOptions = queryOptions({
    queryKey: keyFactory.all,
    queryFn: () => getPokemonList({ offset: 0 }),
});
