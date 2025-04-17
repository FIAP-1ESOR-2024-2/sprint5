import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888, 
    open: true, 
    hmr: {
      port: 8888,
    },
  },
  build: {
    sourcemap: true, 
    outDir: 'docs', 
  },
})
