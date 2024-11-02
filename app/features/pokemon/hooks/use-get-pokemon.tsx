import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonQueryOptions } from "../api/get-pokemon";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokemonT } from "../types";

type QueryKey = ReturnType<KeyT["detail"]>;

export interface QueryProps extends ExtraQueryOptionsT<PokemonT, QueryKey> {
    id: number | string;
}

export function usePokemonQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getPokemonQueryOptions(id),
        ...options,
    });
}
