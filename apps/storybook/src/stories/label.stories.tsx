import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@leaner/ui/components/checkbox"
import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"

const meta = {
  title: "Form/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    children: "Nhãn trường dữ liệu",
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-64 gap-2">
      <Label htmlFor="username">Tên đăng nhập</Label>
      <Input id="username" placeholder="vidu123" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <Label className="cursor-pointer">
      <Checkbox /> Đồng ý với điều khoản
    </Label>
  ),
}
