import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type berryFlavorKeys from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import type { BerryFlavorListT } from "../types";
import { getBerryFlavorInfiniteQueryOptions } from "../api/list-flavor";

type Key = typeof berryFlavorKeys;

type QueryKey = Key["all"];

export interface useBerryFlavorInfiniteQueryProps
    extends Partial<ExtraInfiniteQueryOptionsT<BerryFlavorListT, QueryKey>> {}
export default function useBerryFlavorInfiniteQuery({
    ...options
}: useBerryFlavorInfiniteQueryProps = {}) {
    return useSuspenseInfiniteQuery({
        ...getBerryFlavorInfiniteQueryOptions,
        ...options,
    });
}
