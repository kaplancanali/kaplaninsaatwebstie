import type { ServiceCategory, ServiceNavItem } from "./types"

/**
 * Lightweight list of service guide pages (no page content), safe to import
 * from client components such as the header, footer and language switcher.
 */
export const SERVICE_NAV: ServiceNavItem[] = [
  {
    id: "metal-cati",
    category: "cati",
    slug: { tr: "metal-cati", en: "metal-roofing" },
    name: { tr: "Metal Çatı", en: "Metal Roofing" },
  },
  {
    id: "kiremit-cati",
    category: "cati",
    slug: { tr: "kiremit-cati", en: "tile-roofing" },
    name: { tr: "Kiremit Çatı", en: "Tile Roofing" },
  },
  {
    id: "cati-tamiri",
    category: "cati",
    slug: { tr: "cati-tamiri-ve-yenileme", en: "roof-repair-and-renewal" },
    name: { tr: "Çatı Tamiri ve Yenileme", en: "Roof Repair & Renewal" },
  },
  {
    id: "eksiz-oluk",
    category: "oluk",
    slug: { tr: "eksiz-oluk", en: "seamless-gutters" },
    name: { tr: "Eksiz Oluk", en: "Seamless Gutters" },
  },
  {
    id: "membran-cati",
    category: "izolasyon",
    slug: { tr: "membran-cati", en: "membrane-roofing" },
    name: { tr: "Membran Çatı", en: "Membrane Roofing" },
  },
  {
    id: "isi-yalitimi",
    category: "izolasyon",
    slug: { tr: "cati-isi-yalitimi", en: "roof-insulation" },
    name: { tr: "Çatı Isı Yalıtımı", en: "Roof Insulation" },
  },
  {
    id: "teras-su-yalitimi",
    category: "izolasyon",
    slug: { tr: "teras-su-yalitimi", en: "terrace-waterproofing" },
    name: { tr: "Teras ve Düz Çatı Su Yalıtımı", en: "Terrace & Flat Roof Waterproofing" },
  },
]

export function navItem(id: string): ServiceNavItem {
  const item = SERVICE_NAV.find((s) => s.id === id)
  if (!item) throw new Error(`Unknown service id: ${id}`)
  return item
}

/** Matches the order of t.services.items on the home page. */
export const SERVICE_CATEGORIES: ServiceCategory[] = ["cati", "oluk", "izolasyon"]

export const servicesInCategory = (category: ServiceCategory) =>
  SERVICE_NAV.filter((s) => s.category === category)
