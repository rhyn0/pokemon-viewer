import type { z } from "zod";

export function getEndpointFetchBuilder<T extends z.ZodType>(
    endpoint: string,
    schema: T,
): ({ id }: { id: number | string }) => Promise<z.infer<T>> {
    return async ({ id }) => {
        const url = `https://pokeapi.co/api/v2/${endpoint}/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
        }
        const data = await response.json();
        return schema.parse(data);
    };
}
