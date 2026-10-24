/**
 * Cookie consent (KVKK / GDPR). The visitor's choice is kept in localStorage;
 * Google tags read it through Consent Mode v2 (see components/google-analytics.tsx).
 */
export type ConsentChoice = "granted" | "denied"

export const CONSENT_KEY = "mk-cookie-consent"
/** Fired on window when the choice changes or the settings should reopen. */
export const CONSENT_EVENT = "mk:consent"
export const OPEN_CONSENT_EVENT = "mk:open-consent"

type Gtag = (command: "consent", action: "update", params: Record<string, string>) => void

export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === "granted" || v === "denied" ? v : null
  } catch {
    return null
  }
}

/** Remove Google Analytics cookies left from an earlier "accept" (GA does not delete them itself). */
function clearAnalyticsCookies() {
  const host = location.hostname
  const domains = ["", host, `.${host.replace(/^www\./, "")}`]
  for (const name of document.cookie.split(";").map((c) => c.split("=")[0].trim())) {
    if (!name.startsWith("_ga")) continue
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`
    }
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Storage blocked (private mode): the choice still applies for this page view.
  }
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  gtag?.("consent", "update", { analytics_storage: choice })
  if (choice === "denied") clearAnalyticsCookies()
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
