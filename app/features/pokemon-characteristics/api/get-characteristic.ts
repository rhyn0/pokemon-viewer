import { getEndpointFetchBuilder } from "@/lib/get-fetch-builder";
import { pokeCharacteristicZ } from "../types";
import { queryOptions } from "@tanstack/react-query";
import characteristicKeys from "./keys";

export const getPokemonCharacteristic = getEndpointFetchBuilder(
    "characteristic",
    pokeCharacteristicZ,
);

export const getPokeCharacteristicQueryOptions = (id: number | string) => {
    return queryOptions({
        queryKey: characteristicKeys.detail(id),
        queryFn: () => getPokemonCharacteristic({ id }),
    });
};
