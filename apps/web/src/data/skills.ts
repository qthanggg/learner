/** Skill groups, ordered by how the portfolio positions the candidate. */
export type SkillGroup = {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Core",
    items: ["TypeScript", "React", "Next.js (SSR/SSG)", "JavaScript (ES2023+)"],
  },
  {
    title: "Design Systems & UI",
    items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Storybook", "CVA"],
  },
  {
    title: "Architecture & State",
    items: ["Monorepo (Turborepo)", "PNPM workspaces", "React Query", "Zustand", "Redux"],
  },
  {
    title: "Quality & Performance",
    items: ["Vitest", "Playwright", "Visual regression", "Lighthouse", "Code splitting"],
  },
  {
    title: "Realtime & Integration",
    items: ["WebSocket", "Zoom SDK", "i18n (11 langs)", "Skyscanner API"],
  },
  {
    title: "Workflow",
    items: ["AI-assisted dev (Cursor, Claude)", "CI/CD", "Git", "Code review & mentoring"],
  },
]
