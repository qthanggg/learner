import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@leaner/ui/components/separator"

const meta = {
  title: "Data Display/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm font-medium">Leaner UI</p>
      <p className="text-muted-foreground text-sm">Design system</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
}
