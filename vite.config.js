import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Cambia 'opv-drywall' por el nombre real de tu repositorio en GitHub
  base: '/opv-drywall/',

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        acercaDe:       resolve(__dirname, 'src/pages/acercaDe.html'),
        galeria:        resolve(__dirname, 'src/pages/galeria.html'),
        preguntasFrecuentes: resolve(__dirname, 'src/pages/preguntasFrecuentes.html'),
        nuestrosProgramas:   resolve(__dirname, 'src/pages/nuestrosProgramas.html'),
        porqueOpv:      resolve(__dirname, 'src/pages/porqueOpv.html'),
        testimonios:    resolve(__dirname, 'src/pages/testimonios.html'),
        formRegistro:   resolve(__dirname, 'src/pages/formRegistro.html'),
        contactenos:    resolve(__dirname, 'src/pages/contactenos.html'),
        terminosYcondiciones: resolve(__dirname, 'src/pages/terminosYcondiciones.html'),
      }
    }
  }
})
