import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@leaner/ui/components/tabs"

const meta = {
  title: "Disclosure/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-80">
      <TabsList>
        <TabsTrigger value="account">Tài khoản</TabsTrigger>
        <TabsTrigger value="password">Mật khẩu</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-muted-foreground text-sm">
        Quản lý thông tin tài khoản của bạn ở đây.
      </TabsContent>
      <TabsContent value="password" className="text-muted-foreground text-sm">
        Đổi mật khẩu ở tab này.
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-80">
      <TabsList variant="line">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="text-muted-foreground text-sm">
        Nội dung tab 1
      </TabsContent>
      <TabsContent value="tab2" className="text-muted-foreground text-sm">
        Nội dung tab 2
      </TabsContent>
      <TabsContent value="tab3" className="text-muted-foreground text-sm">
        Nội dung tab 3
      </TabsContent>
    </Tabs>
  ),
}
