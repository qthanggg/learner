import { m } from "motion/react"
import type { ReactNode } from "react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

type RevealProps = {
  children: ReactNode
  /** Stagger offset in seconds for sequenced reveals. */
  delay?: number
  /** Direction the element travels in from. */
  from?: "up" | "down" | "left" | "right"
  className?: string
}

const OFFSET = 24
const offsetFor = (from: RevealProps["from"], distance: number) => {
  switch (from) {
    case "down":
      return { y: -distance }
    case "left":
      return { x: distance }
    case "right":
      return { x: -distance }
    default:
      return { y: distance }
  }
}

/**
 * Scroll-reveal wrapper. Renders children as static HTML (slotted from .astro)
 * and only animates the wrapper. Honors reduced-motion (instant) and scales the
 * effect up in cinematic mode (longer travel + blur).
 */
export default function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const { cinematic, reduce } = useMotionMode()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const distance = cinematic ? OFFSET * 2 : OFFSET
  const hidden = {
    opacity: 0,
    ...offsetFor(from, distance),
    ...(cinematic ? { filter: "blur(8px)" } : {}),
  }
  const show = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(cinematic ? { filter: "blur(0px)" } : {}),
  }

  return (
    <MotionProvider>
      <m.div
        className={className}
        initial={hidden}
        whileInView={show}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: cinematic ? 0.7 : 0.45,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.div>
    </MotionProvider>
  )
}
