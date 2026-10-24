import { SITE } from "@/lib/site"

type Crumb = { name: string; path: string }

export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString()

/** Stable @ids so every page's JSON-LD links back to one business and website. */
export const BUSINESS_ID = `${SITE.url}/#business`
export const WEBSITE_ID = `${SITE.url}/#website`

export function webPageJsonLd(opts: { name: string; description: string; path: string; lang: string }) {
  const url = absoluteUrl(opts.path)
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
  }
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  }
}

export function serviceJsonLd(opts: {
  name: string
  description: string
  path: string
  image: string
  lang: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: absoluteUrl(opts.image),
    inLanguage: opts.lang,
    provider: { "@id": BUSINESS_ID },
    areaServed: SITE.areas.map((name) => ({ "@type": "City", name })),
  }
}
