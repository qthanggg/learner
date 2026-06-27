import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { $motionMode, prefersReducedMotion } from "../../stores/motion"

export type ResolvedMotion = {
  mode: "minimal" | "cinematic"
  /** True when the user (or OS) wants no motion — collapse everything to instant. */
  reduce: boolean
  cinematic: boolean
}

/**
 * Single hook every animated island uses. Combines the shared motion-mode store
 * with the live prefers-reduced-motion media query so animations stay honest.
 *
 * The first render always reports the default ("minimal", no reduce) so it matches
 * the server-rendered HTML — only after mount does it adopt the persisted/OS value.
 * This avoids React hydration mismatches when the visitor has opted into cinematic.
 */
export function useMotionMode(): ResolvedMotion {
  const stored = useStore($motionMode)
  const [mounted, setMounted] = useState(false)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduce(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const mode = mounted ? stored : "minimal"
  return { mode, reduce, cinematic: mode === "cinematic" && !reduce }
}

export { prefersReducedMotion }
