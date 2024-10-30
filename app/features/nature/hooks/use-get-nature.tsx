import { useSuspenseQuery } from "@tanstack/react-query";
import { getNatureQueryOptions } from "../api/get-nature";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeNatureT } from "../types";

type QueryKey = ReturnType<KeyT["detail"]>;

export interface QueryProps extends ExtraQueryOptionsT<PokeNatureT, QueryKey> {
    id: number | string;
}

export function useNatureQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getNatureQueryOptions(id),
        ...options,
    });
}
