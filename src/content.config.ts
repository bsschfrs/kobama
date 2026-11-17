// Blogartikelen: Markdown-bestanden in src/content/blog/. De bestandsnaam wordt de URL
// (/blog/<bestandsnaam>/). Niets verzinnen: een artikel dat nog niet geschreven of
// bevestigd is krijgt `placeholder: true` en houdt `npm run qa -- --launch` tegen.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      // Eigen SEO-titel (volledig, inclusief "| KOBAMA") en meta description
      // als die afwijken van de koptekst en de samenvatting. Anders gelden title en description.
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      // Korte naam voor de broodkruimel (structured data); anders de titel.
      breadcrumb: z.string().optional(),
      // Leeg laten zolang het artikel een placeholder is.
      date: z.coerce.date().optional(),
      // Alleen invullen bij een echte inhoudelijke wijziging (geen nep-versheid).
      updated: z.coerce.date().optional(),
      // Illustratie uit scripts/blog-visuals.mjs: "/images/blog/<slug>.svg". De .png ernaast
      // (1200x630) wordt het deelbeeld en de BlogPosting-image.
      image: z.string().regex(/^\/images\/blog\/[a-z0-9-]+\.svg$/).optional(),
      imageAlt: z.string().optional(),
      placeholder: z.boolean().default(false),
    })
    // Een gepubliceerd artikel heeft altijd een datum. Geen persoonlijke auteur: KOBAMA is de afzender.
    .refine((d) => d.placeholder || d.date, {
      message: "Een artikel zonder `placeholder: true` heeft `date` nodig.",
    })
    .refine((d) => !d.image || d.imageAlt, { message: "Een `image` heeft ook een `imageAlt` nodig." }),
});

export const collections = { blog };
