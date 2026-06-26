# Leaner

Monorepo cá nhân, tech stack hiện đại: **pnpm + Turborepo**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Storybook 9**. Sẵn sàng để thêm dần các app (Next.js…) về sau.

## Yêu cầu

- Node `>= 20` (khuyến nghị 22 — xem `.nvmrc`)
- pnpm `10.12.1` (đã pin trong `package.json`)

## Cấu trúc

```
apps/
  storybook/           # Document & phát triển component (Storybook 9 + Vite)
packages/
  ui/                  # Thư viện component shadcn dùng chung (@leaner/ui)
  eslint-config/       # Config ESLint + Prettier dùng chung (@leaner/eslint-config)
  typescript-config/   # tsconfig base / nextjs / react-library (@leaner/typescript-config)
```

`packages/ui` là "just-in-time package": export thẳng `.tsx`, không cần build — app/Storybook tự transpile.

## Lệnh thường dùng

| Lệnh | Mô tả |
| --- | --- |
| `pnpm install` | Cài toàn bộ workspace |
| `pnpm storybook` | Chạy Storybook (mặc định cổng 6006) |
| `pnpm build-storybook` | Build Storybook tĩnh |
| `pnpm lint` | Lint toàn repo qua Turborepo |
| `pnpm check-types` | Kiểm tra type toàn repo |
| `pnpm format` | Format bằng Prettier |

## Thêm component shadcn

Chạy trong `packages/ui` (đã có `components.json`):

```bash
pnpm dlx shadcn@latest add card input label dialog
```

## Thêm app mới (ví dụ Next.js) — về sau

1. Tạo `apps/<ten-app>` (vd `pnpm dlx create-next-app@latest apps/web`).
2. Thêm `"@leaner/ui": "workspace:*"` vào `dependencies`.
3. Dùng `extends` từ `@leaner/typescript-config/nextjs.json` và `@leaner/eslint-config/next`.
4. Import component: `import { Button } from "@leaner/ui/components/button"`.
