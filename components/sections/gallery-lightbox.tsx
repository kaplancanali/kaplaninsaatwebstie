"use client"

import Lightbox from "yet-another-react-lightbox"
import Counter from "yet-another-react-lightbox/plugins/counter"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/counter.css"
import type { Lang } from "@/lib/translations"

type Slide = { src: string; width: number; height: number; alt: string }

const LABELS = {
  tr: { Previous: "Önceki fotoğraf", Next: "Sonraki fotoğraf", Close: "Kapat", Lightbox: "Fotoğraf görüntüleyici", Carousel: "Fotoğraflar" },
  en: { Previous: "Previous photo", Next: "Next photo", Close: "Close", Lightbox: "Photo viewer", Carousel: "Photos" },
}

/** Keyboard (arrows / Esc) and swipe support come built in. Loaded on demand. */
export default function GalleryLightbox({
  lang,
  slides,
  index,
  onClose,
}: {
  lang: Lang
  slides: Slide[]
  index: number
  onClose: () => void
}) {
  return (
    <Lightbox
      open
      index={index}
      close={onClose}
      slides={slides}
      plugins={[Counter]}
      labels={LABELS[lang]}
      controller={{ closeOnBackdropClick: true }}
      styles={{ container: { backgroundColor: "rgba(11, 17, 32, 0.96)" } }}
    />
  )
}
