import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@leaner/ui/components/select"

const meta = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Chọn một loại quả" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Trái cây</SelectLabel>
          <SelectItem value="apple">Táo</SelectItem>
          <SelectItem value="banana">Chuối</SelectItem>
          <SelectItem value="orange">Cam</SelectItem>
          <SelectItem value="grape" disabled>
            Nho (hết hàng)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Không thể chọn" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">A</SelectItem>
      </SelectContent>
    </Select>
  ),
}
