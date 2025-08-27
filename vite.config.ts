import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  }
})
