const berryFirmnessKeys = {
    all: ["berry-firmness"] as const,
    detail: (berryFirmnessId: number | string) =>
        [...berryFirmnessKeys.all, berryFirmnessId] as const,
} as const;

export default berryFirmnessKeys;
