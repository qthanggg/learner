#Leaner

> 🌐 **English** · [Tiếng Việt](#tiếng-việt)

Personal monorepo with a modern stack: **pnpm + Turborepo**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Storybook 9**, and an **Astro + React** portfolio. Built to grow — new apps (Next.js, etc.) can be added incrementally.

## Requirements

- Node `>= 20` (22 recommended — see `.nvmrc`)
- pnpm `10.12.1` (pinned in `package.json`)

## Structure

```
apps/
  web/                 # Personal portfolio (Astro + React islands, deployed on Vercel)
  storybook/           # Component docs & development (Storybook 9 + Vite)
packages/
  ui/                  # Shared shadcn component library (@leaner/ui)
  eslint-config/       # Shared ESLint + Prettier config (@leaner/eslint-config)
  typescript-config/   # tsconfig base / nextjs / react-library (@leaner/typescript-config)
```

`packages/ui` is a "just-in-time package": it exports `.tsx` directly with no build step — apps and Storybook transpile it themselves.

## Common commands

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `pnpm install`         | Install the entire workspace             |
| `pnpm dev`             | Run all apps in dev mode (via Turborepo) |
| `pnpm dev:web`         | Run only the `web` portfolio             |
| `pnpm build`           | Build everything                         |
| `pnpm build:web`       | Build only the `web` app                 |
| `pnpm storybook`       | Run Storybook (default port 6006)        |
| `pnpm build-storybook` | Build a static Storybook                 |
| `pnpm lint`            | Lint the whole repo via Turborepo        |
| `pnpm check-types`     | Type-check the whole repo                |
| `pnpm format`          | Format with Prettier                     |

## Adding a shadcn component

Run inside `packages/ui` (it already has `components.json`):

```bash
pnpm dlx shadcn@latest add card input label dialog
```

## Adding a new app (e.g. Next.js)

1. Create `apps/<app-name>` (e.g. `pnpm dlx create-next-app@latest apps/web`).
2. Add `"@leaner/ui": "workspace:*"` to `dependencies`.
3. Extend `@leaner/typescript-config/nextjs.json` and `@leaner/eslint-config/next`.
4. Import components: `import { Button } from "@leaner/ui/components/button"`.

---

# Tiếng Việt

> 🌐 [English](#leaner) · **Tiếng Việt**

Monorepo cá nhân, tech stack hiện đại: **pnpm + Turborepo**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Storybook 9**, và một portfolio **Astro + React**. Thiết kế để mở rộng dần — có thể thêm app mới (Next.js…) về sau.

## Yêu cầu

- Node `>= 20` (khuyến nghị 22 — xem `.nvmrc`)
- pnpm `10.12.1` (đã pin trong `package.json`)

## Cấu trúc

```
apps/
  web/                 # Portfolio cá nhân (Astro + React islands, deploy Vercel)
  storybook/           # Document & phát triển component (Storybook 9 + Vite)
packages/
  ui/                  # Thư viện component shadcn dùng chung (@leaner/ui)
  eslint-config/       # Config ESLint + Prettier dùng chung (@leaner/eslint-config)
  typescript-config/   # tsconfig base / nextjs / react-library (@leaner/typescript-config)
```

`packages/ui` là "just-in-time package": export thẳng `.tsx`, không cần build — app/Storybook tự transpile.

## Lệnh thường dùng

| Lệnh                   | Mô tả                                |
| ---------------------- | ------------------------------------ |
| `pnpm install`         | Cài toàn bộ workspace                |
| `pnpm dev`             | Chạy tất cả app ở chế độ dev (Turbo) |
| `pnpm dev:web`         | Chỉ chạy portfolio `web`             |
| `pnpm build`           | Build toàn bộ                        |
| `pnpm build:web`       | Chỉ build app `web`                  |
| `pnpm storybook`       | Chạy Storybook (mặc định cổng 6006)  |
| `pnpm build-storybook` | Build Storybook tĩnh                 |
| `pnpm lint`            | Lint toàn repo qua Turborepo         |
| `pnpm check-types`     | Kiểm tra type toàn repo              |
| `pnpm format`          | Format bằng Prettier                 |

## Thêm component shadcn

Chạy trong `packages/ui` (đã có `components.json`):

```bash
pnpm dlx shadcn@latest add card input label dialog
```

## Thêm app mới (ví dụ Next.js)

1. Tạo `apps/<ten-app>` (vd `pnpm dlx create-next-app@latest apps/web`).
2. Thêm `"@leaner/ui": "workspace:*"` vào `dependencies`.
3. Dùng `extends` từ `@leaner/typescript-config/nextjs.json` và `@leaner/eslint-config/next`.
4. Import component: `import { Button } from "@leaner/ui/components/button"`.
