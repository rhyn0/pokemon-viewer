import { useSuspenseQuery } from "@tanstack/react-query";
import { getBerryFlavorQueryOptions } from "../api/get-flavor";
import type berryFirmnessKeys from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { BerryFlavorT } from "../types";

type Key = typeof berryFirmnessKeys;
type QueryKey = ReturnType<Key["detail"]>;

export interface useBerryFlavorQueryProps
    extends ExtraQueryOptionsT<BerryFlavorT, QueryKey> {
    flavorId: number | string;
}
export default function useBerryFlavorQuery({
    flavorId,
    ...options
}: useBerryFlavorQueryProps) {
    return useSuspenseQuery({
        ...getBerryFlavorQueryOptions(flavorId),
        ...options,
    });
}
