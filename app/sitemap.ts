import type { MetadataRoute } from "next"
import { SERVICE_NAV } from "@/lib/data/services/nav"
import { LEGAL_PATHS, SERVICES_BASE, servicePath } from "@/lib/routes"
import { absoluteUrl } from "@/lib/structured-data"
import { LANG_PATH, LANGS, type Lang } from "@/lib/translations"

type Entry = { paths: Record<Lang, string>; priority: number }

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { paths: LANG_PATH, priority: 1 },
    { paths: SERVICES_BASE, priority: 0.8 },
    ...SERVICE_NAV.map((s) => ({
      paths: { tr: servicePath("tr", s.slug.tr), en: servicePath("en", s.slug.en) },
      priority: 0.7,
    })),
    ...Object.values(LEGAL_PATHS).map((paths) => ({ paths, priority: 0.3 })),
  ]
  const lastModified = new Date()

  // One URL per language, each listing its translations as alternates.
  return entries.flatMap(({ paths, priority }) =>
    LANGS.map((lang) => ({
      url: absoluteUrl(paths[lang]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "tr" ? priority : priority - 0.1,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, absoluteUrl(paths[l])])),
      },
    }))
  )
}
