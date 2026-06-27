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
  // Thông tin liên hệ riêng tư — đọc từ .env (không commit), không prefix PUBLIC_ nên không lọt vào bundle client.
  phone: import.meta.env.CONTACT_PHONE ?? "",
  linkedin: import.meta.env.CONTACT_LINKEDIN ?? "",
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
  { label: "LinkedIn", href: SITE.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" },
] as const
