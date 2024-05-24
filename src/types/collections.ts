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

export const AchievementFrontmatter = z.object({
  Title: z.string(),
  Date: z.string(),
  Published: z.date(),
});
export type AchievementFrontmatter = z.infer<typeof AchievementFrontmatter>;

export const ProjectFrontmatter = z.object({
  Title: z.string(),
  URL: z.string().url(),
  Date: z.string(),
  Published: z.date(),
  Technologies: z.array(reference("technologies")),
});
export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatter>;