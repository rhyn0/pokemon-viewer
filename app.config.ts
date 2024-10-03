import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    vite: {
        // @ts-expect-error - some odd any typings
        plugins: () => [
            // this is the plugin that enables path aliases
            viteTsConfigPaths({
                projects: ["./tsconfig.json"],
            }),
        ],
        test: {
            environment: "jsdom",
            setupFiles: ["./vitest.setup.ts"],
            reporters: ["basic"],
        },
    },
});
