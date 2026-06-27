import { m } from "motion/react"
import MotionProvider from "./MotionProvider"
import { useMotionMode } from "./useMotionMode"

type TextRevealProps = {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p"
}

/**
 * Heading that reveals word-by-word on scroll. Text is fully present in the SSR
 * HTML (each word is a span), so it stays SEO/a11y-friendly. Cinematic = larger
 * travel + blur per word; minimal = quick fade; reduced = static text.
 *
 * Each word+space is a single text node to avoid React hydration mismatches.
 */
export default function TextReveal({ text, className, as = "h2" }: TextRevealProps) {
  const { cinematic, reduce } = useMotionMode()
  const Tag = as

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  const words = text.split(" ")
  const distance = cinematic ? 26 : 12

  return (
    <MotionProvider>
      <Tag className={className}>
        <m.span
          className="inline"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: cinematic ? 0.06 : 0.03 } },
          }}
        >
          {words.map((word, i) => (
            <m.span
              key={i}
              className={i < words.length - 1 ? "mr-[0.25em] inline-block" : "inline-block"}
              variants={{
                hidden: {
                  opacity: 0,
                  y: distance,
                  filter: cinematic ? "blur(6px)" : "blur(0px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: cinematic ? 0.55 : 0.35, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </m.span>
          ))}
        </m.span>
      </Tag>
    </MotionProvider>
  )
}
