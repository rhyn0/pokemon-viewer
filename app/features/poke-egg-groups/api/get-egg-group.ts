import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokeEggGroupZ } from "../types";
import { queryOptions } from "@tanstack/react-query";
import characteristicKeys from "./keys";

export const getPokeEggGroup = getEndpointFetchBuilder(
    "egg-group",
    pokeEggGroupZ,
);

export const getPokeEggGroupQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: characteristicKeys.detail(id),
        queryFn: () => getPokeEggGroup({ id }),
    });
};
