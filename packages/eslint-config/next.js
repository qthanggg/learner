import { config as baseConfig } from "./base.js"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import pluginNext from "@next/eslint-plugin-next"
import globals from "globals"

/**
 * Config ESLint cho các app Next.js (dùng cho apps/* sau này).
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  react.configs.flat.recommended,
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
]
