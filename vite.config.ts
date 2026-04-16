import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portifolio_data_analyst/', // Isso aqui é a chave!
});