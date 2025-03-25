import react from '@vitejs/plugin-react'
import sass from 'sass'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        sassOptions: {
          fiber: false,
          quietDeps: true,
        },
      },
    },
  },
})
