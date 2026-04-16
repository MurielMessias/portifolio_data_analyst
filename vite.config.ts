import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // MUDEI PARA PONTO E BARRA: Isso força caminhos relativos
})