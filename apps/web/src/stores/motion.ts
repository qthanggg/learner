import { persistentAtom } from "@nanostores/persistent"

/**
 * Two-mode animation system shared across all React islands.
 * - "minimal":  subtle, transform/opacity-only, Lighthouse-safe (default).
 * - "cinematic": richer parallax / magnetic / blur sequences (opt-in).
 *
 * nanostores gives a single module instance per page, so toggling in the header
 * instantly updates every mounted island even though islands are isolated React
 * roots without a shared Context.
 */
export type MotionMode = "minimal" | "cinematic"

export const $motionMode = persistentAtom<MotionMode>("motion-mode", "minimal")

export function toggleMotionMode() {
  $motionMode.set($motionMode.get() === "minimal" ? "cinematic" : "minimal")
}

/** SSR-safe prefers-reduced-motion check. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
