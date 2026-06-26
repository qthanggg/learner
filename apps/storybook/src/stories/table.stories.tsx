import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@leaner/ui/components/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@leaner/ui/components/table"

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

const INVOICES = [
  { id: "INV001", status: "Đã thanh toán", method: "Thẻ tín dụng", amount: "2.500.000đ" },
  { id: "INV002", status: "Chờ xử lý", method: "Chuyển khoản", amount: "1.200.000đ" },
  { id: "INV003", status: "Chưa thanh toán", method: "Tiền mặt", amount: "800.000đ" },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Danh sách hoá đơn gần đây.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-28">Mã</TableHead>
          <TableHead>Trạng thái</TableHead>
          <TableHead>Phương thức</TableHead>
          <TableHead className="text-right">Số tiền</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {INVOICES.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>
              <Badge variant={inv.status === "Đã thanh toán" ? "default" : "secondary"}>
                {inv.status}
              </Badge>
            </TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Tổng cộng</TableCell>
          <TableCell className="text-right">4.500.000đ</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
