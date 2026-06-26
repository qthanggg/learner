import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"

import { Button } from "@leaner/ui/components/button"

/**
 * Toast dùng hàm `toast` từ package `sonner`. Component `<Toaster />` đã được
 * gắn sẵn toàn cục trong `.storybook/preview.tsx`.
 */
const meta = {
  title: "Feedback/Sonner (Toast)",
  parameters: { layout: "centered" },
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Đã tạo sự kiện mới")}>
      Hiện toast
    </Button>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.success("Lưu thành công!")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Có lỗi xảy ra")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.info("Thông tin cập nhật")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Hãy cẩn thận")}>
        Warning
      </Button>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Đã xoá mục", {
          description: "Bạn có thể hoàn tác trong 5 giây.",
          action: { label: "Hoàn tác", onClick: () => toast.success("Đã hoàn tác") },
        })
      }
    >
      Toast kèm hành động
    </Button>
  ),
}
