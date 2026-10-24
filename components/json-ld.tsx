import { SITE } from "@/lib/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: [SITE.phones.primaryDisplay, SITE.phones.secondaryDisplay],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kocaeli",
      addressCountry: "TR",
    },
    areaServed: [...SITE.areas, SITE.region].map((name) => ({ "@type": "City", name })),
    sameAs: [SITE.instagram],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
