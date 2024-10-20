import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { getPokeCharacteristicQueryOptions } from "../api/get-characteristic";
import type { CharacteristicKeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeCharacteristicT } from "../types";

type QueryKey = ReturnType<CharacteristicKeyT["detail"]>;

export interface QueryProps
    extends ExtraQueryOptionsT<PokeCharacteristicT, QueryKey> {
    idList: (number | string)[];
}
export function usePokeCharacteristicQueries({
    idList,
    ...options
}: QueryProps) {
    return useSuspenseQueries({
        queries: idList.map((id) => ({
            ...getPokeCharacteristicQueryOptions(id),
            ...options,
        })),
    });
}

export function usePokeCharacteristicQuery({
    id,
    ...options
}: ExtraQueryOptionsT<PokeCharacteristicT, QueryKey> & {
    id: number | string;
}) {
    return useSuspenseQuery({
        ...getPokeCharacteristicQueryOptions(id),
        ...options,
    });
}
