import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { getCollection, type ContentEntryMap } from "astro:content";

type MarkdownContent = {
  Content: AstroComponentFactory;
};

/**
 * Gets content from a collection sorted by a key
 */
export async function getSortedContentFromCollection<ContentType>(
  collection: keyof ContentEntryMap,
  key?: string
): Promise<(ContentType & MarkdownContent)[]> {
  const entries = await getCollection(collection);
  if (key) {
    entries.sort((a, b) => {
      return a.data[key] > b.data[key] ? -1 : 1;
    });
    console.log(entries);
  }
  return Promise.all(
    entries.map(async (entry) => {
      const { Content } = await entry.render();
      return {
        ...entry.data,
        Content,
      } as unknown as ContentType & MarkdownContent;
    })
  );
}
