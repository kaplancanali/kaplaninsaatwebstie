import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/structured-data"

/**
 * AI search / answer engines are named explicitly so the site stays quotable
 * in ChatGPT, Claude, Perplexity, Gemini and Copilot answers even if a host
 * or CDN applies stricter defaults to unknown bots.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  }
}
