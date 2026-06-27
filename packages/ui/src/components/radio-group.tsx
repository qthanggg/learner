"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@leaner/ui/lib/utils"

const radioItemVariants = cva(
  "group/radio aspect-square shrink-0 rounded-full border border-input shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      color: {
        default: "text-primary focus-visible:ring-ring/50 data-[state=checked]:border-primary",
        success: "text-success focus-visible:ring-success/40 data-[state=checked]:border-success",
        warning: "text-warning focus-visible:ring-warning/40 data-[state=checked]:border-warning",
        info: "text-info focus-visible:ring-info/40 data-[state=checked]:border-info",
        destructive:
          "text-destructive focus-visible:ring-destructive/40 data-[state=checked]:border-destructive",
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

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  color,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioItemVariants>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      data-size={size ?? "default"}
      className={cn(radioItemVariants({ color, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current group-data-[size=lg]/radio:size-2.5 group-data-[size=sm]/radio:size-1.5" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioItemVariants }
