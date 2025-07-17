import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Necesitamos el módulo 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // AÑADE O MODIFICA ESTA SECCIÓN 'resolve'
  resolve: {
    alias: {
      // El alias '@' es una convención común que apunta a 'src'
      '@': path.resolve(__dirname, './src'),
      // Mapeos específicos como los que necesitas
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'examples': path.resolve(__dirname, './src/examples'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'views': path.resolve(__dirname, './src/views'),
      // Puedes añadir cualquier otro alias que necesites
    },
  },
})