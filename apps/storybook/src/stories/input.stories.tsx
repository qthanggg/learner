import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    placeholder: "Nhập nội dung…",
    disabled: false,
  },
  render: (args) => <Input {...args} className="w-64" />,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Bị vô hiệu hoá" },
}

export const Invalid: Story = {
  render: (args) => <Input {...args} aria-invalid className="w-64" />,
  args: { placeholder: "Giá trị không hợp lệ" },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-64 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="ban@vidu.com" />
    </div>
  ),
}
