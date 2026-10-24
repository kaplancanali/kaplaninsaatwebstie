import { Clock, ExternalLink, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/sections/contact-form"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

export function Contact({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const c = t.contact

  const cards = [
    {
      icon: Phone,
      title: c.phoneCard,
      lines: [
        { label: SITE.phones.primaryDisplay, href: `tel:${SITE.phones.primary}` },
        { label: SITE.phones.secondaryDisplay, href: `tel:${SITE.phones.secondary}` },
      ],
    },
    { icon: MessageCircle, title: c.whatsappCard, lines: [{ label: c.whatsappAction, href: SITE.whatsapp, external: true }] },
    { icon: Instagram, title: c.instagramCard, lines: [{ label: SITE.instagramHandle, href: SITE.instagram, external: true }] },
    { icon: Clock, title: c.hoursCard, lines: [{ label: c.hours }] },
  ]

  return (
    <section id="iletisim" aria-labelledby="contact-title" className="bg-surface py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={c.badge} title={c.title} description={c.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="space-y-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {cards.map((card, i) => (
                <Reveal as="li" key={card.title} delay={i * 0.06} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <card.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{card.title}</h3>
                  <div className="mt-1 space-y-0.5">
                    {card.lines.map((line) =>
                      "href" in line && line.href ? (
                        <a
                          key={line.label}
                          href={line.href}
                          {...("external" in line && line.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="block text-muted-foreground transition-colors hover:text-brand"
                        >
                          {line.label}
                        </a>
                      ) : (
                        <p key={line.label} className="text-muted-foreground">
                          {line.label}
                        </p>
                      )
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* Map placeholder — swap for a Google Maps <iframe> once the address is set. */}
            <Reveal className="relative overflow-hidden rounded-2xl bg-navy-950 text-white shadow-soft">
              <div aria-hidden className="pattern-grid absolute inset-0 text-white/[0.06]" />
              <div className="relative flex min-h-56 flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-copper-600">
                  <MapPin className="size-6" aria-hidden />
                </span>
                <p className="font-heading text-lg font-bold">{c.location}</p>
                <p className="text-sm text-white/65">{c.mapPlaceholder}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-copper-300 hover:underline underline-offset-4"
                >
                  {c.mapOpen}
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-3xl border bg-card p-6 shadow-lift md:p-10">
            <h3 className="text-2xl font-extrabold text-foreground">{c.formTitle}</h3>
            <div className="mt-6">
              <ContactForm
                labels={{
                  name: c.nameLabel,
                  namePlaceholder: c.namePlaceholder,
                  nameError: c.nameError,
                  phone: c.phoneLabel,
                  phonePlaceholder: c.phonePlaceholder,
                  phoneError: c.phoneError,
                  message: c.messageLabel,
                  messagePlaceholder: c.messagePlaceholder,
                  messageError: c.messageError,
                  send: t.common.send,
                  sentNote: c.sentNote,
                  formNote: c.formNote,
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
