import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@leaner/ui/components/checkbox"
import { Label } from "@leaner/ui/components/label"

const meta = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

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
  render: () => (
    <Label className="cursor-pointer">
      <Checkbox defaultChecked /> Nhận thông báo qua email
    </Label>
  ),
}
