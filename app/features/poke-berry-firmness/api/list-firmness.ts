import { infiniteQueryOptions } from "@tanstack/react-query";
import { berryFirmnessListZ, type BerryFirmnessListT } from "../types";
import berryFirmnessKeys from "./keys";
import { getOffsetParam } from "@/lib/offset-parsing";

export async function getFirmness({
    offset,
    limit = 20,
}: { offset: number; limit?: number }): Promise<BerryFirmnessListT> {
    const searchParams = new URLSearchParams({
        offset: String(offset),
        limit: String(limit),
    });
    const url = `https://pokeapi.co/api/v2/berry-firmness?${searchParams.toString()}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    const data = await response.json();
    return berryFirmnessListZ.parse(data);
}

export const getBerryFirmnessInfiniteQueryOptions = infiniteQueryOptions({
    queryKey: berryFirmnessKeys.all,
    queryFn: ({ pageParam = 0 }) => {
        return getFirmness({ offset: pageParam as number });
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
