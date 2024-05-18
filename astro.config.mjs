import { defineConfig } from 'astro/config';

const site = import.meta.env.DEPLOYED_URL || "https://www.josephaedan.com";

// https://astro.build/config
export default defineConfig({
  site: site,
});
