import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type { KeyT } from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import { getListNatureInfiniteQueryOptions } from "../api/list-nature";
import type { PokeNatureListT } from "../types";

type QueryKey = KeyT["all"];
export interface QueryProps
    extends Partial<ExtraInfiniteQueryOptionsT<PokeNatureListT, QueryKey>> {}
export default function useNatureListInfiniteQuery({
    ...options
}: QueryProps = {}) {
    return useSuspenseInfiniteQuery({
        ...getListNatureInfiniteQueryOptions,
        ...options,
    });
}
