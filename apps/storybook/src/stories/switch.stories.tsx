import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { Switch } from "@leaner/ui/components/switch"

const COLORS = ["default", "success", "warning", "info", "destructive"] as const
const SIZES = ["sm", "default", "lg"] as const

const meta = {
  title: "Form/Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {COLORS.map((color) => (
        <Switch key={color} color={color} defaultChecked />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {SIZES.map((size) => (
        <Switch key={size} size={size} defaultChecked />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabel: Story = {
  render: (args) => (
    <Label className="cursor-pointer">
      <Switch {...args} /> Chế độ máy bay
    </Label>
  ),
}
