import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hero_image: z.string().optional(),
    carousel: z.array(z.object({
      image: z.string(),
      title: z.string(),
      subtitle: z.string(),
    })).optional(),
    intro_title: z.string().optional(),
    intro_description: z.string().optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon_svg: z.string(),
    })).optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    menu_categories: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({
        name: z.string(),
        description: z.string(),
        price_info: z.string().optional(),
      })),
    })).optional(),
  }),
});

const menuCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hero_image: z.string().optional(),
    menu_categories: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({
        name: z.string(),
        description: z.string(),
        price_info: z.string().optional(),
      })),
    })),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'menu': menuCollection,
};
