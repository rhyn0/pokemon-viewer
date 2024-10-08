import type { PokeExactEndpoint } from "@/types/api";

export function extractGroup<T extends string>(url: PokeExactEndpoint<T>): T {
    const regex = /v2\/([^/]+)\//;
    const match = url.match(regex);
    if (match) {
        return match[1] as T;
    }
    throw new Error("Invalid URL format");
}

export function extractId<T extends string>(url: PokeExactEndpoint<T>): string {
    const regex = /\/([^/]+)\/?$/;
    const match = url.match(regex);
    if (match?.[1]) {
        return match[1];
    }
    throw new Error("Invalid URL format");
}
