/**
 * GA4 custom events for the site's conversions. Mark these as key events in
 * Google Analytics (Admin → Events) to report them as conversions.
 */
export type LeadEvent = "contact_call" | "contact_whatsapp" | "generate_lead"

type Gtag = (command: "event", name: string, params?: Record<string, string | number>) => void

export function track(name: LeadEvent, params: Record<string, string | number> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  gtag?.("event", name, params)
}
