import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from 'vite-plugin-ts'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    lib: {
        entry: resolve(__dirname, 'lib', 'index.ts'),
        name: 'VueSlider',
        fileName: (format) => `vue-slider-component.${format}.js`,
      },
  },
  plugins: [/*vue(), */vueJsx()],
});
