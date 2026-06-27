import { m, useMotionValue, useSpring } from "motion/react"
import { useRef, type ReactNode } from "react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

type MagneticProps = {
  children: ReactNode
  className?: string
  /** How strongly the element follows the cursor (px at edge). */
  strength?: number
}

/**
 * Cinematic-only magnetic cursor effect. In minimal/reduced-motion it renders a
 * plain wrapper with zero listeners, so it costs nothing outside cinematic mode.
 */
export default function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const { cinematic } = useMotionMode()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  if (!cinematic) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionProvider>
      <m.div
        ref={ref}
        className={className}
        style={{ x: sx, y: sy }}
        onMouseMove={onMove}
        onMouseLeave={reset}
      >
        {children}
      </m.div>
    </MotionProvider>
  )
}
