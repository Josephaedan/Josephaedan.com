import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

const site = import.meta.env.DEPLOYED_URL || "https://www.josephaedan.com";

// https://astro.build/config
export default defineConfig({
  site: site,
  integrations: [sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
