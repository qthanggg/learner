import { SITE } from "../consts"

export type SeoInput = {
  title?: string
  description?: string
  /** Path beginning with "/" — used for canonical + OG url. */
  path?: string
  /** Absolute or root-relative image path for OG/Twitter. */
  image?: string
}

export type SeoMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
}

/** Build resolved SEO/OG metadata for a page from partial input. */
export function buildMeta(input: SeoInput = {}): SeoMeta {
  const title = input.title ? `${input.title} · ${SITE.shortTitle}` : SITE.title
  const description = input.description ?? SITE.description
  const canonical = new URL(input.path ?? "/", SITE.url).href
  const ogImage = new URL(input.image ?? "/og/og-default.png", SITE.url).href
  return { title, description, canonical, ogImage }
}

/** JSON-LD Person schema for the site author. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.author,
    jobTitle: SITE.role,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Design Systems",
      "Web Performance",
      "Monorepo Architecture",
      "Storybook",
      "Tailwind CSS",
    ],
    sameAs: [SITE.github],
  }
}
