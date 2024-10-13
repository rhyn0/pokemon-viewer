import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokeAbilityZ } from "../types";
import { queryOptions } from "@tanstack/react-query";
import abilityKeys from "./keys";

export const getAbility = getEndpointFetchBuilder("ability", pokeAbilityZ);

export const getPokeAbilityQueryOptions = (abilityId: number | string) => {
    return queryOptions({
        queryKey: abilityKeys.detail(abilityId),
        queryFn: () => getAbility({ id: abilityId }),
    });
};
