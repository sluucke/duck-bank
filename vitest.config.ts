import { defineConfig } from 'vite';
// import { alias } from './src/tests/alias';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  esbuild: {
    tsconfigRaw: '{}',
  },
  resolve: {
    alias: {
      '@/': resolve(__dirname, './src'),
    },
  },
});
