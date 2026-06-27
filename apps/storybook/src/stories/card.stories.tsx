import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@leaner/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@leaner/ui/components/card"
import { Input } from "@leaner/ui/components/input"
import { Label } from "@leaner/ui/components/label"

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Tiêu đề thẻ</CardTitle>
        <CardDescription>Mô tả ngắn nằm dưới tiêu đề.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Nội dung chính của thẻ nằm ở đây.</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">Chân thẻ</p>
      </CardFooter>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4">
      {(["success", "warning", "info", "destructive"] as const).map((variant) => (
        <Card key={variant} variant={variant} className="w-80">
          <CardHeader>
            <CardTitle className="capitalize">{variant}</CardTitle>
            <CardDescription>Thẻ trạng thái dùng kiểu màu tint giống Alert.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Nội dung trạng thái “{variant}”.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
}

export const LoginForm: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>Nhập email để truy cập tài khoản.</CardDescription>
        <CardAction>
          <Button variant="link">Đăng ký</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="card-email">Email</Label>
          <Input id="card-email" type="email" placeholder="ban@vidu.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="card-password">Mật khẩu</Label>
          <Input id="card-password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Đăng nhập</Button>
      </CardFooter>
    </Card>
  ),
}
