import { JsonLdScript } from "@/components/json-ld-script"
import { SERVICE_PAGES } from "@/lib/data/services"
import { servicePath } from "@/lib/routes"
import { absoluteUrl, BUSINESS_ID, WEBSITE_ID } from "@/lib/structured-data"
import { getT, LANG_PATH, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

const TEL = (n: string) => n.replace(/\s/g, "")

/** Site-wide business + website graph, rendered on every page. */
export function JsonLd({ lang }: { lang: Lang }) {
  const t = getT(lang)

  const business = {
    "@type": "RoofingContractor",
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    description: t.meta.description,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl(SITE.ogImage),
    telephone: TEL(SITE.phones.primaryDisplay),
    contactPoint: [SITE.phones.primaryDisplay, SITE.phones.secondaryDisplay].map((phone) => ({
      "@type": "ContactPoint",
      telephone: TEL(phone),
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.district,
      addressRegion: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.mapsQuery)}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: SITE.region },
      ...SITE.areas.map((name) => ({ "@type": "City", name })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [SITE.instagram],
    knowsAbout: SERVICE_PAGES.map((s) => s.name[lang]),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.services.title,
      itemListElement: SERVICE_PAGES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name[lang],
          description: s.content[lang].summary,
          url: absoluteUrl(servicePath(lang, s.slug[lang])),
        },
      })),
    },
  }

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    inLanguage: ["tr-TR", "en"],
    publisher: { "@id": BUSINESS_ID },
  }

  return <JsonLdScript data={{ "@context": "https://schema.org", "@graph": [business, website] }} />
}

/** Home-page specific graph: the page itself (with speakable parts) and the 4-step process. */
export function HomeJsonLd({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const url = absoluteUrl(LANG_PATH[lang])

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: t.meta.title,
            description: t.meta.description,
            inLanguage: lang,
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": BUSINESS_ID },
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
          },
          {
            "@type": "HowTo",
            name: t.process.title,
            description: t.process.subtitle,
            step: t.process.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.description,
            })),
          },
        ],
      }}
    />
  )
}
