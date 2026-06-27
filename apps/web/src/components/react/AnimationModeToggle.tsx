import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { Sparkles, Minus } from "lucide-react"
import { Button } from "@leaner/ui/components/button"
import { $motionMode, toggleMotionMode } from "../../stores/motion"

/**
 * Header control that flips the site-wide animation mode. Reads the shared
 * nanostore so the label/state stays in sync with every other island.
 *
 * First render mirrors the SSR default ("minimal") and only adopts the persisted
 * value after mount, avoiding a hydration mismatch when cinematic was saved.
 */
export default function AnimationModeToggle() {
  const mode = useStore($motionMode)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const cinematic = mounted && mode === "cinematic"

  return (
    <Button
      variant={cinematic ? "gradient" : "outline"}
      size="sm"
      aria-pressed={cinematic}
      aria-label={`Animation mode: ${mode}. Click to switch.`}
      title={
        cinematic ? "Cinematic motion — click for Minimal" : "Minimal motion — click for Cinematic"
      }
      onClick={toggleMotionMode}
    >
      {cinematic ? <Sparkles className="size-4" /> : <Minus className="size-4" />}
      <span>{cinematic ? "Cinematic" : "Minimal"}</span>
    </Button>
  )
}
