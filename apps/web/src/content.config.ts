import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

/**
 * React knowledge base. Each topic ships as a pair of MDX files that share the
 * same `slug` — `<name>.en.mdx` and `<name>.vi.mdx`. The article route renders
 * both languages and a client toggle flips which one is visible (see
 * `stores/lang.ts`), so the schema only needs to describe one localized entry.
 */
const learn = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/learn" }),
  schema: z.object({
    /** Shared id across the en/vi pair — also the URL segment under /learn.
        NB: named `topic`, not `slug`, because `slug` is reserved by the content
        loader (both language files would collide on the same entry id). */
    topic: z.string(),
    lang: z.enum(["en", "vi"]),
    title: z.string(),
    summary: z.string(),
    /** Section the topic belongs to on the hub, e.g. "Fundamentals". */
    category: z.enum(["Fundamentals", "Hooks", "Advanced", "Interview"]),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    /** Global ordering across the curriculum (low = study first). */
    order: z.number(),
    /** Minutes to read, shown on the card. */
    readingTime: z.number().optional(),
  }),
})

export const collections = { learn }
