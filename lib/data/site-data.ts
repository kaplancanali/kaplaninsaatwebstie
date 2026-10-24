import type { Translations } from "@/lib/translations"

/** In-page sections linked from the main navigation (ids are SEO anchors — do not rename). */
export const NAV_SECTIONS = [
  { id: "hizmetler", label: (t: Translations) => t.nav.services },
  { id: "galeri", label: (t: Translations) => t.nav.gallery },
  { id: "hakkimizda", label: (t: Translations) => t.nav.about },
  { id: "yorumlar", label: (t: Translations) => t.nav.reviews },
  { id: "iletisim", label: (t: Translations) => t.nav.contact },
] as const

/** Hero statistics. Labels come from t.hero.statLabels (same order). */
export const HERO_STATS = [
  { value: 500, suffix: "+" },
  { value: 15, suffix: "+" },
  { value: 100, suffix: "%" },
] as const
