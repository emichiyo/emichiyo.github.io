import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(), 
    Pages({
      extensions: ["vue"],
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
