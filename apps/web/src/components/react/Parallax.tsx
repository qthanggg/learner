import { m, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

type ParallaxProps = {
  children: ReactNode
  className?: string
  /** Vertical travel range in px across the scroll. */
  amount?: number
}

/**
 * Cinematic-only vertical parallax driven by scroll position. Minimal/reduced
 * renders statically (no scroll listener).
 */
export default function Parallax({ children, className, amount = 60 }: ParallaxProps) {
  const { cinematic } = useMotionMode()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [amount, -amount])

  if (!cinematic) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <MotionProvider>
      <div ref={ref} className={className}>
        <m.div style={{ y: yRaw }}>{children}</m.div>
      </div>
    </MotionProvider>
  )
}
