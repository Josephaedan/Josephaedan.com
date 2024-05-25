import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

const site = import.meta.env.DEPLOYED_URL || "https://www.josephaedan.com";

// https://astro.build/config
export default defineConfig({
  site: site,
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
