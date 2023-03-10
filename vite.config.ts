import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            protocolImports: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@components",
                replacement: resolve(__dirname, "src", "components"),
            },
            {
                find: "@layouts",
                replacement: resolve(__dirname, "src", "layouts"),
            },
            {
                find: "@utils",
                replacement: resolve(__dirname, "src", "utils"),
            },
        ],
    },
});
