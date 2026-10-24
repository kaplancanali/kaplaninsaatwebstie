import type { Translations } from "@/lib/translations"

type NavStrings = { nav: Translations["nav"] }

/** In-page sections linked from the main navigation (ids are SEO anchors — do not rename). */
export const NAV_SECTIONS = [
  { id: "hizmetler", label: (t: NavStrings) => t.nav.services },
  { id: "galeri", label: (t: NavStrings) => t.nav.gallery },
  { id: "hakkimizda", label: (t: NavStrings) => t.nav.about },
  { id: "yorumlar", label: (t: NavStrings) => t.nav.reviews },
  { id: "iletisim", label: (t: NavStrings) => t.nav.contact },
] as const

/** Hero statistics. Labels come from t.hero.statLabels (same order). */
export const HERO_STATS = [
  { value: 500, suffix: "+" },
  { value: 15, suffix: "+" },
  { value: 100, suffix: "%" },
] as const
