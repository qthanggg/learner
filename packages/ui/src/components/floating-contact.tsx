import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { MessageCircle, Phone, X, type LucideIcon } from "lucide-react"

import { cn } from "@leaner/ui/lib/utils"

/* -------------------------------------------------------------------------- */
/*                              Brand icons (SVG)                              */
/* -------------------------------------------------------------------------- */
/* Lucide không có logo các nền tảng chat nên nhúng SVG brand inline.          */

type IconProps = React.SVGProps<SVGSVGElement>

function ZaloIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden {...props}>
      <path d="M24 4C12.4 4 3 12.06 3 22c0 5.66 3.05 10.7 7.82 13.98-.2 1.6-.86 4.2-2.5 6.02-.3.34-.07.9.4.86 3.5-.3 6.3-1.7 8.04-2.86A24.6 24.6 0 0 0 24 40c11.6 0 21-8.06 21-18S35.6 4 24 4Z" />
      <path
        fill="#fff"
        d="M16.2 19.2h7.6c.5 0 .8.6.5 1L18 27.4h5.5c.4 0 .7.3.7.7v.9c0 .4-.3.7-.7.7h-8.2c-.5 0-.8-.6-.5-1l4.3-7.2h-2.9c-.4 0-.7-.3-.7-.7v-.9c0-.4.3-.7.7-.7Zm14.7 0c.4 0 .7.3.7.7v8.4c0 .4-.3.7-.7.7h-.9c-.4 0-.7-.3-.7-.7v-8.4c0-.4.3-.7.7-.7h.9Z"
      />
    </svg>
  )
}

function MessengerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.9 1.19 5.4 3.14 7.13.16.14.26.34.27.56l.05 1.78c.03.57.62.94 1.14.71l1.99-.88a.74.74 0 0 1 .5-.04c.91.25 1.88.39 2.81.39 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2Zm6 7.46-2.93 4.65a1.5 1.5 0 0 1-2.17.4l-2.33-1.75a.6.6 0 0 0-.72 0l-3.15 2.39c-.42.32-.97-.18-.69-.63l2.94-4.65a1.5 1.5 0 0 1 2.17-.4l2.33 1.75a.6.6 0 0 0 .72 0l3.15-2.39c.42-.32.97.18.68.63Z" />
    </svg>
  )
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M.06 24l1.69-6.16A11.87 11.87 0 0 1 .16 11.9C.16 5.33 5.5 0 12.07 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.57-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.89-4.43 9.9-9.88a9.86 9.86 0 0 0-2.9-7 9.82 9.82 0 0 0-6.98-2.9c-5.46 0-9.9 4.43-9.9 9.88 0 2.23.65 3.9 1.74 5.65l-1 3.65 3.74-.98Zm11.39-5.46c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41Z" />
    </svg>
  )
}

function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.57 8.16-1.86 8.76c-.14.62-.5.77-1.02.48l-2.82-2.08-1.36 1.31c-.15.15-.28.28-.57.28l.2-2.88 5.24-4.74c.23-.2-.05-.32-.35-.12l-6.48 4.08-2.79-.87c-.6-.19-.62-.6.13-.9l10.9-4.2c.5-.18.94.12.78.88Z" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Channel presets                               */
/* -------------------------------------------------------------------------- */

type ChannelPreset = {
  label: string
  Icon: React.ComponentType<IconProps> | LucideIcon
  /** Màu nền brand cho nút (Tailwind class). */
  brand: string
}

const CHANNEL_PRESETS = {
  zalo: { label: "Zalo", Icon: ZaloIcon, brand: "bg-[#0068ff] text-white" },
  messenger: {
    label: "Messenger",
    Icon: MessengerIcon,
    brand: "bg-[#0084ff] text-white",
  },
  linkedin: { label: "LinkedIn", Icon: LinkedinIcon, brand: "bg-[#0a66c2] text-white" },
  whatsapp: { label: "WhatsApp", Icon: WhatsappIcon, brand: "bg-[#25d366] text-white" },
  telegram: { label: "Telegram", Icon: TelegramIcon, brand: "bg-[#229ed9] text-white" },
  phone: { label: "Gọi điện", Icon: Phone, brand: "bg-success text-success-foreground" },
  email: { label: "Email", Icon: MessageCircle, brand: "bg-primary text-primary-foreground" },
} as const satisfies Record<string, ChannelPreset>

type ChannelType = keyof typeof CHANNEL_PRESETS

export type ContactChannel = {
  /** Loại kênh — quyết định icon + màu brand mặc định. */
  type: ChannelType
  /** Đích đến: zalo.me/…, m.me/…, tel:…, mailto:… */
  href: string
  /** Ghi đè nhãn tooltip (mặc định lấy theo preset). */
  label?: string
  /** Ghi đè màu nền (Tailwind class). */
  className?: string
}

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

const containerVariants = cva("fixed z-50", {
  variants: {
    position: {
      "bottom-right": "bottom-6 right-6",
      "bottom-left": "bottom-6 left-6",
    },
  },
  defaultVariants: { position: "bottom-right" },
})

const actionButton =
  "flex size-12 items-center justify-center rounded-full shadow-lg outline-none transition-all hover:scale-110 hover:shadow-xl focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-6"

export type FloatingContactProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    /** Danh sách kênh liên hệ hiển thị khi mở. */
    channels: ContactChannel[]
    /** Mở sẵn khi mount (hữu ích cho ảnh/preview). */
    defaultOpen?: boolean
  }

function FloatingContact({
  channels,
  position,
  defaultOpen = false,
  className,
  ...props
}: FloatingContactProps) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <div className={cn(containerVariants({ position }), className)} {...props}>
      {/* Cụm neo ở góc — khi đóng chỉ còn đúng FAB chiếm chỗ */}
      <div className="relative flex size-14 items-center justify-center">
        {/* Stack kênh: absolute phía trên FAB, trượt lên khi mở (không chiếm layout lúc đóng) */}
        <div className="absolute bottom-full mb-3 flex flex-col items-center gap-3">
          {channels.map((channel, i) => {
            const preset = CHANNEL_PRESETS[channel.type]
            const Icon = preset.Icon
            const label = channel.label ?? preset.label
            // Cái gần FAB nhất (cuối danh sách) trượt lên trước
            const order = channels.length - 1 - i
            return (
              <a
                key={`${channel.type}-${i}`}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                tabIndex={open ? 0 : -1}
                className={cn(
                  actionButton,
                  channel.className ?? preset.brand,
                  open
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-3 scale-90 opacity-0",
                )}
                style={{ transitionDelay: `${open ? order * 50 : 0}ms` }}
              >
                <Icon />
              </a>
            )
          })}
        </div>

        {/* Nút chính bật/tắt */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Đóng liên hệ" : "Mở liên hệ"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            actionButton,
            "from-brand-teal to-brand-pink size-14 bg-gradient-to-r text-white [&_svg]:size-7",
          )}
        >
          {open ? <X /> : <MessageCircle />}
        </button>
      </div>
    </div>
  )
}

export { FloatingContact }
