import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@leaner/ui/components/label"
import { RadioGroup, RadioGroupItem } from "@leaner/ui/components/radio-group"

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
