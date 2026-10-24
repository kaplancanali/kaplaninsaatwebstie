import type { StaticImageData } from "next/image"
import type { Lang } from "@/lib/translations"

export type ServiceCategory = "cati" | "oluk" | "izolasyon"

export type ServiceSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type ServiceContent = {
  /** Page <h1> — phrased the way people search ("… nedir?"). */
  title: string
  metaTitle: string
  metaDescription: string
  /** One-line summary for cards. */
  summary: string
  lead: string
  sections: ServiceSection[]
  benefits: string[]
  whenNeeded: string[]
  faq: { question: string; answer: string }[]
}

export type ServiceNavItem = {
  id: string
  category: ServiceCategory
  slug: Record<Lang, string>
  /** Short name used in menus, cards and breadcrumbs. */
  name: Record<Lang, string>
}

export type ServicePage = ServiceNavItem & {
  image: StaticImageData
  imageAlt: Record<Lang, string>
  content: Record<Lang, ServiceContent>
  /** ids of related services shown at the bottom of the page. */
  related: string[]
}
