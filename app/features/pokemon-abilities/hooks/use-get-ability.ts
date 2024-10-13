import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokeAbilityQueryOptions } from "../api/get-ability";
import type { AbilityKeysT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import type { PokeAbilityT } from "../types";

type QueryKey = ReturnType<AbilityKeysT["detail"]>;

export interface QueryProps extends ExtraQueryOptionsT<PokeAbilityT, QueryKey> {
    id: number | string;
}
export default function usePokeAbilityQuery({ id, ...options }: QueryProps) {
    return useSuspenseQuery({
        ...getPokeAbilityQueryOptions(id),
        ...options,
    });
}
