import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(), 
    AutoImport({
      imports: [
        "vue",
        "vue-router"
      ]
    }),
    Pages({
      extensions: ["vue"],
    }),
    Components({
      extensions: ["vue"],
      dirs: ["src/components"],
      deep: false
    }),
  ],
  // resolve: {
  //   '@': resolve(__dirname, './src'),
  // },
  build: {
    rollupOptions: {
        output: {
            inlineDynamicImports: true
        }
    }
  },
});
