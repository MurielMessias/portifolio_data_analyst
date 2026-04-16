import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ISSO AQUI É O QUE CORRIGE O 404
  base: '/portifolio_data_analyst/',
  build: {
    emptyOutDir: true,
  }
});