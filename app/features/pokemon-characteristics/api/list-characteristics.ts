import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { characteristicListZ } from "../types";
import { infiniteQueryOptions } from "@tanstack/react-query";
import characteristicKeys from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export const getCharacteristicList = listEndpointFetchBuilder(
    "characteristic",
    characteristicListZ,
);

export const getCharacteristicInfiniteQueryOptions = infiniteQueryOptions({
    queryKey: characteristicKeys.all,
    queryFn: ({ pageParam = 0 }) => {
        return getCharacteristicList({ offset: pageParam as number });
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
