import { queryOptions } from "@tanstack/react-query";
import { berryFirmnessZ, type BerryFirmnessT } from "../types";
import berryFirmnessKeys from "./keys";

export async function getFirmness({
    firmnessId,
}: { firmnessId: number | string }): Promise<BerryFirmnessT> {
    const url = `https://pokeapi.co/api/v2/berry-firmness/${firmnessId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    const data = await response.json();
    return berryFirmnessZ.parse(data);
}

export const getBerryFirmnessQueryOptions = (firmnessId: number | string) => {
    return queryOptions({
        queryKey: berryFirmnessKeys.detail(firmnessId),
        queryFn: () => getFirmness({ firmnessId }),
    });
};
