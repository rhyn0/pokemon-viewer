import type { DefaultOptions } from "@tanstack/react-query";

export const queryConfig = {
    queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false, // This is a good default for most apps
        retry: false, // This is a good default for most apps
        staleTime: Number.POSITIVE_INFINITY, //  Our data is never changing, so we can set this to Infinity
        refetchInterval: false, // We don't want to refetch
        refetchOnMount: false, // We don't want to refetch
    },
} satisfies DefaultOptions;
