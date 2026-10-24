import image from "@/public/gallery/cati/1.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const metalCati: ServicePage = {
  ...navItem("metal-cati"),
  image,
  imageAlt: {
    tr: "Kocaeli'de tamamlanan kırmızı trapez sac metal çatı uygulaması",
    en: "Red trapezoidal metal roof completed in Kocaeli",
  },
  related: ["kiremit-cati", "isi-yalitimi", "eksiz-oluk"],
  content: {
    tr: {
      title: "Metal Çatı Nedir? Trapez Sac ve Sandviç Panel Çatı",
      metaTitle: "Metal Çatı Nedir? Trapez Sac ve Sandviç Panel | Kaplan İnşaat",
      metaDescription:
        "Metal çatı nedir, trapez sac ile sandviç panel arasındaki farklar, avantajları ve uygulama aşamaları. Kocaeli genelinde ücretsiz keşif ile metal çatı uygulaması.",
      summary: "Trapez sac ve sandviç panel ile hafif, hızlı monte edilen ve uzun ömürlü çatı çözümü.",
      lead:
        "Metal çatı; galvaniz ya da boyalı çelik, alüminyum gibi metal levhalarla oluşturulan, hafif ve dayanıklı bir çatı kaplama sistemidir. Konutlardan sanayi yapılarına kadar geniş bir kullanım alanı vardır.",
      sections: [
        {
          heading: "Metal çatı nedir?",
          paragraphs: [
            "Metal çatı, ahşap ya da çelik çatı iskeleti üzerine vidalanan profilli metal levhalardan oluşur. Levhalar genellikle galvaniz kaplı ve fırın boyalı çelikten üretilir; bu sayede paslanmaya karşı korunur ve farklı renk seçenekleri sunar.",
            "Kiremide göre çok daha hafif olduğu için taşıyıcı sisteme binen yükü azaltır. Bu özellik, özellikle eski binaların çatı yenilemelerinde ve geniş açıklıklı yapılarda önemli bir avantaj sağlar.",
          ],
        },
        {
          heading: "Trapez sac ile sandviç panel arasındaki fark",
          paragraphs: [
            "Trapez sac, tek kat profilli metal levhadır. Ekonomiktir, hızlı monte edilir ve depo, sundurma, ek bina gibi yapılarda sıklıkla tercih edilir.",
            "Sandviç panel ise iki metal levha arasına poliüretan veya taş yünü yalıtım dolgusu yerleştirilerek üretilir. Tek parçada hem kaplama hem ısı yalıtımı sağladığı için konutlarda ve iç mekânı ısıtılan yapılarda daha uygun bir çözümdür.",
          ],
        },
        {
          heading: "Uygulama nasıl yapılır?",
          list: [
            "Yerinde keşif ile çatı eğimi, taşıyıcı sistemin durumu ve ölçüler belirlenir",
            "Gerekiyorsa mevcut kaplama sökülür, çürümüş ahşap aksam yenilenir",
            "Su yalıtım örtüsü serilir ve aşıklar hazırlanır",
            "Levhalar uygun bindirme payı ve contalı vidalarla sabitlenir",
            "Mahya, dere, baca ve kenar bitişlerinde tamamlayıcı parçalar monte edilir",
            "Son kontrol yapılır ve çalışma alanı temiz şekilde teslim edilir",
          ],
        },
      ],
      benefits: [
        "Hafif yapısıyla taşıyıcı sisteme az yük bindirir",
        "Hızlı montaj; çoğu konut çatısı birkaç iş gününde tamamlanır",
        "Doğru uygulamada 40–50 yıla varan kullanım ömrü",
        "Geniş renk ve profil seçeneği",
        "Sandviç panel ile kaplama ve ısı yalıtımı tek adımda",
      ],
      whenNeeded: [
        "Kiremit çatınız ağır geliyor, taşıyıcı sistem zorlanıyor",
        "Depo, sundurma, fabrika veya ek bina çatısı yaptıracaksınız",
        "Hızlı ve ekonomik bir çatı yenilemesi istiyorsunuz",
        "Mevcut metal çatıda paslanma, vida gevşemesi veya sızıntı var",
      ],
      faq: [
        {
          question: "Metal çatı yağmurda ses yapar mı?",
          answer:
            "Tek kat trapez sacta yağmur sesi duyulabilir. Bu nedenle konutlarda genellikle yalıtım dolgulu sandviç panel öneriyoruz; dolgu malzemesi hem ısıyı hem de sesi büyük ölçüde keser.",
        },
        {
          question: "Metal çatı paslanır mı?",
          answer:
            "Galvaniz ve fırın boyalı levhalar paslanmaya karşı korumalıdır. Pas genellikle kesim kenarlarında, çizilen yüzeylerde veya uygun olmayan vidalarda başlar. Bu yüzden kesim ve montajda doğru ekipman ve contalı vida kullanıyoruz.",
        },
        {
          question: "Kiremit çatıyı metal çatıya dönüştürmek mümkün mü?",
          answer:
            "Evet. Mevcut kiremitler sökülür, taşıyıcı sistem kontrol edilip gerekirse güçlendirilir ve metal kaplamaya uygun aşık düzeni kurulur. Bu dönüşümün binanız için uygun olup olmadığını keşif sırasında birlikte değerlendiriyoruz.",
        },
      ],
    },
    en: {
      title: "What Is a Metal Roof? Trapezoidal Sheet and Sandwich Panel Roofing",
      metaTitle: "What Is a Metal Roof? Trapezoidal Sheet & Sandwich Panel | Kaplan İnşaat",
      metaDescription:
        "What a metal roof is, the difference between trapezoidal sheet and sandwich panel, benefits and installation steps. Metal roofing across Kocaeli with a free inspection.",
      summary: "A light, fast-to-install and long-lasting roof with trapezoidal sheets or sandwich panels.",
      lead:
        "A metal roof is a light and durable roof covering made of galvanised or coated steel or aluminium sheets. It is used on everything from homes to industrial buildings.",
      sections: [
        {
          heading: "What is a metal roof?",
          paragraphs: [
            "A metal roof consists of profiled metal sheets screwed onto a timber or steel roof frame. The sheets are usually made of galvanised, factory-painted steel, which protects them against rust and offers a range of colours.",
            "Because it is much lighter than tile, it reduces the load on the structure. This is a major advantage when renewing the roofs of older buildings and on wide-span structures.",
          ],
        },
        {
          heading: "Trapezoidal sheet vs. sandwich panel",
          paragraphs: [
            "A trapezoidal sheet is a single-layer profiled metal sheet. It is economical, quick to install and commonly used on warehouses, canopies and outbuildings.",
            "A sandwich panel has a polyurethane or stone wool insulation core between two metal sheets. It provides both covering and thermal insulation in one product, making it the better choice for homes and heated buildings.",
          ],
        },
        {
          heading: "How is it installed?",
          list: [
            "An on-site inspection determines the roof pitch, the condition of the structure and the measurements",
            "If needed, the existing covering is removed and rotten timber is replaced",
            "A waterproofing underlay is laid and purlins are prepared",
            "Sheets are fixed with the correct overlap using sealed screws",
            "Ridge, valley, chimney and edge flashings are installed",
            "A final check is carried out and the site is handed over clean",
          ],
        },
      ],
      benefits: [
        "Light weight puts little load on the structure",
        "Fast installation; most residential roofs take a few working days",
        "A service life of up to 40–50 years when installed correctly",
        "Wide choice of colours and profiles",
        "Covering and thermal insulation in one step with sandwich panels",
      ],
      whenNeeded: [
        "Your tile roof is too heavy and the structure is under strain",
        "You are building a warehouse, canopy, factory or outbuilding roof",
        "You want a fast and economical roof renewal",
        "Your existing metal roof shows rust, loose screws or leaks",
      ],
      faq: [
        {
          question: "Is a metal roof noisy in the rain?",
          answer:
            "Rain can be heard on a single-layer trapezoidal sheet. For homes we usually recommend insulated sandwich panels; the core material greatly reduces both heat transfer and noise.",
        },
        {
          question: "Does a metal roof rust?",
          answer:
            "Galvanised, factory-painted sheets are protected against rust. Rust usually starts at cut edges, scratched surfaces or unsuitable screws, so we use the right cutting tools and sealed screws during installation.",
        },
        {
          question: "Can a tile roof be converted to a metal roof?",
          answer:
            "Yes. The existing tiles are removed, the structure is checked and reinforced if necessary, and a purlin layout suitable for metal sheets is installed. We assess whether this conversion suits your building during the inspection.",
        },
      ],
    },
  },
}
