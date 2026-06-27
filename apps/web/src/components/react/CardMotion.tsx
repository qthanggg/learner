import { m, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

type CardMotionProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * Card wrapper combining a scroll-reveal entrance with a cinematic pointer-driven
 * 3D tilt. Minimal mode = reveal only; reduced-motion = fully static. Tilt is a
 * nested transform so it never fights the entrance animation.
 */
export default function CardMotion({ children, delay = 0, className }: CardMotionProps) {
  const { cinematic, reduce } = useMotionMode()
  const ref = useRef<HTMLDivElement>(null)

  // Pointer position (−0.5..0.5), springed into rotation.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  })

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cinematic || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <MotionProvider>
      <m.div
        className={className}
        initial={{
          opacity: 0,
          y: cinematic ? 40 : 18,
          filter: cinematic ? "blur(6px)" : "blur(0px)",
        }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: cinematic ? 0.7 : 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <m.div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={reset}
          style={
            cinematic
              ? { rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }
              : undefined
          }
          className="h-full"
        >
          {children}
        </m.div>
      </m.div>
    </MotionProvider>
  )
}
