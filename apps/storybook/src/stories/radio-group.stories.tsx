import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@leaner/ui/components/radio-group"

const COLORS = ["default", "success", "warning", "info", "destructive"] as const
const SIZES = ["sm", "default", "lg"] as const

const meta = {
  title: "Form/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <Label className="cursor-pointer">
        <RadioGroupItem value="default" /> Mặc định
      </Label>
      <Label className="cursor-pointer">
        <RadioGroupItem value="comfortable" /> Thoải mái
      </Label>
      <Label className="cursor-pointer">
        <RadioGroupItem value="compact" /> Gọn
      </Label>
    </RadioGroup>
  ),
}

export const Colors: Story = {
  render: () => (
    <RadioGroup defaultValue="default" className="flex items-center gap-4">
      {COLORS.map((color) => (
        <RadioGroupItem key={color} value={color} color={color} />
      ))}
    </RadioGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <RadioGroup defaultValue="default" className="flex items-center gap-4">
      {SIZES.map((size) => (
        <RadioGroupItem key={size} value={size} size={size} />
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <Label className="cursor-pointer">
        <RadioGroupItem value="a" /> Lựa chọn A
      </Label>
      <Label className="cursor-pointer">
        <RadioGroupItem value="b" /> Lựa chọn B
      </Label>
    </RadioGroup>
  ),
}
