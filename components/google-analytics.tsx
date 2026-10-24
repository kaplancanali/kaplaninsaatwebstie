import Script from "next/script"
import { AnalyticsEvents } from "@/components/analytics-events"
import { CONSENT_KEY } from "@/lib/consent"
import { SITE } from "@/lib/site"

/**
 * Google tag (gtag.js) for GA4 with Consent Mode v2.
 *
 * - Everything starts denied; analytics_storage is granted only after the
 *   visitor accepts in the cookie banner (stored choice is re-applied here).
 *   Ad storage stays denied — the site runs no ads.
 * - The gtag() queue is defined inline right away so no page view or event is
 *   lost, but the ~180 KB library itself is only fetched on the visitor's first
 *   interaction or after a few seconds, so it never competes with first paint.
 */
export function GoogleAnalytics() {
  const src = `https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`
  return (
    <>
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  analytics_storage: 'denied', wait_for_update: 500
});
try { if (localStorage.getItem('${CONSENT_KEY}') === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' }); } catch (e) {}
gtag('js', new Date());
gtag('config', '${SITE.gaId}');
(function(){
  var done = false, events = ['pointerdown','keydown','scroll','touchstart'];
  function load(){
    if (done) return; done = true;
    events.forEach(function(e){ removeEventListener(e, load); });
    var s = document.createElement('script'); s.async = true; s.src = '${src}';
    document.head.appendChild(s);
  }
  events.forEach(function(e){ addEventListener(e, load, { once: true, passive: true }); });
  setTimeout(load, 3500);
})();`}
      </Script>
      <AnalyticsEvents />
    </>
  )
}
