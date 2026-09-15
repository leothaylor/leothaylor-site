import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.string(),
    year: z.string(),
    role: z.string(),
    proof: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    tags: z.array(z.string()).default([])
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    order: z.number().default(99),
    provenance: z.string().optional()
  })
});

export const collections = { projects, notes };
