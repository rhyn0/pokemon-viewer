import { useSuspenseQuery } from "@tanstack/react-query";
import { getBerryFirmnessQueryOptions } from "@/features/poke-berry-firmness/api/get-firmness";
import type berryFirmnessKeys from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { BerryFirmnessT } from "../types";

type BerryFirmnessKey = typeof berryFirmnessKeys;

type BerryFirmnessQueryKey = ReturnType<BerryFirmnessKey["detail"]>;

export interface useBerryFirmnessQueryProps
    extends ExtraQueryOptionsT<BerryFirmnessT, BerryFirmnessQueryKey> {
    firmnessId: number | string;
}
export default function useBerryFirmnessQuery({
    firmnessId,
    ...options
}: useBerryFirmnessQueryProps) {
    return useSuspenseQuery({
        ...getBerryFirmnessQueryOptions(firmnessId),
        ...options,
    });
}
