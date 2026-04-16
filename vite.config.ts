import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use o caminho fixo do seu repositório
  base: '/portifolio_data_analyst/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});