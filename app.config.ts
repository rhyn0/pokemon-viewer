import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";

export const viteConfig = {
    plugins: [viteTsConfigPaths()],
} as const;
export default defineConfig({
    vite: {
        // @ts-expect-error - some odd any typings
        plugins: () => viteConfig.plugins,
    },
});
