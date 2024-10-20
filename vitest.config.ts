import { defineConfig } from "vitest/config";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [viteTsConfigPaths()],
    test: {
        environment: "jsdom",
        setupFiles: ["./testing/vitest.setup.ts"],
        reporters: ["basic"],
        exclude: ["**/node_modules/**", "**/e2e/**"],
        coverage: {
            include: ["app/**"],
        },
        globals: true,
    },
});
