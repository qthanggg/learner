import type { ReactNode } from "react"

/**
 * Collapsible interview question. Uses a native <details> so it works without
 * JS (renders fine at build time, no client directive required). Drop several
 * in a row to build a question bank.
 */
export default function QA({ q, children }: { q: string; children: ReactNode }) {
  return (
    <details className="border-border bg-card/40 [&[open]]:bg-card/70 group my-3 rounded-lg border px-4 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium">
        <span className="text-foreground">{q}</span>
        <span className="text-brand-pink shrink-0 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="text-muted-foreground [&_code]:text-brand-pink [&_strong]:text-foreground mt-3 space-y-2 text-[0.95rem] leading-relaxed">
        {children}
      </div>
    </details>
  )
}
