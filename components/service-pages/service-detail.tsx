import Link from "next/link"
import { ArrowRight, CheckCircle2, CircleAlert, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RoofMark } from "@/components/ui/section-heading"
import { SiteChrome } from "@/components/site-chrome"
import { JsonLdScript } from "@/components/json-ld-script"
import { PageHero } from "@/components/service-pages/page-hero"
import { ServiceCard } from "@/components/service-pages/service-card"
import { FaqList } from "@/components/ui/faq-list"
import { CtaBand } from "@/components/service-pages/cta-band"
import { SERVICE_NAV } from "@/lib/data/services/nav"
import { getServicePage, type ServicePage } from "@/lib/data/services"
import { SERVICES_BASE, sectionHref, servicePath } from "@/lib/routes"
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/structured-data"
import { getT, LANG_PATH, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export function ServiceDetail({ service, lang }: { service: ServicePage; lang: Lang }) {
  const t = getT(lang)
  const sp = t.servicePages
  const c = service.content[lang]
  const path = servicePath(lang, service.slug[lang])
  const crumbs = [
    { name: sp.home, path: LANG_PATH[lang] },
    { name: t.nav.services, path: SERVICES_BASE[lang] },
    { name: service.name[lang], path },
  ]
  const related = service.related
    .map(getServicePage)
    .filter((s): s is ServicePage => s !== undefined)

  return (
    <SiteChrome>
      <JsonLdScript
        data={[
          serviceJsonLd({ name: service.name[lang], description: c.metaDescription, path, image: service.image.src, lang }),
          breadcrumbJsonLd(crumbs),
          faqJsonLd(c.faq),
        ]}
      />

      <PageHero
        lang={lang}
        crumbs={crumbs}
        eyebrow={sp.categories[service.category]}
        title={c.title}
        lead={c.lead}
        image={service.image}
        imageAlt={service.imageAlt[lang]}
      />

      <div className="site-container grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <article className="min-w-0">
          {c.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.list && (
                <ol className="mt-6 grid gap-3">
                  {section.list.map((item, i) => (
                    <li key={item} className="flex gap-4 rounded-xl border bg-card p-4 shadow-soft">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent font-heading text-sm font-bold text-accent-foreground tabular-nums">
                        {i + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border bg-card p-6 shadow-soft md:p-7">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
                <RoofMark className="text-brand" />
                {sp.benefitsTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl bg-navy-900 p-6 text-white shadow-soft md:p-7 dark:border">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <RoofMark className="text-copper-400" />
                {sp.whenTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.whenNeeded.map((w) => (
                  <li key={w} className="flex gap-3 text-white/85">
                    <CircleAlert className="mt-0.5 size-5 shrink-0 text-copper-400" aria-hidden />
                    {w}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h2 className="mb-6 text-2xl font-extrabold text-foreground md:text-3xl">{sp.faqTitle}</h2>
            <FaqList items={c.faq} />
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">{sp.asideTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sp.asideText}</p>
            <div className="mt-5 grid gap-2.5">
              <Button asChild>
                <a href={sectionHref(lang, "iletisim", false)}>
                  {t.nav.freeInspection}
                  <ArrowRight aria-hidden />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                  <Phone aria-hidden />
                  {SITE.phones.primaryDisplay}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden />
                  {t.common.whatsapp}
                </a>
              </Button>
            </div>
            <p className="mt-5 border-t pt-4 text-xs leading-relaxed text-muted-foreground">{sp.areasNote}</p>
          </div>

          <nav aria-label={sp.guideMenu} className="rounded-2xl border bg-card p-3 shadow-soft">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {sp.guideMenu}
            </p>
            <ul>
              {SERVICE_NAV.map((s) => {
                const current = s.id === service.id
                return (
                  <li key={s.id}>
                    <Link
                      href={servicePath(lang, s.slug[lang])}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                        current ? "bg-accent font-semibold text-accent-foreground" : "text-foreground hover:bg-muted"
                      )}
                    >
                      {s.name[lang]}
                      <ArrowRight className={cn("size-4", current ? "opacity-100" : "opacity-30")} aria-hidden />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="bg-surface py-16 md:py-20">
          <div className="site-container">
            <h2 id="related-title" className="mb-8 text-2xl font-extrabold text-foreground md:text-3xl">
              {sp.relatedTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ServiceCard key={r.id} service={r} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand lang={lang} />
    </SiteChrome>
  )
}
