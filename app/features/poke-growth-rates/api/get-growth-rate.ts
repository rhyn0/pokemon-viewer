import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { growthRateZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getGrowthRate = getEndpointFetchBuilder(
    endpointCollectionName,
    growthRateZ,
);

export const getGrowthRateQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: keyFactory.detail(id),
        queryFn: () => getGrowthRate({ id }),
    });
};
