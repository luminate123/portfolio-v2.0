// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luminate123.github.io',

  // Si tu repo es solo 'TU_USUARIO.github.io', puedes borrar esta línea
  base: '/portfolio-v2.0',

  vite: {
    plugins: [tailwindcss()]
  }
});