import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@leaner/ui/components/dialog"
import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"

const meta = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sửa hồ sơ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sửa hồ sơ</DialogTitle>
          <DialogDescription>Thay đổi thông tin tài khoản. Bấm lưu khi hoàn tất.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Tên</Label>
            <Input id="name" defaultValue="Thắng" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="handle">Username</Label>
            <Input id="handle" defaultValue="@thang" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Huỷ</Button>
          </DialogClose>
          <Button>Lưu thay đổi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
