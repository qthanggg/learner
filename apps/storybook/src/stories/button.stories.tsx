import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"

const VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "success",
  "warning",
  "info",
  "gradient",
  "outline",
  "soft",
  "success-soft",
  "warning-soft",
  "info-soft",
  "ghost",
  "link",
] as const

const SIZES = ["xs", "sm", "default", "lg", "xl"] as const

const meta = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
      description: "Kiểu màu/độ nhấn của button",
    },
    size: {
      control: "select",
      options: [...SIZES, "icon", "icon-sm", "icon-lg"],
      description: "Kích thước: xs · sm · default · lg · xl (+ icon)",
    },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
    className: { control: "text" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/** Playground: đổi variant / size / className trực tiếp trong panel Controls. */
export const Playground: Story = {}

export const Solid: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
    </div>
  ),
}

export const Soft: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="soft">Soft</Button>
      <Button variant="success-soft">Success</Button>
      <Button variant="warning-soft">Warning</Button>
      <Button variant="info-soft">Info</Button>
    </div>
  ),
}

export const LowEmphasis: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

/** Bảng tổng hợp tất cả variant. */
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

/** Thang 5 cấp xs → xl. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {SIZES.map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="icon-sm" aria-label="Add">
        +
      </Button>
      <Button size="icon" aria-label="Add">
        +
      </Button>
      <Button size="icon-lg" aria-label="Add">
        +
      </Button>
    </div>
  ),
}

/** Nút CTA dùng variant gradient thương hiệu (teal → hồng). */
export const Gradient: Story = {
  args: { variant: "gradient", size: "lg", children: "Bắt đầu ngay" },
}

/** Tùy biến tự do qua className (Tailwind) khi cần thoát khỏi preset. */
export const CustomClassName: Story = {
  args: {
    children: "Custom",
    className:
      "bg-gradient-to-r from-brand-pink to-brand-teal text-white hover:opacity-90 border-0",
  },
}
