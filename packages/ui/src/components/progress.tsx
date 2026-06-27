"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@leaner/ui/lib/utils"

const progressColors = {
  default: { track: "bg-primary/20", bar: "bg-primary" },
  success: { track: "bg-success/20", bar: "bg-success" },
  warning: { track: "bg-warning/20", bar: "bg-warning" },
  info: { track: "bg-info/20", bar: "bg-info" },
  destructive: { track: "bg-destructive/20", bar: "bg-destructive" },
} as const

function Progress({
  className,
  value,
  color = "default",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  color?: keyof typeof progressColors
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        progressColors[color].track,
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("h-full w-full flex-1 transition-all", progressColors[color].bar)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
