import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@leaner/ui/components/button"
import { $theme, toggleTheme } from "../../stores/theme"

/**
 * Light/dark toggle. The .dark class is also seeded by an inline head script.
 * First render mirrors the SSR default ("dark") to avoid a hydration mismatch,
 * then adopts the persisted value after mount.
 */
export default function ThemeToggle() {
  const theme = useStore($theme)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted ? theme === "dark" : true

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
