import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'esbuild',
  },
  plugins: [react()],
})
