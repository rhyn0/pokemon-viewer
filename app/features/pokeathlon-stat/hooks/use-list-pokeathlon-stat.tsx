import { useSuspenseQuery } from "@tanstack/react-query";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import { getListPokeathlonStatQueryOptions } from "../api/list-pokeathlon-stat";
import type { PokeathlonStatListT } from "../types";

type QueryKey = KeyT["all"];
export interface QueryProps
    extends ExtraQueryOptionsT<PokeathlonStatListT, QueryKey> {}

export default function usePokeathlonStatListQuery({
    ...options
}: QueryProps = {}) {
    return useSuspenseQuery({
        ...getListPokeathlonStatQueryOptions,
        ...options,
    });
}
