import { z, defineCollection } from "astro:content";

const base = import.meta.env.BASE_URL;

export default defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.date(),
    featured_image: z.string().optional(),
  }),
});
