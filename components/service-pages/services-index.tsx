import { SiteChrome } from "@/components/site-chrome"
import { JsonLdScript } from "@/components/json-ld-script"
import { PageHero } from "@/components/service-pages/page-hero"
import { ServiceCard } from "@/components/service-pages/service-card"
import { CtaBand } from "@/components/service-pages/cta-band"
import { RoofMark } from "@/components/ui/section-heading"
import { servicePagesInCategory } from "@/lib/data/services"
import { SERVICE_CATEGORIES } from "@/lib/data/services/nav"
import { SERVICES_BASE } from "@/lib/routes"
import { breadcrumbJsonLd } from "@/lib/structured-data"
import { getT, LANG_PATH, type Lang } from "@/lib/translations"

export function ServicesIndex({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const sp = t.servicePages
  const crumbs = [
    { name: sp.home, path: LANG_PATH[lang] },
    { name: t.nav.services, path: SERVICES_BASE[lang] },
  ]

  return (
    <SiteChrome>
      <JsonLdScript data={breadcrumbJsonLd(crumbs)} />
      <PageHero lang={lang} crumbs={crumbs} eyebrow={sp.indexEyebrow} title={sp.indexTitle} lead={sp.indexDescription} />

      <div className="site-container space-y-16 py-16 md:py-20">
        {SERVICE_CATEGORIES.map((category) => (
          <section key={category} aria-labelledby={`cat-${category}`}>
            <h2
              id={`cat-${category}`}
              className="mb-8 flex items-center gap-3 text-2xl font-extrabold text-foreground md:text-3xl"
            >
              <RoofMark className="text-brand" />
              {sp.categories[category]}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicePagesInCategory(category).map((s) => (
                <ServiceCard key={s.id} service={s} lang={lang} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBand lang={lang} />
    </SiteChrome>
  )
}
