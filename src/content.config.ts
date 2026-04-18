import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    carousel: z.array(z.object({
      image: z.string(),
      title: z.string(),
      subtitle: z.string()
    })).optional(),
    intro_title: z.string().optional(),
    intro_description: z.string().optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon_svg: z.string()
    })).optional(),
    hero_image: z.string().optional(),
    title: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional()
  })
});

export const collections = {
  pages: pagesCollection,
};
