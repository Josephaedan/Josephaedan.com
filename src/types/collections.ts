import { z } from "astro/zod";
import { reference } from "astro:content";

export const EducationFrontmatter = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Date: z.string(),
  Published: z.date(),
});
export type EducationFrontmatter = z.infer<typeof EducationFrontmatter>;

export const TechnologyFrontmatter = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  URL: z.string().url(),
});
export type TechnologyFrontmatter = z.infer<typeof TechnologyFrontmatter>;

export const ExperienceFrontmatter = z.object({
  Title: z.string(),
  Company: z.string(),
  Date: z.string(),
  Published: z.date(),
  Technologies: z.array(reference("technologies")),
});
export type ExperienceFrontmatter = z.infer<typeof ExperienceFrontmatter>;
