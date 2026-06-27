import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon } from "lucide-react"

import { Badge } from "@leaner/ui/components/badge"

const VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "success",
  "warning",
  "info",
  "success-soft",
  "warning-soft",
  "info-soft",
  "outline",
  "ghost",
  "link",
] as const

const SIZES = ["sm", "default", "lg"] as const

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "inline-radio", options: SIZES },
  },
  args: {
    children: "Badge",
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args}>
      <CheckIcon />
      Đã xác minh
    </Badge>
  ),
}

export const Solid: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

export const Soft: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success-soft">Success</Badge>
      <Badge variant="warning-soft">Warning</Badge>
      <Badge variant="info-soft">Info</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {SIZES.map((size) => (
        <Badge key={size} size={size}>
          {size}
        </Badge>
      ))}
    </div>
  ),
}
