import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonEncounterQueryOptions } from "../api/pokemon-encounters";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";

type QueryKey = ReturnType<KeyT["encounters"]>;

export interface QueryProps
    extends ExtraQueryOptionsT<{ [key: string]: unknown }, QueryKey> {
    id: number | string;
}

export function usePokemonEncountersQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getPokemonEncounterQueryOptions(id),
        ...options,
    });
}
