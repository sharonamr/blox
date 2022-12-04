import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { mdToReactPlugin } from '@ui-blox/scripts/plugins/md-generate-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  resolve: {
    alias: {
      'blox-example-components': resolve(__dirname, '../components/src/index.ts'),
      '@ui-blox/core': resolve(__dirname, '../core/src/index.ts'),
    },
  },
  plugins: [react(), mdToReactPlugin()]
});
