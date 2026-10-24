/** Language constants, kept apart from the (large) translation strings so client code can import them cheaply. */
export type Lang = "tr" | "en"

export const LANGS: Lang[] = ["tr", "en"]

/** Route path for each language — TR is served at the root. */
export const LANG_PATH: Record<Lang, string> = { tr: "/", en: "/en" }
