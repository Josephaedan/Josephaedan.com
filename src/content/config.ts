// 1. Import utilities from `astro:content`
import {
  EducationFrontmatter,
  ExperienceFrontmatter,
  TechnologyFrontmatter,
} from "@/types/collections";
import { defineCollection, reference, z } from "astro:content";

// 2. Define your collection(s)
const educationCollection = defineCollection({
  type: "content",
  schema: EducationFrontmatter,
});

const technologyCollection = defineCollection({
  type: "data",
  schema: TechnologyFrontmatter,
});

const experienceCollection = defineCollection({
  type: "content",
  schema: ExperienceFrontmatter,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  education: educationCollection,
  technologies: technologyCollection,
  experience: experienceCollection,
};
