import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@leaner/ui/lib/utils"

const textareaVariants = cva(
  cn(
    "flex field-sizing-content w-full rounded-md border border-input bg-transparent shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ),
  {
    variants: {
      size: {
        sm: "min-h-14 px-2.5 py-1.5 text-sm",
        default: "min-h-16 px-3 py-2 text-base md:text-sm",
        lg: "min-h-24 px-4 py-3 text-base",
      },
      state: {
        default: "",
        success: "border-success focus-visible:border-success focus-visible:ring-success/20",
        error:
          "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      },
    },
    defaultVariants: {
      size: "default",
      state: "default",
    },
  },
)

function Textarea({
  className,
  size,
  state,
  ...props
}: Omit<React.ComponentProps<"textarea">, "size"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, state }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
