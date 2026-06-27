import { useState } from "react"
import { Button } from "@leaner/ui/components/button"
import { Input } from "@leaner/ui/components/input"
import { Textarea } from "@leaner/ui/components/textarea"
import { Label } from "@leaner/ui/components/label"
import { SITE } from "../../consts"

/**
 * Backend-free contact form. Composes a mailto: link from the fields and opens
 * the visitor's mail client — no server, no tracking, keeps the site static.
 */
export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact — ${name || "Hello"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="cf-name">Name</Label>
        <Input
          id="cf-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cf-email">Email</Label>
        <Input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cf-message">Message</Label>
        <Textarea
          id="cf-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to build together?"
          rows={5}
          required
        />
      </div>
      <Button type="submit" variant="gradient" size="lg" className="justify-self-start">
        Send message
      </Button>
    </form>
  )
}
