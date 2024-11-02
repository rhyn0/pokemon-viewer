const pokemonKeys = {
    all: ["pokemon"] as const,
    detail: (id: number | string) => [...pokemonKeys.all, id] as const,
    encounters: (id: number | string) => [
        ...pokemonKeys.detail(id),
        "encounters",
    ],
};

export default pokemonKeys;
export type KeyT = typeof pokemonKeys;
