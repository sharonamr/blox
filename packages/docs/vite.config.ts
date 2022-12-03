import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { mdToReactPlugin } from '@blox/scripts/plugins/md-generate-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'blox-example-components': resolve(__dirname, '../components/src/index.ts'),
      '@blox/core': resolve(__dirname, '../core/src/index.ts'),
    },
  },
  plugins: [react(), mdToReactPlugin()]
});
