/** Career timeline, most recent first. */
export type Experience = {
  company: string
  role: string
  period: string
  location: string
  project: string
  summary: string
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Ho Phi Long Co., Ltd",
    role: "Front-End Developer",
    period: "Feb 2026 — Present",
    location: "Ho Chi Minh City",
    project: "TravelEasy — B2B2C Travel Booking Platform",
    summary:
      "Core flight booking funnel, multi-partner white-label architecture, and Skyscanner metasearch on a live OTA.",
  },
  {
    company: "Arobid",
    role: "Front-End Developer",
    period: "Jan 2025 — Jan 2026",
    location: "Ho Chi Minh City",
    project: "TRADEXPO — Virtual Exhibition Platform",
    summary:
      "UI architecture across a 15+ app monorepo, 490+ reusable components, real-time business matching, Zoom SDK.",
  },
  {
    company: "Amazing Tech",
    role: "Front-End Developer",
    period: "May 2024 — Dec 2024",
    location: "Ho Chi Minh City",
    project: "AgroConnect — IoT Smart Farm",
    summary:
      "B2C marketplace with real-time IoT livestock tracking, checkout, and multi-payment integration.",
  },
  {
    company: "FPT Software",
    role: "Front-End Developer",
    period: "Jan 2023 — Feb 2024",
    location: "Ho Chi Minh City",
    project: "Enterprise Resource Planning (ERP)",
    summary:
      "Secure JWT/RBAC platform, complex state with Redux, performance tuning, and mentoring juniors.",
  },
]

export const EDUCATION = {
  school: "FPT University",
  degree: "Software Engineering",
  period: "Oct 2020 — Dec 2024",
}
