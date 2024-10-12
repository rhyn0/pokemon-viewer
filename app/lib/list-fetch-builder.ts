import type { PaginationProps } from "@/types/api";
import type { z } from "zod";

export function listEndpointFetchBuilder<T extends z.ZodType>(
    endpoint: string,
    schema: T,
): (
    opts: Required<Pick<PaginationProps, "offset">> &
        Pick<PaginationProps, "limit">,
) => Promise<z.infer<T>> {
    return async ({ offset, limit = 20 }) => {
        const searchParams = new URLSearchParams({
            offset: String(offset),
            limit: String(limit),
        });
        const url = `https://pokeapi.co/api/v2/${endpoint}?${searchParams.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
        }
        const data = await response.json();
        return schema.parse(data);
    };
}
