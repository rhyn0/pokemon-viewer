import { useSuspenseQuery } from "@tanstack/react-query";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeEggGroupListT } from "../types";
import { getEggGroupPaginatedQueryOptions } from "../api/list-egg-groups";

type QueryKey = ReturnType<KeyT["page"]>;
export interface QueryProps
    extends Partial<ExtraQueryOptionsT<PokeEggGroupListT, QueryKey>> {
    page: number;
}
export default function usePokeEggGroupPaginatedQuery({
    page,
    ...options
}: QueryProps) {
    return useSuspenseQuery({
        ...getEggGroupPaginatedQueryOptions(page),
        ...options,
    });
}
