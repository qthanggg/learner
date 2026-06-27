import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@leaner/ui/components/checkbox"
import { Label } from "@leaner/ui/components/label"

const COLORS = ["default", "success", "warning", "info", "destructive"] as const
const SIZES = ["sm", "default", "lg"] as const

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: { control: "select", options: COLORS },
    size: { control: "inline-radio", options: SIZES },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    color: "default",
    size: "default",
    defaultChecked: true,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {COLORS.map((color) => (
        <Checkbox key={color} color={color} defaultChecked />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {SIZES.map((size) => (
        <Checkbox key={size} size={size} defaultChecked />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabel: Story = {
  render: () => (
    <Label className="cursor-pointer">
      <Checkbox color="success" defaultChecked /> Nhận thông báo qua email
    </Label>
  ),
}
