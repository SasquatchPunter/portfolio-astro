import { z, defineCollection } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});
