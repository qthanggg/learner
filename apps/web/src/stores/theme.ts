import { persistentAtom } from "@nanostores/persistent"

/**
 * Theme atom shared across islands. The actual `.dark` class flip happens both
 * in an inline head script (no-FOUC, before paint) and here when the user
 * toggles. We avoid next-themes because Astro islands don't share React context.
 */
export type Theme = "light" | "dark"

export const $theme = persistentAtom<Theme>("theme", "dark")

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function toggleTheme() {
  const next: Theme = $theme.get() === "dark" ? "light" : "dark"
  $theme.set(next)
  applyTheme(next)
}
