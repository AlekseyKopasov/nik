import react from '@vitejs/plugin-react'
import sass from 'sass'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: +env.PORT,
    },
    preview: {
      port: +env.PORT,
    },
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
  }
})
