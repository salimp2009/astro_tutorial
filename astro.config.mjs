import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// https://astro.build/config
// export default defineConfig({});

export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dark-plus",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  output: "static",
  // adapter: vercel(),
  integrations: [react()],
});
