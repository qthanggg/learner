import { persistentAtom } from "@nanostores/persistent"

/**
 * Content language for the /learn knowledge base (independent of the site UI,
 * which stays English). Both languages are rendered into the page; this atom
 * only drives which one is visible via a `data-learn-lang` attribute on <html>.
 *
 * The attribute is also seeded by an inline head script in BaseLayout so the
 * correct language paints first (no flash), mirroring the theme/motion pattern.
 */
export type Lang = "en" | "vi"

export const $lang = persistentAtom<Lang>("learn:lang", "vi")

export function applyLang(lang: Lang) {
  if (typeof document === "undefined") return
  document.documentElement.setAttribute("data-learn-lang", lang)
}

export function toggleLang() {
  const next: Lang = $lang.get() === "vi" ? "en" : "vi"
  $lang.set(next)
  applyLang(next)
}
