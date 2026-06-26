import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@leaner/ui/components/alert"

const meta = {
  title: "Data Display/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "destructive"] },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Lưu thành công!</AlertTitle>
      <AlertDescription>Thay đổi của bạn đã được lưu lại.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: "destructive" },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Có lỗi xảy ra</AlertTitle>
      <AlertDescription>Không thể lưu thay đổi. Vui lòng thử lại sau.</AlertDescription>
    </Alert>
  ),
}
