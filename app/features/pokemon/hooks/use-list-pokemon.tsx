import { useSuspenseQuery } from "@tanstack/react-query";
import type { KeyT } from "../api/keys";
import type { ExtraQueryOptionsT } from "@/types/api";
import { getListPokemonQueryOptions } from "../api/list-pokemon";
import type { PokemonListT } from "../types";

type QueryKey = KeyT["all"];
export interface QueryProps
    extends Partial<ExtraQueryOptionsT<PokemonListT, QueryKey>> {}
export default function usePokemonListQuery({ ...options }: QueryProps = {}) {
    return useSuspenseQuery({
        ...getListPokemonQueryOptions,
        ...options,
    });
}
