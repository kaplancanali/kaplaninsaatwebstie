import Script from "next/script"
import { AnalyticsEvents } from "@/components/analytics-events"
import { SITE } from "@/lib/site"

/** Google tag (gtag.js) for GA4, loaded after the page becomes interactive. */
export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.gaId}');`}
      </Script>
      <AnalyticsEvents />
    </>
  )
}
