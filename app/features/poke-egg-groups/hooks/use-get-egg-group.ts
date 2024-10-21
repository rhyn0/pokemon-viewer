import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokeEggGroupQueryOptions } from "../api/get-egg-group";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeEggGroupT } from "../types";

type QueryKey = ReturnType<KeyT["detail"]>;

export interface QueryProps
    extends ExtraQueryOptionsT<PokeEggGroupT, QueryKey> {
    id: number | string;
}

export function usePokeEggGroupQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getPokeEggGroupQueryOptions(id),
        ...options,
    });
}
