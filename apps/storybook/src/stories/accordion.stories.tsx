import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@leaner/ui/components/accordion"

const meta = {
  title: "Disclosure/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>

export default meta

// Accordion có prop `type` dạng union bắt buộc nên dùng StoryObj không ràng buộc args
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Đây là gì?</AccordionTrigger>
        <AccordionContent>Một thư viện component dùng chung cho monorepo Leaner.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Có tuỳ biến được không?</AccordionTrigger>
        <AccordionContent>Có. Code nằm hẳn trong repo của bạn nên sửa thoải mái.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Dùng ở đâu?</AccordionTrigger>
        <AccordionContent>
          Import từ <code>@leaner/ui</code> vào bất kỳ app nào trong monorepo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
