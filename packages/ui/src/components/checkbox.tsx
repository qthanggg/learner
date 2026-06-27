"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@leaner/ui/lib/utils"

const checkboxVariants = cva(
  "peer group/checkbox shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      color: {
        default:
          "focus-visible:ring-ring/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        success:
          "focus-visible:ring-success/40 data-[state=checked]:border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground",
        warning:
          "focus-visible:ring-warning/40 data-[state=checked]:border-warning data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground",
        info: "focus-visible:ring-info/40 data-[state=checked]:border-info data-[state=checked]:bg-info data-[state=checked]:text-info-foreground",
        destructive:
          "focus-visible:ring-destructive/40 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
      },
      size: {
        sm: "size-3.5",
        default: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  },
)

function Checkbox({
  className,
  color,
  size,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={size ?? "default"}
      className={cn(checkboxVariants({ color, size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 group-data-[size=lg]/checkbox:size-4 group-data-[size=sm]/checkbox:size-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
