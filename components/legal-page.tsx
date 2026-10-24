import type { Metadata } from "next"
import { SiteChrome } from "@/components/site-chrome"
import { JsonLdScript } from "@/components/json-ld-script"
import { PageHero } from "@/components/service-pages/page-hero"
import { LEGAL, LEGAL_UPDATED } from "@/lib/data/legal"
import { LEGAL_PATHS, type LegalPage as LegalPageId } from "@/lib/routes"
import { buildPageMetadata } from "@/lib/seo"
import { breadcrumbJsonLd } from "@/lib/structured-data"
import { getT, LANG_PATH, type Lang } from "@/lib/translations"

export function legalMetadata(page: LegalPageId, lang: Lang): Metadata {
  const c = LEGAL[page][lang]
  return buildPageMetadata({
    lang,
    title: `${c.title} | MKaplan İnşaat`,
    description: c.metaDescription,
    paths: LEGAL_PATHS[page],
  })
}

/** KVKK privacy notice / cookie policy page. */
export function LegalPage({ page, lang }: { page: LegalPageId; lang: Lang }) {
  const t = getT(lang)
  const c = LEGAL[page][lang]
  const crumbs = [
    { name: t.servicePages.home, path: LANG_PATH[lang] },
    { name: c.title, path: LEGAL_PATHS[page][lang] },
  ]

  return (
    <SiteChrome>
      <JsonLdScript data={breadcrumbJsonLd(crumbs)} />
      <PageHero lang={lang} crumbs={crumbs} eyebrow={t.legal.eyebrow} title={c.title} lead={c.intro} />

      <div className="site-container py-16 md:py-20">
        <article className="max-w-3xl">
          <p className="mb-10 text-sm text-muted-foreground">
            {t.legal.updated}: {LEGAL_UPDATED[lang]}
          </p>
          {c.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-xl font-extrabold text-foreground md:text-2xl">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground marker:text-brand">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </SiteChrome>
  )
}
