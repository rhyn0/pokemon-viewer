import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokeathlonStatQueryOptions } from "../api/get-pokeathlon-stat";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeathlonStatT } from "../types";

type QueryKey = ReturnType<KeyT["detail"]>;

export interface QueryProps
    extends ExtraQueryOptionsT<PokeathlonStatT, QueryKey> {
    id: number | string;
}

export function usePokeathlonStatQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getPokeathlonStatQueryOptions(id),
        ...options,
    });
}
