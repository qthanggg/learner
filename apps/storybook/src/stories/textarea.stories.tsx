import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { Textarea } from "@leaner/ui/components/textarea"

const meta = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    state: { control: "inline-radio", options: ["default", "success", "error"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
  args: {
    size: "default",
    state: "default",
    placeholder: "Nhập tin nhắn của bạn…",
    disabled: false,
  },
  render: (args) => <Textarea {...args} className="w-72" />,
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-3">
      <Textarea {...args} size="sm" placeholder="Small" />
      <Textarea {...args} size="default" placeholder="Default" />
      <Textarea {...args} size="lg" placeholder="Large" />
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-3">
      <Textarea {...args} state="default" placeholder="Mặc định" />
      <Textarea {...args} state="success" placeholder="Hợp lệ" />
      <Textarea {...args} state="error" placeholder="Có lỗi" />
    </div>
  ),
}

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
