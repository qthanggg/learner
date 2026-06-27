import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@leaner/ui/lib/utils"

const inputVariants = cva(
  cn(
    "w-full min-w-0 rounded-md border border-input bg-transparent shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ),
  {
    variants: {
      inputSize: {
        sm: "h-8 px-2.5 py-1 text-sm file:h-6 file:text-xs",
        default: "h-9 px-3 py-1 text-base file:h-7 file:text-sm md:text-sm",
        lg: "h-10 px-4 py-2 text-base file:h-8 file:text-sm",
      },
      state: {
        default: "",
        success: "border-success focus-visible:border-success focus-visible:ring-success/20",
        error:
          "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      },
    },
    defaultVariants: {
      inputSize: "default",
      state: "default",
    },
  },
)

function Input({
  className,
  type,
  inputSize,
  state,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ inputSize, state }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
