import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { eggGroupListZ } from "../types";
import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getEggGroupList = listEndpointFetchBuilder(
    "egg-group",
    eggGroupListZ,
);

const LIMIT = 5;

export const getEggGroupPaginatedQueryOptions = (page: number) =>
    queryOptions({
        queryKey: keyFactory.page(page),
        queryFn: () =>
            // this is because the offset is 0-based
            // offset is also not page based but individual result based.
            getEggGroupList({ offset: (page - 1) * LIMIT, limit: LIMIT }),
        placeholderData: keepPreviousData,
    });
