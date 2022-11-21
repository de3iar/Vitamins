import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3500,
    hmr: true,
    usePolling: true
  },
  build: {
    target: 'esnext',
  },

});
