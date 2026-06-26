import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { Switch } from "@leaner/ui/components/switch"

const meta = {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"] },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    size: "default",
    disabled: false,
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
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
