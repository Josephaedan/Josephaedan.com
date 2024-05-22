import { z } from "astro/zod";

export const EducationFrontmatter = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Date: z.string(),
  Published: z.date(),
});
export type EducationFrontmatter = z.infer<typeof EducationFrontmatter>;
