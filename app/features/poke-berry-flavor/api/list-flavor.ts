import { infiniteQueryOptions } from "@tanstack/react-query";
import { berryFlavorListZ, type BerryFlavorListT } from "../types";
import berryFlavorKeys from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export async function getFlavorList({
    offset,
    limit = 20,
}: { offset: number; limit?: number }): Promise<BerryFlavorListT> {
    const searchParams = new URLSearchParams({
        offset: String(offset),
        limit: String(limit),
    });
    const url = `https://pokeapi.co/api/v2/berry-flavor?${searchParams.toString()}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    const data = await response.json();
    return berryFlavorListZ.parse(data);
}

export const getBerryFlavorInfiniteQueryOptions = infiniteQueryOptions({
    queryKey: berryFlavorKeys.all,
    queryFn: ({ pageParam = 0 }) => {
        return getFlavorList({ offset: pageParam as number });
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
