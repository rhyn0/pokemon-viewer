const growthRateKeys = {
    all: ["growth-rate"] as const,
    detail: (id: number | string) => [...growthRateKeys.all, id] as const,
};

export default growthRateKeys;
export type KeyT = typeof growthRateKeys;
