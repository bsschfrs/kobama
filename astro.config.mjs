// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO(check): domein nog niet bevestigd. Gelijk houden met `url` in src/content/site.ts.
  // Canonical, sitemap en robots.txt gebruiken deze waarde.
  site: 'https://kobama.nl',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
