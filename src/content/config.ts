// 1. Import utilities from `astro:content`
import {
  AchievementFrontmatter,
  EducationFrontmatter,
  ExperienceFrontmatter,
  ProjectFrontmatter,
  TechnologyFrontmatter,
} from "@/types/collections";
import { defineCollection } from "astro:content";

// 2. Define your collection(s)
const educationCollection = defineCollection({
  type: "content",
  schema: EducationFrontmatter,
});

const technologiesCollection = defineCollection({
  type: "data",
  schema: TechnologyFrontmatter,
});

const experienceCollection = defineCollection({
  type: "content",
  schema: ExperienceFrontmatter,
});

const achievementsCollection = defineCollection({
  type: "content",
  schema: AchievementFrontmatter,
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ProjectFrontmatter,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  education: educationCollection,
  technologies: technologiesCollection,
  experience: experienceCollection,
  achievements: achievementsCollection,
  projects: projectsCollection,
};
