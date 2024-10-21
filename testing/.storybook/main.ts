import type { StorybookConfig } from "@storybook/react-vite";
import * as path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    viteFinal: async (config) => {
        if (!config.plugins) {
            config.plugins = [];
        }
        config.plugins.push(
            /** @see https://github.com/aleclarson/vite-tsconfig-paths */
            tsconfigPaths({
                root: path.resolve(__dirname, "../../"),
            }),
        );

        return config;
    },
};
export default config;
