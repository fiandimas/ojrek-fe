import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
        '@/app': resolve(__dirname, 'src/app'),
        '@/api': resolve(__dirname, 'src/app/api'),
        '@/features': resolve(__dirname, 'src/features'),
        '@/shared': resolve(__dirname, 'src/shared'),
        '@/assets': resolve(__dirname, 'src/assets'),
        '@/constants': resolve(__dirname, 'src/constants'),
        '@/components': resolve(__dirname, 'src/components'),
        '@/lib': resolve(__dirname, 'src/lib'),
        src: resolve(__dirname, 'src'),
      },
    },
})
