import { queryOptions } from "@tanstack/react-query";
import { berryFlavorZ, type BerryFlavorT } from "../types";
import berryFlavorKeys from "./keys";

export async function getFlavor({
    firmnessId,
}: { firmnessId: number | string }): Promise<BerryFlavorT> {
    const url = `https://pokeapi.co/api/v2/berry-flavor/${firmnessId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    const data = await response.json();
    return berryFlavorZ.parse(data);
}

export const getBerryFlavorQueryOptions = (firmnessId: number | string) => {
    return queryOptions({
        queryKey: berryFlavorKeys.detail(firmnessId),
        queryFn: () => getFlavor({ firmnessId }),
    });
};
