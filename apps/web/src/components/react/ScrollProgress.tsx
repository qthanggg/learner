import { m, useScroll, useSpring } from "motion/react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

/**
 * Thin gradient bar at the very top tracking read progress. Cheap (scaleX on a
 * single element), shown in both modes; hidden entirely under reduced-motion.
 */
export default function ScrollProgress() {
  const { reduce, cinematic } = useMotionMode()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  if (reduce) return null

  return (
    <MotionProvider>
      <m.div
        aria-hidden
        className="from-brand-teal to-brand-pink fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r"
        style={{ scaleX, opacity: cinematic ? 1 : 0.7 }}
      />
    </MotionProvider>
  )
}
