import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type { AbilityKeysT } from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import type { PokeAbilityListT } from "../types";
import { getAbilityInfiniteQueryOptions } from "../api/list-abilities";

type QueryKey = AbilityKeysT["all"];

export interface useBerryFlavorInfiniteQueryProps
    extends Partial<ExtraInfiniteQueryOptionsT<PokeAbilityListT, QueryKey>> {}
export default function useBerryFlavorInfiniteQuery({
    ...options
}: useBerryFlavorInfiniteQueryProps = {}) {
    return useSuspenseInfiniteQuery({
        ...getAbilityInfiniteQueryOptions,
        ...options,
    });
}
