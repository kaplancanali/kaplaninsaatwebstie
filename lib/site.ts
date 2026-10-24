import { SERVICE_AREAS } from "@/lib/data/areas"

export const SITE = {
  name: "Kaplan İnşaat",
  url: "https://mkaplaninsaat.com",
  phones: {
    primary: "+905399130646",
    primaryDisplay: "+90 539 913 06 46",
    secondary: "+905354176319",
    secondaryDisplay: "+90 535 417 63 19",
  },
  whatsapp: "https://wa.me/905399130646",
  instagram: "https://www.instagram.com/kaplaninsaat41/",
  instagramHandle: "@kaplaninsaat41",
  locale: "tr_TR",
  region: "Kocaeli",
  /** Districts served — also used for SEO copy and structured data. */
  areas: SERVICE_AREAS.map((a) => a.name),
  ogImage: "/og-image.jpg",
  /** Google Analytics 4 measurement ID. */
  gaId: "G-R4BR4PJXX0",
} as const
