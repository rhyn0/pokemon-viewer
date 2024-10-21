const eggGroupKeys = {
    all: ["egg-group"] as const,
    page: (page: number) => [...eggGroupKeys.all, page] as const,
    detail: (id: number | string) => [...eggGroupKeys.all, id] as const,
};

export default eggGroupKeys;
export type KeyT = typeof eggGroupKeys;
