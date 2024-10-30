import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokeNatureZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getNature = getEndpointFetchBuilder(
    endpointCollectionName,
    pokeNatureZ,
);

export const getNatureQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: keyFactory.detail(id),
        queryFn: () => getNature({ id }),
    });
};
