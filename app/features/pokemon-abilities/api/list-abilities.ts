import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { abilityListZ } from "../types";
import { infiniteQueryOptions } from "@tanstack/react-query";
import abilityKeys from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export const getAbilityList = listEndpointFetchBuilder("ability", abilityListZ);

export const getAbilityInfiniteQueryOptions = infiniteQueryOptions({
    queryKey: abilityKeys.all,
    queryFn: ({ pageParam = 0 }) => {
        return getAbilityList({ offset: pageParam as number });
    },
    getNextPageParam: (lastPage) => {
        if (!lastPage.next) {
            // no more pages
            return undefined;
        }
        return getOffsetParam(lastPage.next);
    },
    initialPageParam: 0,
});
