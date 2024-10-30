const natureKeys = {
    all: ["nature"] as const,
    detail: (id: number | string) => [...natureKeys.all, id] as const,
};

export default natureKeys;
export type KeyT = typeof natureKeys;
