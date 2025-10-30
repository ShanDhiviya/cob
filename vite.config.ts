import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components/index.ts'),
      '@core': resolve(__dirname, './src/core/index.ts'),
      '@store': resolve(__dirname, './src/store/index.ts'),
      '@pages': resolve(__dirname, './src/pages/index.ts'),
    },
  },
})
