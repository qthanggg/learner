import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@leaner/ui/components/popover"

const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Mở popover</Button>
      </PopoverTrigger>
      <PopoverContent className="grid gap-4">
        <PopoverHeader>
          <PopoverTitle>Kích thước</PopoverTitle>
          <PopoverDescription>Đặt kích thước cho phần tử.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="width">Rộng</Label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="height">Cao</Label>
            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
