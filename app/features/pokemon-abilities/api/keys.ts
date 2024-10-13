const abilityKeys = {
    all: ["ability"] as const,
    detail: (abilityId: number | string) =>
        [...abilityKeys.all, abilityId] as const,
};

export default abilityKeys;
export type AbilityKeysT = typeof abilityKeys;
