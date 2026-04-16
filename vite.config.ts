import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // O ponto antes da barra é o segredo para o GitHub Pages
  base: './', 
  build: {
    // Garante que o build limpe a pasta antes de gerar novos arquivos
    emptyOutDir: true,
  }
});