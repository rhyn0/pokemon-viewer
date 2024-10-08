export const berryKeys = {
    all: ["berries"] as const,
    detail: (id: number | string) => [...berryKeys.all, id] as const,
} as const;
