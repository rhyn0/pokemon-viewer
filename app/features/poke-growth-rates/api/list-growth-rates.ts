import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { growthRateListZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getEggGroupList = listEndpointFetchBuilder(
    endpointCollectionName,
    growthRateListZ,
);

export const getListGrowthRateQueryOptions = queryOptions({
    queryKey: keyFactory.all,
    queryFn: () => getEggGroupList({ offset: 0 }),
});
