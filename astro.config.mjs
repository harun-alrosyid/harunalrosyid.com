import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [react()],
});
