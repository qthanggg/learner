import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarIcon, SettingsIcon, SmileIcon, UserIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@leaner/ui/components/command"

const meta = {
  title: "Overlay/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Command>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg border shadow-md">
      <CommandInput placeholder="Gõ lệnh hoặc tìm kiếm…" />
      <CommandList>
        <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
        <CommandGroup heading="Gợi ý">
          <CommandItem>
            <CalendarIcon />
            Lịch
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            Emoji
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Cài đặt">
          <CommandItem>
            <UserIcon />
            Hồ sơ
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            Cài đặt
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
