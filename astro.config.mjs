// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Hoofdversie is www (kobama.nl stuurt met een 308 door). Gelijk houden met `url` in
  // src/content/site.ts. Canonical, og:url, sitemap en robots.txt gebruiken deze waarde.
  site: 'https://www.kobama.nl',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/privacy') && !page.includes('/bedrijfsgegevens') })],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
