import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";
import { log } from "util";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import eslintPlugin from 'vite-plugin-eslint';

log(`BUNDLE_ANALYZE = ${process.env.BUNDLE_ANALYZE}`)
function getBundleVisualizerPlugin() {
    return {
        ...visualizer({
            template: "treemap",
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
        apply: "build",
        enforce: "post",
    } as unknown as Plugin;
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        svgr(),
        tsconfigPaths(),
        eslintPlugin(),
        process.env.BUNDLE_ANALYZE === "1" && getBundleVisualizerPlugin(),
    ].filter(Boolean),
    define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
});