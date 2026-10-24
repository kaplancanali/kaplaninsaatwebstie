import type { MetadataRoute } from "next"
import { getT } from "@/lib/translations"
import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  const { meta } = getT("tr")
  return {
    name: meta.title,
    short_name: SITE.name,
    description: meta.ogDescription,
    lang: "tr",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0f172a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
