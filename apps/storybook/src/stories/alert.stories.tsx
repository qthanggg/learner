import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon, TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@leaner/ui/components/alert"

const VARIANTS = ["default", "success", "warning", "info", "destructive"] as const

const meta = {
  title: "Data Display/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
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

export const Success: Story = {
  args: { variant: "success" },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Hoàn tất</AlertTitle>
      <AlertDescription>Đơn hàng của bạn đã được xác nhận.</AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: { variant: "warning" },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Cảnh báo</AlertTitle>
      <AlertDescription>Phiên đăng nhập sắp hết hạn.</AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <InfoIcon />
      <AlertTitle>Thông tin</AlertTitle>
      <AlertDescription>Có bản cập nhật mới đang chờ cài đặt.</AlertDescription>
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

export const AllVariants: Story = {
  render: () => (
    <div className="grid max-w-md gap-3">
      {VARIANTS.map((variant) => (
        <Alert key={variant} variant={variant}>
          <InfoIcon />
          <AlertTitle className="capitalize">{variant}</AlertTitle>
          <AlertDescription>Mô tả trạng thái “{variant}”.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
}
