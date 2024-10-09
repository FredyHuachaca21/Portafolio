import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/',
  build: {
    outDir: 'docs'  // Esto es importante
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
})
