import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'core',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react'],
    }
  },
  plugins: [react()]
})
