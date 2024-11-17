import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getListPokemonQueryOptions } from "@/features/pokemon/api/list-pokemon";

import type { KeyT } from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import type { PokemonListT } from "../types";

type QueryKey = KeyT["all"];
export interface QueryProps
    extends Partial<ExtraInfiniteQueryOptionsT<PokemonListT, QueryKey>> {}
export default function usePokemonListQuery({ ...options }: QueryProps = {}) {
    return useSuspenseInfiniteQuery({
        ...getListPokemonQueryOptions,
        ...options,
    });
}
