import { m } from "motion/react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

/**
 * Decorative hero backdrop: two soft brand-colored gradient blobs. Purely
 * aesthetic (aria-hidden) so it never affects the LCP text. Animates only in
 * cinematic mode; otherwise renders static blobs.
 */
export default function HeroBackdrop() {
  const { cinematic } = useMotionMode()

  const blob = "absolute rounded-full blur-3xl will-change-transform"

  if (!cinematic) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={`${blob} bg-brand-teal/25 -left-24 -top-24 size-96`} />
        <div className={`${blob} bg-brand-pink/20 -right-24 top-1/3 size-96`} />
      </div>
    )
  }

  return (
    <MotionProvider>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <m.div
          className={`${blob} bg-brand-teal/30 -left-24 -top-24 size-96`}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.div
          className={`${blob} bg-brand-pink/25 -right-24 top-1/3 size-96`}
          animate={{ x: [0, -50, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </MotionProvider>
  )
}
