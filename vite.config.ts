import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
        '@/app': resolve(__dirname, 'src/app'),
        '@/api': resolve(__dirname, 'src/app/api'),
        '@/features': resolve(__dirname, 'src/features'),
        '@/shared': resolve(__dirname, 'src/shared'),
        '@/assets': resolve(__dirname, 'src/assets'),
        src: resolve(__dirname, 'src'),
      },
    },
})
