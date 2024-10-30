import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { pokeNatureListZ, endpointCollectionName } from "../types";
import { infiniteQueryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export const getNatureList = listEndpointFetchBuilder(
    endpointCollectionName,
    pokeNatureListZ,
);

export const getListNatureInfiniteQueryOptions = infiniteQueryOptions({
    queryKey: keyFactory.all,
    queryFn: ({ pageParam }) =>
        getNatureList({ offset: pageParam as number, limit: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
        if (!lastPage.next) {
            // no more pages
            return undefined;
        }
        return getOffsetParam(lastPage.next);
    },
});
