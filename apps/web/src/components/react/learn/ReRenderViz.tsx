import { memo, useRef, useState } from "react"
import { Button } from "@leaner/ui/components/button"

/**
 * Interactive explainer: clicking "Re-render parent" bumps parent state. The
 * plain child re-renders every time (its counter ticks + flashes); the memoized
 * child receives the same props and is skipped by React.memo (stays still).
 *
 * Mount with `client:visible` from MDX. Labels are intentionally English
 * (universal React terms); the prose around it carries the bilingual story.
 */
function RenderBadge({ label, memoized }: { label: string; memoized?: boolean }) {
  const renders = useRef(0)
  renders.current += 1
  return (
    <div className="border-border bg-background flex flex-col items-center gap-2 rounded-lg border p-4">
      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
      {/* key={renders.current} remounts the pill each render so the flash replays */}
      <span
        key={renders.current}
        className={`rerender-flash inline-flex min-w-[3.5rem] items-center justify-center rounded-md px-2.5 py-1 font-mono text-sm font-semibold ${
          memoized ? "text-success" : "text-brand-pink"
        }`}
      >
        {renders.current}
      </span>
      <span className="text-muted-foreground text-[0.7rem]">renders</span>
    </div>
  )
}

const MemoBadge = memo(RenderBadge)

export default function ReRenderViz() {
  const [, setTick] = useState(0)
  return (
    <div className="border-border bg-muted/30 my-6 rounded-xl border p-5">
      <div className="mb-4 grid grid-cols-2 gap-3">
        <RenderBadge label="Plain child" />
        <MemoBadge label="memo() child" memoized />
      </div>
      <div className="flex items-center justify-between gap-3">
        <Button size="sm" variant="gradient" onClick={() => setTick((n) => n + 1)}>
          Re-render parent
        </Button>
        <p className="text-muted-foreground text-xs">
          Cùng props → <code className="text-brand-pink">memo()</code> bỏ qua render lại / skips the
          re-render.
        </p>
      </div>
      <style>{`
        .rerender-flash { animation: rerender-flash 0.6s ease-out; }
        @keyframes rerender-flash {
          from { background-color: color-mix(in oklch, currentColor 28%, transparent); }
          to { background-color: color-mix(in oklch, currentColor 8%, transparent); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rerender-flash { animation: none; background-color: color-mix(in oklch, currentColor 8%, transparent); }
        }
      `}</style>
    </div>
  )
}
