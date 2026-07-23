import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const novosti = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/novosti' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional().default(''),
    coverImage: z.string().nullable().optional(),
  }),
});

export const collections = { novosti };
