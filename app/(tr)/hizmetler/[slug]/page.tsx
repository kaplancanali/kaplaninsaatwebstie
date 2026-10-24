import { serviceRoutes } from "@/lib/service-routes"

const route = serviceRoutes("tr")

export const dynamicParams = false
export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
