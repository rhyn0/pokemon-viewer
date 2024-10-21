import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import type { CharacteristicKeyT } from "../api/keys";
import type { ExtraInfiniteQueryOptionsT } from "@/types/api";
import type { PokeCharacteristicListT } from "../types";
import { getCharacteristicInfiniteQueryOptions } from "../api/list-characteristics";

type QueryKey = CharacteristicKeyT["all"];

export interface usePokeCharacteristicInfiniteQueryProps
    extends Partial<
        ExtraInfiniteQueryOptionsT<PokeCharacteristicListT, QueryKey>
    > {}
export default function usePokeCharacteristicInfiniteQuery({
    ...options
}: usePokeCharacteristicInfiniteQueryProps = {}) {
    return useSuspenseInfiniteQuery({
        ...getCharacteristicInfiniteQueryOptions,
        ...options,
    });
}
