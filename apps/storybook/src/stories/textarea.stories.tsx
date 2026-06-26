import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { Textarea } from "@leaner/ui/components/textarea"

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
  args: {
    placeholder: "Nhập tin nhắn của bạn…",
    disabled: false,
  },
  render: (args) => <Textarea {...args} className="w-72" />,
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="message">Tin nhắn</Label>
      <Textarea {...args} id="message" />
    </div>
  ),
}
