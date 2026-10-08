import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Amplify (weown.ai) publishes from build/, matching the previous CRA setup.
  build: { outDir: 'build' },
})
