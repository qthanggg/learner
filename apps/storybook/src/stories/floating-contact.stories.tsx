import type { Meta, StoryObj } from "@storybook/react-vite"

import { FloatingContact, type ContactChannel } from "@leaner/ui/components/floating-contact"

const CHANNELS: ContactChannel[] = [
  { type: "zalo", href: "https://zalo.me/your-phone" },
  { type: "messenger", href: "https://m.me/your-page" },
  { type: "linkedin", href: "https://linkedin.com/in/your-name" },
  { type: "phone", href: "tel:your-phone" },
  { type: "email", href: "mailto:you@example.com" },
]

// Nguồn href mẫu cho từng kênh — Playground bật/tắt cái nào thì lấy cái đó.
const CHANNEL_HREF: Record<ContactChannel["type"], string> = {
  zalo: "https://zalo.me/your-phone",
  messenger: "https://m.me/your-page",
  linkedin: "https://linkedin.com/in/your-name",
  whatsapp: "https://wa.me/your-phone",
  telegram: "https://t.me/your-name",
  phone: "tel:your-phone",
  email: "mailto:you@example.com",
}

const meta = {
  title: "Overlay/FloatingContact",
  component: FloatingContact,
  // layout fullscreen vì widget gắn fixed vào góc viewport
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "inline-radio",
      options: ["bottom-right", "bottom-left"],
      description: "Góc neo widget",
    },
    defaultOpen: { control: "boolean", description: "Mở sẵn khi mount" },
    channels: { control: false },
  },
  args: {
    channels: CHANNELS,
    position: "bottom-right",
    defaultOpen: false,
  },
  // khung nền cao để thấy rõ widget nổi ở góc + hiệu ứng trượt lên
  decorators: [
    (Story) => (
      <div className="bg-muted/30 relative min-h-screen w-full">
        <div className="text-muted-foreground p-6 text-sm">
          Bấm nút tròn ở góc để bung các kênh liên hệ (trượt lên).
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FloatingContact>

export default meta

type Story = StoryObj<typeof meta>

/* -------------------------------------------------------------------------- */
/*                                Playground                                   */
/* -------------------------------------------------------------------------- */

type ChannelType = ContactChannel["type"]
const ALL_TYPES: ChannelType[] = [
  "zalo",
  "messenger",
  "linkedin",
  "whatsapp",
  "telegram",
  "phone",
  "email",
]

type PlaygroundArgs = {
  position: "bottom-right" | "bottom-left"
  defaultOpen: boolean
} & Record<ChannelType, boolean>

/**
 * Playground: tick từng kênh trong panel Controls để chọn "thích cái nào lấy cái đó",
 * đổi position / defaultOpen trực tiếp.
 */
export const Playground: StoryObj<PlaygroundArgs> = {
  argTypes: {
    position: {
      control: "inline-radio",
      options: ["bottom-right", "bottom-left"],
    },
    defaultOpen: { control: "boolean" },
    ...Object.fromEntries(
      ALL_TYPES.map((t) => [t, { control: "boolean", table: { category: "Kênh" } }]),
    ),
  },
  args: {
    position: "bottom-right",
    defaultOpen: true,
    zalo: true,
    messenger: true,
    linkedin: true,
    whatsapp: false,
    telegram: false,
    phone: true,
    email: true,
  },
  render: ({ position, defaultOpen, ...flags }) => {
    const channels: ContactChannel[] = ALL_TYPES.filter((t) => flags[t]).map((type) => ({
      type,
      href: CHANNEL_HREF[type],
    }))
    return <FloatingContact position={position} defaultOpen={defaultOpen} channels={channels} />
  },
}

/* -------------------------------------------------------------------------- */
/*                                  Variants                                   */
/* -------------------------------------------------------------------------- */

/** Trạng thái đã bung sẵn — tiện xem layout các kênh. */
export const Opened: Story = {
  args: { defaultOpen: true },
}

/** Neo ở góc trái dưới. */
export const BottomLeft: Story = {
  args: { position: "bottom-left", defaultOpen: true },
}

/** Bộ kênh tối giản: chỉ Zalo + gọi điện. */
export const Minimal: Story = {
  args: {
    defaultOpen: true,
    channels: [
      { type: "zalo", href: "https://zalo.me/your-phone" },
      { type: "phone", href: "tel:your-phone" },
    ],
  },
}

/** Đầy đủ kênh, kèm WhatsApp & Telegram. */
export const AllChannels: Story = {
  args: {
    defaultOpen: true,
    channels: ALL_TYPES.map((type) => ({ type, href: CHANNEL_HREF[type] })),
  },
}
