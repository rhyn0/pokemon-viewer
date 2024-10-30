import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokeathlonStatZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";
export const getPokeathlonStat = getEndpointFetchBuilder(
    endpointCollectionName,
    pokeathlonStatZ,
);

export const getPokeathlonStatQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: keyFactory.detail(id),
        queryFn: () => getPokeathlonStat({ id }),
    });
};
