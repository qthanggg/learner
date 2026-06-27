/**
 * Single source of truth for site-wide constants: identity, contact, nav.
 * Kept framework-agnostic so it can be imported from .astro, .tsx, and astro.config.
 */
export const SITE = {
  url: "https://thangphq.dev",
  title: "Thang Pham — Front-End Engineer",
  shortTitle: "Thang Pham",
  description:
    "Front-End Engineer with 3+ years building high-performance web apps. Focused on design systems, monorepo architecture, and measurable web performance.",
  author: "Pham Huynh Quoc Thang",
  authorShort: "Thang Pham",
  role: "Front-End Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "quocthang2603@gmail.com",
  phone: "0773840946",
  github: "https://github.com/qthanggg",
  storybookUrl: "https://learner-storybook.vercel.app/",
  cvPath: "/cv/Pham-Huynh-Quoc-Thang-CV.pdf",
} as const

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const SOCIALS = [
  { label: "GitHub", href: SITE.github, icon: "github" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" },
] as const
