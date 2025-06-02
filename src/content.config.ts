// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
const recipes = defineCollection({  
  loader: file("src/recipes/recipes.json"),
  schema: z.object({
    id:z.number(),
    name: z.string(),
    serving: z.string(),
    instructions: z.string(),
    ingredients: z.string(),
    picture: z.string(),

  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { recipes };
