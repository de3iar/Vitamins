import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
export default defineConfig({

  plugins: [solidPlugin()],
  server: {
    port: 3500,
    hmr: true,
    usePolling: true
  },
  resolve: {
    alias: [{ find: '@i18n', replacement: resolve(__dirname, 'i18n') }],
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: 'static/[ext]/name-[hash].[ext]'
      }
    }
  },

});
