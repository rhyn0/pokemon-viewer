import { useSuspenseQuery } from "@tanstack/react-query";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import { getListGrowthRateQueryOptions } from "../api/list-growth-rates";
import type { GrowthRateListT } from "../types";

type QueryKey = KeyT["all"];
export interface QueryProps
    extends Partial<ExtraQueryOptionsT<GrowthRateListT, QueryKey>> {}
export default function useGrowthRateListQuery({
    ...options
}: QueryProps = {}) {
    return useSuspenseQuery({
        ...getListGrowthRateQueryOptions,
        ...options,
    });
}
