import { SERVICE_PAGES } from "@/lib/data/services"
import { SERVICE_AREAS } from "@/lib/data/areas"
import { SERVICES_BASE, servicePath } from "@/lib/routes"
import { absoluteUrl } from "@/lib/structured-data"
import { getT, LANG_PATH } from "@/lib/translations"
import { SITE } from "@/lib/site"

/**
 * Plain-markdown summaries of the business for LLM-based search
 * (https://llmstxt.org). Generated from the same data as the pages, so they
 * never drift from what the site says.
 */

function header() {
  const tr = getT("tr")
  return [
    `# ${SITE.name}`,
    "",
    `> ${tr.meta.description}`,
    "",
    "## Firma bilgileri / Company facts",
    "",
    `- Faaliyet alanı / Business: Çatı sistemleri, eksiz oluk, izolasyon ve membran (roofing, seamless gutters, insulation & waterproofing)`,
    `- Bölge / Region: ${SITE.region}, Türkiye — ${SERVICE_AREAS.map((a) => a.name).join(", ")}`,
    `- Telefon / Phone: ${SITE.phones.primaryDisplay}, ${SITE.phones.secondaryDisplay}`,
    `- WhatsApp: ${SITE.whatsapp}`,
    `- Instagram: ${SITE.instagram} (${SITE.instagramHandle})`,
    `- Çalışma saatleri / Hours: 7/24`,
    `- Keşif / Inspection: Ücretsiz yerinde keşif (free on-site inspection)`,
    `- Garanti / Warranty: En az 2 yıl yazılı işçilik garantisi (minimum 2-year written workmanship warranty)`,
    `- Deneyim / Experience: 15+ yıl (15+ years)`,
    "",
  ]
}

function pageLinks() {
  const lines = ["## Sayfalar / Pages", ""]
  lines.push(`- [Ana sayfa (TR)](${absoluteUrl(LANG_PATH.tr)}): ${getT("tr").meta.ogDescription}`)
  lines.push(`- [Home (EN)](${absoluteUrl(LANG_PATH.en)}): ${getT("en").meta.ogDescription}`)
  lines.push(`- [Hizmetler](${absoluteUrl(SERVICES_BASE.tr)}) / [Services](${absoluteUrl(SERVICES_BASE.en)})`)
  lines.push("", "## Hizmet rehberi / Service guides", "")
  for (const s of SERVICE_PAGES) {
    lines.push(`- [${s.content.tr.title}](${absoluteUrl(servicePath("tr", s.slug.tr))}): ${s.content.tr.summary}`)
    lines.push(`- [${s.content.en.title}](${absoluteUrl(servicePath("en", s.slug.en))}): ${s.content.en.summary}`)
  }
  return [...lines, ""]
}

export function llmsTxt() {
  return [...header(), ...pageLinks(), `Tam içerik / Full content: ${absoluteUrl("/llms-full.txt")}`, ""].join("\n")
}

export function llmsFullTxt() {
  const out = [...header()]
  for (const lang of ["tr", "en"] as const) {
    const t = getT(lang)
    out.push(`## ${lang === "tr" ? "Hizmet rehberi (Türkçe)" : "Service guides (English)"}`, "")
    for (const s of SERVICE_PAGES) {
      const c = s.content[lang]
      out.push(`### ${c.title}`, "", `URL: ${absoluteUrl(servicePath(lang, s.slug[lang]))}`, "", c.lead, "")
      for (const section of c.sections) {
        out.push(`#### ${section.heading}`, "")
        section.paragraphs?.forEach((p) => out.push(p, ""))
        section.list?.forEach((item, i) => out.push(`${i + 1}. ${item}`))
        if (section.list) out.push("")
      }
      out.push(`#### ${t.servicePages.benefitsTitle}`, "", ...c.benefits.map((b) => `- ${b}`), "")
      out.push(`#### ${t.servicePages.whenTitle}`, "", ...c.whenNeeded.map((w) => `- ${w}`), "")
      out.push(`#### ${t.servicePages.faqTitle}`, "")
      c.faq.forEach((q) => out.push(`**${q.question}**`, "", q.answer, ""))
    }
    out.push(`## ${t.faq.title}`, "")
    t.faq.items.forEach((q) => out.push(`**${q.question}**`, "", q.answer, ""))
  }
  return out.join("\n")
}
