"use client"

import { useId, useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { track } from "@/lib/analytics"
import { formatTrMobile, normalizeTrMobile } from "@/lib/phone"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

type Labels = {
  name: string
  namePlaceholder: string
  nameError: string
  phone: string
  phonePlaceholder: string
  phoneError: string
  message: string
  messagePlaceholder: string
  messageError: string
  send: string
  sentNote: string
  formNote: string
}

type Field = "name" | "phone" | "message"

const validate = (v: Record<Field, string>) => ({
  name: v.name.trim().length < 2,
  phone: normalizeTrMobile(v.phone) === null,
  message: v.message.trim().length < 10,
})

/**
 * Free-inspection form. Nothing is sent to a server: on submit it opens
 * WhatsApp with the details pre-filled, as the site always has.
 */
export function ContactForm({ labels }: { labels: Labels }) {
  const id = useId()
  const [values, setValues] = useState<Record<Field, string>>({ name: "", phone: "", message: "" })
  const [touched, setTouched] = useState<Record<Field, boolean>>({ name: false, phone: false, message: false })
  const [sent, setSent] = useState(false)

  const errors = validate(values)
  const show = (f: Field) => touched[f] && errors[f]
  const set = (f: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [f]: e.target.value }))
    setSent(false)
  }
  const blur = (f: Field) => () => {
    setTouched((t) => ({ ...t, [f]: true }))
    if (f === "phone") {
      const n = normalizeTrMobile(values.phone)
      if (n) setValues((v) => ({ ...v, phone: formatTrMobile(n) }))
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched({ name: true, phone: true, message: true })
    if (errors.name || errors.phone || errors.message) {
      const first = (["name", "phone", "message"] as Field[]).find((f) => errors[f])
      e.currentTarget.querySelector<HTMLElement>(`#${CSS.escape(`${id}-${first}`)}`)?.focus()
      return
    }
    const phone = formatTrMobile(normalizeTrMobile(values.phone)!)
    const text = encodeURIComponent(`Merhaba, ben ${values.name.trim()}. ${values.message.trim()}\n\nTelefon: ${phone}`)
    // Opened synchronously inside the submit handler so pop-up blockers allow it.
    window.open(`${SITE.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer")
    track("generate_lead", { form: "free_inspection", method: "whatsapp" })
    setSent(true)
    setValues({ name: "", phone: "", message: "" })
    setTouched({ name: false, phone: false, message: false })
  }

  const fieldClass = "h-12 rounded-xl bg-background px-4 text-base"
  const error = (f: Field, text: string) =>
    show(f) && (
      <p id={`${id}-${f}-error`} className="mt-1.5 text-sm font-medium text-destructive">
        {text}
      </p>
    )

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <Label htmlFor={`${id}-name`} className="mb-2 block font-semibold">
          {labels.name}
        </Label>
        <Input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          placeholder={labels.namePlaceholder}
          value={values.name}
          onChange={set("name")}
          onBlur={blur("name")}
          aria-invalid={show("name") || undefined}
          aria-describedby={show("name") ? `${id}-name-error` : undefined}
          className={fieldClass}
        />
        {error("name", labels.nameError)}
      </div>

      <div>
        <Label htmlFor={`${id}-phone`} className="mb-2 block font-semibold">
          {labels.phone}
        </Label>
        <Input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={labels.phonePlaceholder}
          value={values.phone}
          onChange={set("phone")}
          onBlur={blur("phone")}
          aria-invalid={show("phone") || undefined}
          aria-describedby={show("phone") ? `${id}-phone-error` : undefined}
          className={fieldClass}
        />
        {error("phone", labels.phoneError)}
      </div>

      <div>
        <Label htmlFor={`${id}-message`} className="mb-2 block font-semibold">
          {labels.message}
        </Label>
        <Textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          placeholder={labels.messagePlaceholder}
          value={values.message}
          onChange={set("message")}
          onBlur={blur("message")}
          aria-invalid={show("message") || undefined}
          aria-describedby={show("message") ? `${id}-message-error` : undefined}
          className={cn(fieldClass, "h-auto min-h-32 resize-none py-3")}
        />
        {error("message", labels.messageError)}
      </div>

      <Button type="submit" size="xl" className="w-full">
        <Send aria-hidden />
        {labels.send}
      </Button>

      <p role="status" className={cn("text-center text-sm", sent ? "font-medium text-brand" : "text-muted-foreground")}>
        {sent ? (
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="size-4" aria-hidden />
            {labels.sentNote}
          </span>
        ) : (
          labels.formNote
        )}
      </p>
    </form>
  )
}
