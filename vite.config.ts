import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const basePath = process.env.VITE_BASE_URL || '/portifolio_data_analyst/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
