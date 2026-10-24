import { serviceRoutes } from "@/lib/service-routes"

const route = serviceRoutes("en")

export const dynamicParams = false
export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
