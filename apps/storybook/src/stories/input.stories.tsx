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
    inputSize: { control: "inline-radio", options: ["sm", "default", "lg"] },
    state: { control: "inline-radio", options: ["default", "success", "error"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    inputSize: "default",
    state: "default",
    placeholder: "Nhập nội dung…",
    disabled: false,
  },
  render: (args) => <Input {...args} className="w-64" />,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-3">
      <Input {...args} inputSize="sm" placeholder="Small" />
      <Input {...args} inputSize="default" placeholder="Default" />
      <Input {...args} inputSize="lg" placeholder="Large" />
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-3">
      <Input {...args} state="default" placeholder="Mặc định" />
      <Input {...args} state="success" placeholder="Hợp lệ" />
      <Input {...args} state="error" placeholder="Có lỗi" />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Bị vô hiệu hoá" },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-64 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="ban@vidu.com" />
    </div>
  ),
}
