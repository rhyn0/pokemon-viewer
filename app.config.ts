import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
export default defineConfig({
    vite: {
        plugins: [
            // this is the plugin that enables path aliases
            viteTsConfigPaths({
                projects: ["./tsconfig.json"],
            }),
            TanStackRouterVite({
                autoCodeSplitting: true,
            }),
        ],
    },
    server: {
        preset: "vercel",
    },
});
