// Blogartikelen: Markdown-bestanden in src/content/blog/. De bestandsnaam wordt de URL
// (/blog/<bestandsnaam>/). Niets verzinnen: een artikel dat nog niet geschreven of
// bevestigd is krijgt `placeholder: true` en houdt `npm run qa -- --launch` tegen.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Leeg laten zolang het artikel een placeholder is.
    date: z.coerce.date().optional(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog };
