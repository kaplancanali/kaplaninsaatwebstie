import { metalCati } from "./metal-cati"
import { kiremitCati } from "./kiremit-cati"
import { catiTamiri } from "./cati-tamiri"
import { eksizOluk } from "./eksiz-oluk"
import { membranCati } from "./membran-cati"
import { isiYalitimi } from "./isi-yalitimi"
import { terasSuYalitimi } from "./teras-su-yalitimi"
import type { ServiceCategory, ServicePage } from "./types"

export type { ServiceCategory, ServicePage, ServiceContent, ServiceNavItem } from "./types"
export { SERVICE_NAV } from "./nav"

/** Service guide pages, in display order. */
export const SERVICE_PAGES: ServicePage[] = [
  metalCati,
  kiremitCati,
  catiTamiri,
  eksizOluk,
  membranCati,
  isiYalitimi,
  terasSuYalitimi,
]

export const getServicePage = (id: string) => SERVICE_PAGES.find((s) => s.id === id)

export const servicePagesInCategory = (category: ServiceCategory) =>
  SERVICE_PAGES.filter((s) => s.category === category)
