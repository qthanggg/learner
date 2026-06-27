/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Số điện thoại liên hệ — đặt trong .env (không commit). */
  readonly CONTACT_PHONE: string
  /** URL LinkedIn — đặt trong .env (không commit). */
  readonly CONTACT_LINKEDIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
