import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type berryFirmnessKeys from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import type { BerryFirmnessRefT } from "../types";
import { getBerryFirmnessInfiniteQueryOptions } from "../api/list-firmness";

type BerryFirmnessKey = typeof berryFirmnessKeys;

type BerryFirmnessQueryKey = BerryFirmnessKey["all"];

export interface useBerryFirmnessInfiniteQueryProps
    extends ExtraInfiniteQueryOptionsT<
        BerryFirmnessRefT,
        BerryFirmnessQueryKey
    > {}
export default function useBerryFirmnessInfiniteQuery({
    ...options
}: useBerryFirmnessInfiniteQueryProps) {
    return useSuspenseInfiniteQuery({
        ...getBerryFirmnessInfiniteQueryOptions,
        ...options,
    });
}
