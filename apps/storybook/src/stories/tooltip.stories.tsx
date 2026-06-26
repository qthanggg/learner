import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@leaner/ui/components/tooltip"

const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Di chuột vào đây</Button>
      </TooltipTrigger>
      <TooltipContent>Đây là một tooltip</TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Hiện ở {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
