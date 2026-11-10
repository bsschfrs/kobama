// Blogartikelen: Markdown-bestanden in src/content/blog/. De bestandsnaam wordt de URL
// (/blog/<bestandsnaam>/). Niets verzinnen: een artikel dat nog niet geschreven of
// bevestigd is krijgt `placeholder: true` en houdt `npm run qa -- --launch` tegen.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { copy } from "./content/copy";

// Auteur = de `id` van een founder in copy.people (koen, bas, mats). Geen verzonnen auteurs.
const authorIds = copy.people.members.map((m) => m.id) as [string, ...string[]];
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      // Leeg laten zolang het artikel een placeholder is.
      date: z.coerce.date().optional(),
      // Alleen invullen bij een echte inhoudelijke wijziging (geen nep-versheid).
      updated: z.coerce.date().optional(),
      author: z.enum(authorIds).optional(),
      placeholder: z.boolean().default(false),
    })
    // Een gepubliceerd artikel heeft altijd een echte auteur en een datum.
    .refine((d) => d.placeholder || (d.author && d.date), {
      message: "Een artikel zonder `placeholder: true` heeft `author` en `date` nodig.",
    }),
});

export const collections = { blog };
