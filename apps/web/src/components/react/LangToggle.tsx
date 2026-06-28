import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { Languages } from "lucide-react"
import { Button } from "@leaner/ui/components/button"
import { $lang, toggleLang } from "../../stores/lang"

/**
 * EN/VI switch for the knowledge base. Renders the SSR default ("vi") on first
 * paint to avoid a hydration mismatch, then adopts the persisted value. The
 * actual show/hide is pure CSS keyed off `data-learn-lang` (set in stores/lang).
 */
export default function LangToggle() {
  const lang = useStore($lang)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const current = mounted ? lang : "vi"
  const next = current === "vi" ? "English" : "Tiếng Việt"

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={`Switch knowledge base to ${next}`}
      title={`Switch to ${next}`}
      onClick={toggleLang}
      className="gap-1.5 font-medium"
    >
      <Languages className="size-4" />
      <span className="tabular-nums">{current === "vi" ? "VI" : "EN"}</span>
    </Button>
  )
}
