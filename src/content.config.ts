import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),          // ← coincide con tu frontmatter
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),  // o cambia a image() si luego migras a imágenes gestionadas
    // opcional:
    // tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    date: z.date().optional(),
    summary: z.string().optional(),
    tech: z.array(z.string()).optional(),
    cover: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { blog,projects };
