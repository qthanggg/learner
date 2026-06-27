import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "@leaner/ui/components/slider"

const COLORS = ["default", "success", "warning", "info", "destructive"] as const

const meta = {
  title: "Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: { control: "select", options: COLORS },
    disabled: { control: "boolean" },
  },
  args: {
    color: "default",
    disabled: false,
  },
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Slider defaultValue={[50]} max={100} step={1} {...args} className="w-72" />,
}

export const Colors: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-5">
      {COLORS.map((color) => (
        <Slider key={color} color={color} defaultValue={[60]} max={100} />
      ))}
    </div>
  ),
}

export const Range: Story = {
  render: (args) => (
    <Slider defaultValue={[25, 75]} max={100} step={1} {...args} className="w-72" />
  ),
}

export const Steps: Story = {
  render: (args) => <Slider defaultValue={[40]} max={100} step={10} {...args} className="w-72" />,
}
