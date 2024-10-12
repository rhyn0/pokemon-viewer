const berryFlavorKeys = {
    all: ["berry", "flavor"] as const,
    detail: (berryFlavorId: number | string) =>
        [...berryFlavorKeys.all, berryFlavorId] as const,
};

export default berryFlavorKeys;
