import { SiteShell } from "@/components/site-shell"
import { buildMetadata, siteViewport } from "@/lib/seo"

export const metadata = buildMetadata("tr")
export const viewport = siteViewport

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="tr">{children}</SiteShell>
}
