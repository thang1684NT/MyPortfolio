import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required so asset paths work on GitHub Pages (site lives under /MyPortfolio/)
  base: '/MyPortfolio/',
})
