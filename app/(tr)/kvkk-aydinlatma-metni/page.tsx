import { LegalPage, legalMetadata } from "@/components/legal-page"

export const metadata = legalMetadata("kvkk", "tr")

export default function Page() {
  return <LegalPage page="kvkk" lang="tr" />
}
