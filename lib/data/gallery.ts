// Gallery photos grouped by service category. Order = display order.
import type { StaticImageData } from "next/image"
import type { ServiceCategory } from "@/lib/data/services/types"
import type { Lang } from "@/lib/translations"
import catiKiremitCatiMembranUzeri from "@/public/gallery/cati/kiremit-cati-membran-uzeri.jpg"
import catiMetalCatiDenizManzarali from "@/public/gallery/cati/metal-cati-deniz-manzarali.jpg"
import catiKiremitCatiMahya from "@/public/gallery/cati/kiremit-cati-mahya.jpg"
import catiMetalCatiTrapez from "@/public/gallery/cati/metal-cati-trapez.jpg"
import catiKiremitCatiYenileme from "@/public/gallery/cati/kiremit-cati-yenileme.jpg"
import catiMetalCatiKirma from "@/public/gallery/cati/metal-cati-kirma.jpg"
import catiKiremitCatiApartman from "@/public/gallery/cati/kiremit-cati-apartman.jpg"
import catiMetalCatiCatiPenceresi from "@/public/gallery/cati/metal-cati-cati-penceresi.jpg"
import catiAhsapCatiKarkasi from "@/public/gallery/cati/ahsap-cati-karkasi.jpg"
import catiMetalCatiAntrasit from "@/public/gallery/cati/metal-cati-antrasit.jpg"
import catiKiremitCatiHavalandirma from "@/public/gallery/cati/kiremit-cati-havalandirma.jpg"
import catiMetalCatiMustakil from "@/public/gallery/cati/metal-cati-mustakil.jpg"
import catiKiremitCatiCitalama from "@/public/gallery/cati/kiremit-cati-citalama.jpg"
import catiMetalCatiSahil from "@/public/gallery/cati/metal-cati-sahil.jpg"
import catiKiremitCatiKarkas from "@/public/gallery/cati/kiremit-cati-karkas.jpg"
import olukEksizOlukAntrasit from "@/public/gallery/oluk/eksiz-oluk-antrasit.jpg"
import olukEksizOlukDekoratifSacak from "@/public/gallery/oluk/eksiz-oluk-dekoratif-sacak.jpg"
import olukEksizOlukMontaj from "@/public/gallery/oluk/eksiz-oluk-montaj.jpg"
import olukEksizOlukMetalCati from "@/public/gallery/oluk/eksiz-oluk-metal-cati.jpg"
import olukEksizOlukDetay from "@/public/gallery/oluk/eksiz-oluk-detay.jpg"
import olukEksizOlukTeras from "@/public/gallery/oluk/eksiz-oluk-teras.jpg"
import olukEksizOlukSacak from "@/public/gallery/oluk/eksiz-oluk-sacak.jpg"
import olukOlukKirmizi from "@/public/gallery/oluk/oluk-kirmizi.jpg"
import izolasyonArduvazliMembranKirmizi from "@/public/gallery/izolasyon/arduvazli-membran-kirmizi.jpg"
import izolasyonDuzCatiMembranAntrasit from "@/public/gallery/izolasyon/duz-cati-membran-antrasit.jpg"
import izolasyonMembranUygulamasi from "@/public/gallery/izolasyon/membran-uygulamasi.jpg"
import izolasyonArduvazliMembranYesil from "@/public/gallery/izolasyon/arduvazli-membran-yesil.jpg"
import izolasyonTerasMembran from "@/public/gallery/izolasyon/teras-membran.jpg"
import izolasyonCatiAltiMembran from "@/public/gallery/izolasyon/cati-alti-membran.jpg"
import izolasyonBacaMembranDetayi from "@/public/gallery/izolasyon/baca-membran-detayi.jpg"
import izolasyonBacaIzolasyonMembran from "@/public/gallery/izolasyon/baca-izolasyon-membran.jpg"
import izolasyonDuzCatiMembranOluk from "@/public/gallery/izolasyon/duz-cati-membran-oluk.jpg"

export type GalleryImage = {
  category: ServiceCategory
  image: StaticImageData
  alt: Record<Lang, string>
}

export const GALLERY: GalleryImage[] = [
  { category: "cati", image: catiKiremitCatiMembranUzeri, alt: { tr: "Su yalıtım membranı üzerine kiremit döşenen apartman çatısı", en: "Apartment roof with tiles being laid over a waterproofing membrane" } },
  { category: "cati", image: catiMetalCatiDenizManzarali, alt: { tr: "Körfez manzaralı konutta kırmızı metal çatı", en: "Red metal roof on a home overlooking the gulf" } },
  { category: "cati", image: catiKiremitCatiMahya, alt: { tr: "Mahya kiremitleriyle tamamlanmış kiremit çatı", en: "Tile roof finished with ridge tiles" } },
  { category: "cati", image: catiMetalCatiTrapez, alt: { tr: "Kırmızı trapez sac metal çatı ve ışıklık", en: "Red trapezoidal metal roof with a skylight panel" } },
  { category: "cati", image: catiKiremitCatiYenileme, alt: { tr: "Çıtalar üzerine kiremit dizilen çatı yenilemesi", en: "Roof renewal with tiles being laid on battens" } },
  { category: "cati", image: catiMetalCatiKirma, alt: { tr: "Kırma çatıda kırmızı metal kaplama", en: "Red metal covering on a hipped roof" } },
  { category: "cati", image: catiKiremitCatiApartman, alt: { tr: "Bacaları yenilenmiş apartman kiremit çatısı", en: "Apartment tile roof with renewed chimneys" } },
  { category: "cati", image: catiMetalCatiCatiPenceresi, alt: { tr: "Çatı penceresi detaylı kırmızı metal çatı", en: "Red metal roof with a roof window detail" } },
  { category: "cati", image: catiAhsapCatiKarkasi, alt: { tr: "Yeni kurulan ahşap çatı karkası", en: "Newly built timber roof frame" } },
  { category: "cati", image: catiMetalCatiAntrasit, alt: { tr: "Antrasit renkli metal çatı kaplaması", en: "Anthracite metal roof covering" } },
  { category: "cati", image: catiKiremitCatiHavalandirma, alt: { tr: "Havalandırma kiremitli kiremit çatı detayı", en: "Tile roof detail with a ventilation tile" } },
  { category: "cati", image: catiMetalCatiMustakil, alt: { tr: "Müstakil evde kırmızı metal çatı", en: "Red metal roof on a detached house" } },
  { category: "cati", image: catiKiremitCatiCitalama, alt: { tr: "Membran üzerine çıtalama ve kiremit dizimi", en: "Battens and tiles laid over a membrane" } },
  { category: "cati", image: catiMetalCatiSahil, alt: { tr: "Sahil yolundaki binada kırmızı metal çatı", en: "Red metal roof on a coastal-road building" } },
  { category: "cati", image: catiKiremitCatiKarkas, alt: { tr: "Kiremit dizimi öncesi çatı karkası", en: "Roof frame before tile laying" } },
  { category: "oluk", image: olukEksizOlukAntrasit, alt: { tr: "Bina saçağında antrasit eksiz oluk", en: "Anthracite seamless gutter along a building's eaves" } },
  { category: "oluk", image: olukEksizOlukDekoratifSacak, alt: { tr: "Dekoratif saçak altına monte edilmiş eksiz oluk", en: "Seamless gutter mounted above a decorative eave" } },
  { category: "oluk", image: olukEksizOlukMontaj, alt: { tr: "Çatı saçağına eksiz oluk montajı", en: "Seamless gutter being installed on roof eaves" } },
  { category: "oluk", image: olukEksizOlukMetalCati, alt: { tr: "Metal çatı kenarında antrasit eksiz oluk", en: "Anthracite seamless gutter at a metal roof edge" } },
  { category: "oluk", image: olukEksizOlukDetay, alt: { tr: "Eksiz oluk ve cephe birleşim detayı", en: "Seamless gutter and façade junction detail" } },
  { category: "oluk", image: olukEksizOlukTeras, alt: { tr: "Teras kenarında eksiz oluk uygulaması", en: "Seamless gutter along a terrace edge" } },
  { category: "oluk", image: olukEksizOlukSacak, alt: { tr: "Saçak boyunca uzanan tek parça oluk", en: "One-piece gutter running along the eaves" } },
  { category: "oluk", image: olukOlukKirmizi, alt: { tr: "Tuğla duvar üzerinde kırmızı oluk profili", en: "Red gutter profile on a brick wall" } },
  { category: "izolasyon", image: izolasyonArduvazliMembranKirmizi, alt: { tr: "Düz çatıda kırmızı arduvazlı membran", en: "Red mineral-surfaced membrane on a flat roof" } },
  { category: "izolasyon", image: izolasyonDuzCatiMembranAntrasit, alt: { tr: "Antrasit membranla yalıtılmış düz çatı", en: "Flat roof insulated with anthracite membrane" } },
  { category: "izolasyon", image: izolasyonMembranUygulamasi, alt: { tr: "Su yalıtım örtüsü üzerine membran serimi", en: "Membrane being laid over a waterproofing underlay" } },
  { category: "izolasyon", image: izolasyonArduvazliMembranYesil, alt: { tr: "Yeşil arduvazlı membran kaplı çatı", en: "Roof covered with green mineral-surfaced membrane" } },
  { category: "izolasyon", image: izolasyonTerasMembran, alt: { tr: "Teras çatıda membran su yalıtımı", en: "Membrane waterproofing on a terrace roof" } },
  { category: "izolasyon", image: izolasyonCatiAltiMembran, alt: { tr: "Çatı altı membranı ve baca etek yalıtımı", en: "Roof underlay membrane with chimney flashing" } },
  { category: "izolasyon", image: izolasyonBacaMembranDetayi, alt: { tr: "Baca çevresinde membran ve metal etek detayı", en: "Membrane and metal flashing around a chimney" } },
  { category: "izolasyon", image: izolasyonBacaIzolasyonMembran, alt: { tr: "Baca dibinde bitümlü membran uygulaması", en: "Bituminous membrane applied at a chimney base" } },
  { category: "izolasyon", image: izolasyonDuzCatiMembranOluk, alt: { tr: "Membranlı düz çatı ve kenar oluğu", en: "Membrane flat roof with an edge gutter" } },
]
