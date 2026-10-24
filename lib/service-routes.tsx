import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceDetail } from "@/components/service-pages/service-detail"
import { ServicesIndex } from "@/components/service-pages/services-index"
import { SERVICE_PAGES } from "@/lib/data/services"
import { SERVICES_BASE, findServiceBySlug, servicePath } from "@/lib/routes"
import { buildPageMetadata } from "@/lib/seo"
import { getT, type Lang } from "@/lib/translations"

/**
 * Route handlers shared by /hizmetler/* (TR) and /en/services/* (EN),
 * so each app/ route file is a one-line binding to a language.
 */
type SlugParams = { params: Promise<{ slug: string }> }

const pageFor = (lang: Lang, slug: string) => {
  const nav = findServiceBySlug(lang, slug)
  return nav && SERVICE_PAGES.find((s) => s.id === nav.id)
}

export function serviceRoutes(lang: Lang) {
  return {
    generateStaticParams: () => SERVICE_PAGES.map((s) => ({ slug: s.slug[lang] })),

    generateMetadata: async ({ params }: SlugParams): Promise<Metadata> => {
      const service = pageFor(lang, (await params).slug)
      if (!service) return {}
      const c = service.content[lang]
      return buildPageMetadata({
        lang,
        title: c.metaTitle,
        description: c.metaDescription,
        paths: { tr: servicePath("tr", service.slug.tr), en: servicePath("en", service.slug.en) },
        image: {
          url: service.image.src,
          width: service.image.width,
          height: service.image.height,
          alt: service.imageAlt[lang],
        },
      })
    },

    Page: async function ServiceRoute({ params }: SlugParams) {
      const service = pageFor(lang, (await params).slug)
      if (!service) notFound()
      return <ServiceDetail service={service} lang={lang} />
    },
  }
}

export function servicesIndexRoute(lang: Lang) {
  const sp = getT(lang).servicePages
  return {
    metadata: buildPageMetadata({
      lang,
      title: sp.indexMetaTitle,
      description: sp.indexMetaDescription,
      paths: SERVICES_BASE,
    }),
    Page: function ServicesIndexRoute() {
      return <ServicesIndex lang={lang} />
    },
  }
}
