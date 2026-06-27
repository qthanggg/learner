/**
 * Case studies. Sourced from the CV + live products.
 * `featured` projects get a dedicated deep-dive page under /work/<slug>.
 */
import type { ImageMetadata } from "astro"

import traveleasyCover from "../assets/projects/traveleasy.jpg"
import tradexpoCover from "../assets/projects/tradexpo.jpg"
import agroconnectCover from "../assets/projects/agroconnect.png"
import erpCover from "../assets/projects/erp.png"

export type ProjectSlug = "traveleasy" | "tradexpo" | "agroconnect" | "erp"

export type Project = {
  slug: ProjectSlug
  name: string
  company: string
  period: string
  tagline: string
  summary: string
  featured: boolean
  role: string
  stack: string[]
  /** Short, scannable outcome metrics for cards. */
  metrics: { label: string; value: string }[]
  /** Deep-dive bullets (achievements). */
  highlights: string[]
  liveUrl?: string
  accent: "teal" | "pink" | "info" | "success"
  /** Cover image — real screenshot for live products, branded cover otherwise. */
  cover: ImageMetadata
  /** Whether the cover is a real product screenshot (vs a branded placeholder). */
  realShot: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: "traveleasy",
    name: "TravelEasy",
    company: "Ho Phi Long Co., Ltd",
    period: "Feb 2026 — Present",
    tagline: "B2B2C travel booking platform",
    summary:
      "Live OTA processing 100+ monthly bookings across flights, eSIM, hotels, and tours through direct and white-label partner channels.",
    featured: true,
    role: "Front-End Developer",
    stack: ["Next.js", "TypeScript", "React Query", "Zustand", "TailwindCSS", "Skyscanner API"],
    metrics: [
      { label: "Monthly bookings", value: "100+" },
      { label: "White-label partners", value: "MWG · Techhaus" },
      { label: "Verticals owned", value: "4" },
    ],
    highlights: [
      "Architected and optimized the core flight booking funnel (search → passenger details → checkout) on a live revenue platform — real-time fare updates, promotion/voucher logic, session recovery, and payment retry for incomplete orders.",
      "Engineered a multi-partner white-label architecture: custom branding, dynamic layouts, and localized payment options for partners like MWG and Techhaus from a single unified codebase, cutting per-partner delivery overhead.",
      "Implemented Skyscanner metasearch integration — front-end deeplink and data-mapping flows so comparison-site users enter checkout directly, preserving session and conversion from external acquisition channels.",
      "Owned end-to-end UI and core flows for travel eSIM, hotel, and tour verticals (search → detail → order).",
      "Accelerated delivery with AI-assisted development (Cursor, Claude) while keeping quality through review and testing.",
    ],
    liveUrl: "https://traveleasy.vn",
    accent: "info",
    cover: traveleasyCover,
    realShot: true,
  },
  {
    slug: "tradexpo",
    name: "TRADEXPO",
    company: "Arobid",
    period: "Jan 2025 — Jan 2026",
    tagline: "Virtual exhibition & B2B networking platform",
    summary:
      "3D virtual exhibition and B2B networking platform with live streaming and real-time interactions, serving thousands of concurrent users.",
    featured: true,
    role: "Front-End Developer",
    stack: [
      "Turborepo",
      "PNPM",
      "React",
      "Next.js (SSR/SSG)",
      "Zoom SDK",
      "WebSocket",
      "Vitest",
      "Playwright",
    ],
    metrics: [
      { label: "Reusable components", value: "490+" },
      { label: "Code reuse rate", value: "70%" },
      { label: "Faster initial load", value: "40%" },
      { label: "Lighthouse", value: "90+" },
      { label: "Languages (i18n)", value: "11" },
      { label: "Apps in monorepo", value: "15+" },
    ],
    highlights: [
      "Owned UI architecture across a 15+ app monorepo using Turborepo & PNPM.",
      "Built 490+ reusable React components, lifting code reuse to 70% across projects.",
      "Implemented a Business Matching System: real-time slot booking, availability sync, and a scheduling calendar.",
      "Integrated Zoom SDK & WebSocket events for live sessions and real-time updates.",
      "Improved SSR & SSG performance → 40% faster initial load and a Lighthouse 90+ score.",
      "Established an automated QA stack: Vitest, Playwright, and a visual regression pipeline.",
      "Delivered full i18n across 11 languages with responsive design for every breakpoint.",
      "Optimized bundle size & runtime via code splitting, lazy loading, and image optimization.",
    ],
    liveUrl: "https://tradexpo.arobid.com/en",
    accent: "teal",
    cover: tradexpoCover,
    realShot: true,
  },
  {
    slug: "agroconnect",
    name: "AgroConnect",
    company: "Amazing Tech",
    period: "May 2024 — Dec 2024",
    tagline: "IoT smart-farm marketplace",
    summary:
      "An all-in-one digital ecosystem connecting local farmers directly to consumers, with integrated smart-farming tools.",
    featured: false,
    role: "Front-End Developer",
    stack: ["React", "TailwindCSS", "WebSocket", "Chart.js"],
    metrics: [
      { label: "Focus", value: "B2C marketplace" },
      { label: "Realtime", value: "IoT tracking" },
    ],
    highlights: [
      "Built a B2C marketplace with IoT integration — real-time livestock tracking via WebSockets and Chart.js.",
      "Developed shopping cart, checkout, order management, and multi-payment integration.",
      "Built user profile, address management, and authentication workflows.",
      "Improved UI/UX performance using advanced React Hooks and TailwindCSS.",
    ],
    accent: "success",
    cover: agroconnectCover,
    realShot: false,
  },
  {
    slug: "erp",
    name: "Enterprise ERP",
    company: "FPT Software",
    period: "Jan 2023 — Feb 2024",
    tagline: "Internal corporate management platform",
    summary:
      "A high-security, scalable platform streamlining internal business processes and data management.",
    featured: false,
    role: "Front-End Developer",
    stack: ["React", "Redux", "Context API", "JWT", "RBAC"],
    metrics: [
      { label: "State bugs", value: "−30%" },
      { label: "Security", value: "JWT · RBAC" },
    ],
    highlights: [
      "Implemented secure JWT authentication with profile session handling and role-based access control (RBAC).",
      "Managed complex application state with Redux and Context API, reducing state-related bugs by 30%.",
      "Optimized page load speed via code splitting, lazy loading, and caching strategies.",
      "Developed responsive, cross-browser UI for multiple device types.",
      "Participated in code reviews and mentored junior members on React best practices.",
    ],
    accent: "pink",
    cover: erpCover,
    realShot: false,
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)

export function getProject(slug: ProjectSlug): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
