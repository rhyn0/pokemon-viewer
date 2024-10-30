const pokeathlonStatKeys = {
    all: ["pokeathlon-stat"] as const,
    detail: (id: number | string) => [...pokeathlonStatKeys.all, id] as const,
};

export default pokeathlonStatKeys;
export type KeyT = typeof pokeathlonStatKeys;
