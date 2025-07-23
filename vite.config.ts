import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  }
})
