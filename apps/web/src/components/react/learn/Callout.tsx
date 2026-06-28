import type { ReactNode } from "react"
import { Lightbulb, AlertTriangle, Info, HelpCircle } from "lucide-react"

type Variant = "tip" | "warn" | "note" | "interview"

const STYLES: Record<Variant, { box: string; icon: typeof Info; label: string }> = {
  tip: {
    box: "border-success/30 bg-success/8 text-success",
    icon: Lightbulb,
    label: "Tip",
  },
  warn: {
    box: "border-warning/30 bg-warning/10 text-warning",
    icon: AlertTriangle,
    label: "Cẩn thận",
  },
  note: {
    box: "border-info/30 bg-info/8 text-info",
    icon: Info,
    label: "Note",
  },
  interview: {
    box: "border-brand-pink/30 bg-brand-pink/8 text-brand-pink",
    icon: HelpCircle,
    label: "Hay hỏi khi phỏng vấn",
  },
}

/**
 * Static, design-system-tinted callout box for use inside MDX articles.
 * Renders at build time (no client directive needed) since it holds no state.
 */
export default function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant
  title?: string
  children: ReactNode
}) {
  const { box, icon: Icon, label } = STYLES[variant]
  return (
    <div className={`my-6 rounded-xl border px-4 py-3.5 ${box}`}>
      <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
        <Icon className="size-4 shrink-0" />
        <span>{title ?? label}</span>
      </div>
      <div className="text-foreground/90 text-[0.95rem] leading-relaxed [&_a]:underline [&_code]:text-current">
        {children}
      </div>
    </div>
  )
}
