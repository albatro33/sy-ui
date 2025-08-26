import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: async (config) => {
        config.esbuild = {
            jsx: "automatic",
            jsxImportSource: "@emotion/react",
        };

        config.css = {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        };

        return config;
    },
};
export default config;
