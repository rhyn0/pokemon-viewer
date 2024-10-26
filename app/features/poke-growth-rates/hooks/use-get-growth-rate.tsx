import { useSuspenseQuery } from "@tanstack/react-query";
import { getGrowthRateQueryOptions } from "../api/get-growth-rate";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { GrowthRateT } from "../types";

type QueryKey = ReturnType<KeyT["detail"]>;

export interface QueryProps extends ExtraQueryOptionsT<GrowthRateT, QueryKey> {
    id: number | string;
}

export function useGrowthRateQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getGrowthRateQueryOptions(id),
        ...options,
    });
}
