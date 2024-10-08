import {
    infiniteQueryOptions,
    useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import type { PaginationProps, PokePaginationResult } from "@/types/api";
import type { BerryRefT } from "../types";
import { berryKeys } from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";
import { berryPaginationZ } from "../types/schema";

export async function getBerries({
    limit = 0,
    offset = 20,
}: PaginationProps): Promise<PokePaginationResult<BerryRefT, "berry">> {
    const searchParams = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
    });
    const url = `https://pokeapi.co/api/v2/berry?${searchParams.toString()}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    return berryPaginationZ.parse(await response.json());
}

export const getInfinteBerriesQueryOptions = infiniteQueryOptions({
    queryKey: berryKeys.all,
    queryFn: ({ pageParam = 0 }) => {
        return getBerries({ offset: pageParam as number });
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

export function useInfiniteBerries() {
    return useSuspenseInfiniteQuery(getInfinteBerriesQueryOptions);
}
