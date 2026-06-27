import { config } from "@leaner/eslint-config/react-internal"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "**/*.d.ts"],
  },
]
