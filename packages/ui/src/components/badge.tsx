import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@leaner/ui/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        success: "bg-success text-success-foreground [a&]:hover:bg-success/90",
        warning: "bg-warning text-warning-foreground [a&]:hover:bg-warning/90",
        info: "bg-info text-info-foreground [a&]:hover:bg-info/90",
        "success-soft":
          "border-success/20 bg-success/8 text-success [a&]:hover:bg-success/15 dark:bg-success/12",
        "warning-soft":
          "border-warning/25 bg-warning/12 text-warning [a&]:hover:bg-warning/20 dark:bg-warning/12",
        "info-soft": "border-info/20 bg-info/8 text-info [a&]:hover:bg-info/15 dark:bg-info/12",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
      size: {
        sm: "gap-1 px-1.5 text-[10px] [&>svg]:size-2.5",
        default: "px-2 py-0.5 text-xs [&>svg]:size-3",
        lg: "gap-1.5 px-2.5 py-1 text-sm [&>svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
