import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback, AvatarImage } from "@leaner/ui/components/avatar"

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
  },
  args: {
    size: "default",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="" />
      <AvatarFallback>LN</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(["sm", "default", "lg"] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}
