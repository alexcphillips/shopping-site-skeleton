import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        build: {
            rollupOptions: {
                external: [
                    "**/*.test.ts",
                    "**/*.spec.ts",
                    "**/*.ignore.*",
                    "*.ignore.*/**",
                ],
            },
        },
        plugins: [
            react(), // <-- just the default plugin
        ],
        define: {
            "window.l": "console.log",
            l: "console.log",
        },
        server: {
            proxy: {
                "/api": {
                    target: process.env.VITE_BASE_URL,
                    changeOrigin: false,
                },
            },
        },
    });
};
