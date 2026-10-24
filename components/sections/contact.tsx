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

            <Reveal className="overflow-hidden rounded-2xl border bg-card shadow-soft">
              <div className="flex items-start gap-4 p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-foreground">{c.addressCard}</h3>
                  <address className="mt-1 not-italic text-muted-foreground">{SITE.address.full}</address>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-center rounded-lg px-2 py-1 text-sm font-semibold text-brand hover:underline underline-offset-4"
                >
                  {c.mapOpen}
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
              <iframe
                title={c.mapTitle}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.mapsQuery)}&z=16&hl=${lang}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-64 w-full border-0 border-t md:h-72"
              />
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
