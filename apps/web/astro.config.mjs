import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"

import { SITE } from "./src/consts.ts"

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: "static",
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    // Dual Shiki themes so code blocks follow the site's light/dark toggle.
    // The `.dark` swap is wired up in global.css via the --shiki-dark vars.
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
})
