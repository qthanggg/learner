import { LazyMotion, domAnimation } from "motion/react"
import type { ReactNode } from "react"

/**
 * Wrap each animated island root. Using `m` components + `domAnimation` keeps the
 * motion runtime small (~feature subset) instead of the full bundle. Islands are
 * isolated React roots, so every animated island includes its own provider.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
