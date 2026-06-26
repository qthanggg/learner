import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@leaner/ui/components/dropdown-menu"

const meta = {
  title: "Overlay/Dropdown Menu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Mở menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start">
        <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Hồ sơ
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Cài đặt
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
