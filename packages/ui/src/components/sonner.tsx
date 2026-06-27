"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ richColors = true, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors={richColors}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          // Tint trạng thái khớp Alert (bg/8 · border/20–25 · text màu)
          "--success-bg": "color-mix(in oklab, var(--success) 8%, var(--popover))",
          "--success-border": "color-mix(in oklab, var(--success) 25%, var(--popover))",
          "--success-text": "var(--success)",
          "--error-bg": "color-mix(in oklab, var(--destructive) 8%, var(--popover))",
          "--error-border": "color-mix(in oklab, var(--destructive) 25%, var(--popover))",
          "--error-text": "var(--destructive)",
          "--warning-bg": "color-mix(in oklab, var(--warning) 12%, var(--popover))",
          "--warning-border": "color-mix(in oklab, var(--warning) 30%, var(--popover))",
          "--warning-text": "var(--warning)",
          "--info-bg": "color-mix(in oklab, var(--info) 8%, var(--popover))",
          "--info-border": "color-mix(in oklab, var(--info) 25%, var(--popover))",
          "--info-text": "var(--info)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
