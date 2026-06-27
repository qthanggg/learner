"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@leaner/ui/lib/utils"

const switchColors = {
  default: "data-[state=checked]:bg-primary",
  success: "data-[state=checked]:bg-success",
  warning: "data-[state=checked]:bg-warning",
  info: "data-[state=checked]:bg-info",
  destructive: "data-[state=checked]:bg-destructive",
} as const

function Switch({
  className,
  size = "default",
  color = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default" | "lg"
  color?: keyof typeof switchColors
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "group/switch shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80 peer inline-flex shrink-0 items-center rounded-full border border-transparent outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=lg]:h-6 data-[size=sm]:h-3.5 data-[size=default]:w-8 data-[size=lg]:w-11 data-[size=sm]:w-6",
        switchColors[color],
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=lg]/switch:size-5 group-data-[size=sm]/switch:size-3",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
