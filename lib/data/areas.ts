import type { Lang } from "@/lib/translations"

export type ServiceArea = {
  id: string
  name: string
  /** Local search phrases shown for the district (SEO copy — keep the TR texts as they are). */
  keywords: Record<Lang, string[]>
}

/** All 12 districts of Kocaeli, roughly west to east. */
export const SERVICE_AREAS: ServiceArea[] = [
  { id: "gebze", name: "Gebze", keywords: { tr: ["Gebze çatı sistemleri", "Gebze oluk"], en: ["Gebze roofing systems", "Gebze gutters"] } },
  { id: "cayirova", name: "Çayırova", keywords: { tr: ["Çayırova çatı sistemleri", "Çayırova eksiz oluk"], en: ["Çayırova roofing systems", "Çayırova seamless gutters"] } },
  { id: "darica", name: "Darıca", keywords: { tr: ["Darıca çatı izolasyon", "Darıca membran"], en: ["Darıca roof insulation", "Darıca membrane"] } },
  { id: "dilovasi", name: "Dilovası", keywords: { tr: ["Dilovası çatı tamiri", "Dilovası metal çatı"], en: ["Dilovası roof repair", "Dilovası metal roofing"] } },
  { id: "korfez", name: "Körfez", keywords: { tr: ["Körfez çatı kaplama", "Körfez çatı ustası"], en: ["Körfez roof covering", "Körfez roofing contractor"] } },
  { id: "derince", name: "Derince", keywords: { tr: ["Derince çatı ustası", "Derince oluk sistemi"], en: ["Derince roofing contractor", "Derince gutter system"] } },
  { id: "izmit", name: "İzmit", keywords: { tr: ["İzmit çatı ustası", "İzmit çatı tamiri"], en: ["İzmit roofing contractor", "İzmit roof repair"] } },
  { id: "kartepe", name: "Kartepe", keywords: { tr: ["Kartepe çatı izolasyon", "Kartepe metal çatı"], en: ["Kartepe roof insulation", "Kartepe metal roofing"] } },
  { id: "basiskele", name: "Başiskele", keywords: { tr: ["Başiskele çatı ustası", "Başiskele oluk sistemi"], en: ["Başiskele roofing contractor", "Başiskele gutter system"] } },
  { id: "golcuk", name: "Gölcük", keywords: { tr: ["Gölcük oluk sistemi", "Gölcük çatı tamiri"], en: ["Gölcük gutter system", "Gölcük roof repair"] } },
  { id: "karamursel", name: "Karamürsel", keywords: { tr: ["Karamürsel çatı ustası", "Karamürsel çatı izolasyon"], en: ["Karamürsel roofing contractor", "Karamürsel roof insulation"] } },
  { id: "kandira", name: "Kandıra", keywords: { tr: ["Kandıra eksiz oluk", "Kandıra çatı sistemleri"], en: ["Kandıra seamless gutters", "Kandıra roofing systems"] } },
]

/** District highlighted on the map before the visitor picks one. */
export const DEFAULT_AREA_ID = "izmit"
