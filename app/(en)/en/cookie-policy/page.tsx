import { LegalPage, legalMetadata } from "@/components/legal-page"

export const metadata = legalMetadata("cookies", "en")

export default function Page() {
  return <LegalPage page="cookies" lang="en" />
}
