import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://festival-oiessauvages.fr',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});