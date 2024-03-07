import { z, defineCollection } from "astro:content";

// const blogSchema = z.object({
//   title: z.string(),
//   description: z.string(),
//   pubDate: z.coerce.date(),
//   updatedDate: z.string().optional(),
//   heroImage: z.string().optional(),
//   badge: z.string().optional(),
// });

const projectsSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  area: z.string(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
});

// export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;

// const blogCollection = defineCollection({ schema: blogSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
  // blog: blogCollection,
  projects: projectsCollection,
};
