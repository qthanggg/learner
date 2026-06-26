import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@leaner/ui/components/sheet"

const meta = {
  title: "Overlay/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>

export default meta

type Story = StoryObj<typeof meta>

function SheetDemo({ side }: { side: "top" | "right" | "bottom" | "left" }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{side}</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Sửa hồ sơ</SheetTitle>
          <SheetDescription>Thay đổi thông tin tài khoản. Bấm lưu khi hoàn tất.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Tên</Label>
            <Input id="sheet-name" defaultValue="Thắng" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-handle">Username</Label>
            <Input id="sheet-handle" defaultValue="@thang" />
          </div>
        </div>
        <SheetFooter>
          <Button>Lưu thay đổi</Button>
          <SheetClose asChild>
            <Button variant="outline">Huỷ</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const Default: Story = {
  render: () => <SheetDemo side="right" />,
}

export const Sides: Story = {
  render: () => (
    <div className="flex gap-2">
      <SheetDemo side="top" />
      <SheetDemo side="right" />
      <SheetDemo side="bottom" />
      <SheetDemo side="left" />
    </div>
  ),
}
