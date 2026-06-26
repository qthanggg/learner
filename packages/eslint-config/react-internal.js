import { config as baseConfig } from "./base.js"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

/**
 * Config ESLint cho thư viện React (component library, vd packages/ui).
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
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // React mới không cần import React trong scope
      "react/react-in-jsx-scope": "off",
    },
  },
]
