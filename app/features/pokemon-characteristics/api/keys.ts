const characteristicKeys = {
    all: ["characteristic"] as const,
    detail: (id: number | string) => [...characteristicKeys.all, id] as const,
};

export default characteristicKeys;
export type CharacteristicKeyT = typeof characteristicKeys;
