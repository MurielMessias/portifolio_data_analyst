import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portifolio_data_analyst/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
