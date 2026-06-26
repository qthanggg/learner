import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
} satisfies Meta

export default meta

type Story = StoryObj

const SEMANTIC = [
  { name: "background", className: "bg-background", text: "text-foreground" },
  { name: "foreground", className: "bg-foreground", text: "text-background" },
  { name: "card", className: "bg-card", text: "text-card-foreground" },
  { name: "popover", className: "bg-popover", text: "text-popover-foreground" },
  { name: "primary", className: "bg-primary", text: "text-primary-foreground" },
  {
    name: "secondary",
    className: "bg-secondary",
    text: "text-secondary-foreground",
  },
  { name: "muted", className: "bg-muted", text: "text-muted-foreground" },
  { name: "accent", className: "bg-accent", text: "text-accent-foreground" },
  { name: "destructive", className: "bg-destructive", text: "text-white" },
  { name: "border", className: "bg-border", text: "text-foreground" },
  { name: "input", className: "bg-input", text: "text-foreground" },
  { name: "ring", className: "bg-ring", text: "text-foreground" },
]

// Class phải viết literal để Tailwind v4 quét tĩnh nhận diện được
const CHART = [
  { name: "chart-1", className: "bg-chart-1" },
  { name: "chart-2", className: "bg-chart-2" },
  { name: "chart-3", className: "bg-chart-3" },
  { name: "chart-4", className: "bg-chart-4" },
  { name: "chart-5", className: "bg-chart-5" },
]

function Swatch({ name, className, text }: { name: string; className: string; text?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className={`flex h-20 items-end p-2 text-xs font-medium ${className} ${text ?? ""}`}>
        {name}
      </div>
    </div>
  )
}

export const Semantic: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {SEMANTIC.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </div>
  ),
}

export const Chart: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {CHART.map((c) => (
        <Swatch key={c.name} name={c.name} className={c.className} text="text-white" />
      ))}
    </div>
  ),
}

// Bảng màu thương hiệu "Frost" — dùng trực tiếp qua bg-brand-* / text-brand-*
const BRAND = [
  { name: "brand-navy #1F2435", className: "bg-brand-navy", text: "text-white" },
  { name: "brand-ink #111218", className: "bg-brand-ink", text: "text-white" },
  { name: "brand-ice #9EC7FF", className: "bg-brand-ice", text: "text-brand-ink" },
  {
    name: "brand-silver #C0C6D8",
    className: "bg-brand-silver",
    text: "text-brand-ink",
  },
  { name: "brand-gold #E3C88A", className: "bg-brand-gold", text: "text-brand-ink" },
]

export const Brand: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {BRAND.map((c) => (
        <Swatch key={c.name} {...c} />
      ))}
    </div>
  ),
}
