import image from "@/public/gallery/izolasyon/duz-cati-membran-antrasit.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const terasSuYalitimi: ServicePage = {
  ...navItem("teras-su-yalitimi"),
  image,
  imageAlt: {
    tr: "Bitümlü membranla su yalıtımı yapılmış antrasit düz çatı",
    en: "Anthracite flat roof waterproofed with bituminous membrane",
  },
  related: ["membran-cati", "isi-yalitimi", "eksiz-oluk"],
  content: {
    tr: {
      title: "Teras ve Düz Çatı Su Yalıtımı",
      metaTitle: "Teras ve Düz Çatı Su Yalıtımı Nasıl Yapılır? | Kaplan İnşaat",
      metaDescription:
        "Teras su yalıtımı nasıl yapılır? Düz çatı, teras ve balkonlarda sızıntıyı kalıcı olarak çözen membran ve likit yalıtım uygulamaları. Kocaeli'de ücretsiz keşif.",
      summary: "Su biriktiren ve alt kata sızdıran teras, düz çatı ve balkonlar için kalıcı su yalıtımı.",
      lead:
        "Düz çatı ve teraslar suyu eğimli çatılara göre daha yavaş uzaklaştırır; bu nedenle yalıtımdaki en küçük kusur alt kata sızıntı olarak geri döner. Kalıcı çözüm, doğru eğimle doğru yalıtım sisteminin birlikte uygulanmasıdır.",
      sections: [
        {
          heading: "Teraslar neden su sızdırır?",
          list: [
            "Yetersiz eğim nedeniyle yüzeyde su birikmesi (göllenme)",
            "Ömrünü tamamlamış, çatlamış veya kabarmış yalıtım",
            "Parapet, kapı eşiği ve gider çevresinde yalıtım eksikliği",
            "Tıkanmış süzgeç ve giderler",
            "Seramik derzlerinden geçen suyun alt katmanlara ulaşması",
          ],
        },
        {
          heading: "Hangi yalıtım yöntemleri uygulanır?",
          paragraphs: [
            "Kullanım şekline göre farklı sistemler uygulanır. Üzerinde yürünmeyen düz çatılarda üst katı arduvazlı, çift kat bitümlü membran tercih edilir. Kullanılan teraslarda ise membranın üzeri koruma şapı ve seramikle kapatılır.",
            "Seramiği sökmeden yenileme istenen ya da detayı çok olan yüzeylerde likit (sürme) poliüretan yalıtım uygulanabilir. Bu malzeme fırça veya rulo ile sürülür ve kuruduktan sonra derzsiz, esnek bir zar oluşturur.",
          ],
        },
        {
          heading: "Uygulama aşamaları",
          list: [
            "Sızıntı kaynağının ve mevcut katmanların tespiti",
            "Gerekirse eski kaplamanın sökülmesi ve eğim şapının düzeltilmesi",
            "Süzgeç ve giderlerin kontrolü ve yenilenmesi",
            "Detay noktalarının pah ve takviye bantlarıyla hazırlanması",
            "Membran veya likit yalıtımın uygulanması",
            "Su göllendirme testi ve koruma katmanının yapılması",
          ],
        },
      ],
      benefits: [
        "Alt kattaki sızıntı ve rutubetin kalıcı çözümü",
        "Doğru eğimle su birikmesinin önlenmesi",
        "Kullanım şekline uygun sistem seçimi",
        "Su göllendirme testiyle kontrollü teslim",
        "En az 2 yıl yazılı işçilik garantisi",
      ],
      whenNeeded: [
        "Terasın altındaki odada tavan lekesi veya damlama var",
        "Yağmurdan sonra terasta uzun süre su birikintisi kalıyor",
        "Teras seramiklerinde kabarma, derzlerde ayrılma görülüyor",
        "Eski yalıtımın üzerinden 15 yıldan fazla geçti",
      ],
      faq: [
        {
          question: "Seramiği sökmeden teras yalıtımı yapılabilir mi?",
          answer:
            "Bazı durumlarda evet. Seramik zemine sağlam yapışıksa ve sorun yüzeyden kaynaklanıyorsa, uygun astar üzerine şeffaf veya renkli likit yalıtım uygulanabilir. Sorun alt katmanlardaysa sökümlü uygulama gerekir.",
        },
        {
          question: "Su göllendirme testi nedir?",
          answer:
            "Yalıtım tamamlandıktan sonra giderler geçici olarak kapatılır ve yüzey bir süre suyla doldurulur. Alt katta herhangi bir ıslaklık görülmezse yalıtımın sağlıklı olduğu doğrulanır. Bu testi teslimden önce uyguluyoruz.",
        },
        {
          question: "Teras yalıtımı ne kadar sürer?",
          answer:
            "Ortalama bir konut terasında sökümsüz uygulamalar 1–2 iş günü sürer; söküm ve şap gerektiren işler kuruma süreleriyle birlikte daha uzun sürebilir. Net süreyi keşifte paylaşıyoruz.",
        },
      ],
    },
    en: {
      title: "Terrace and Flat Roof Waterproofing",
      metaTitle: "How Is Terrace and Flat Roof Waterproofing Done? | Kaplan İnşaat",
      metaDescription:
        "How terrace waterproofing is done. Membrane and liquid waterproofing that permanently fixes leaks on flat roofs, terraces and balconies. Free inspection in Kocaeli.",
      summary: "Lasting waterproofing for terraces, flat roofs and balconies that pool water or leak below.",
      lead:
        "Flat roofs and terraces shed water more slowly than pitched roofs, so even the smallest flaw in the waterproofing comes back as a leak below. The lasting fix is the right fall combined with the right waterproofing system.",
      sections: [
        {
          heading: "Why do terraces leak?",
          list: [
            "Water pooling on the surface because of insufficient fall",
            "Aged, cracked or blistered waterproofing",
            "Missing waterproofing at parapets, door thresholds and drains",
            "Blocked outlets and drains",
            "Water passing through tile joints into the layers below",
          ],
        },
        {
          heading: "Which waterproofing methods are used?",
          paragraphs: [
            "The system depends on how the surface is used. On flat roofs that are not walked on, two layers of bituminous membrane with a mineral-surfaced top layer are preferred. On terraces in use, the membrane is covered with a protective screed and tiles.",
            "Where the tiles should stay in place or the surface has many details, liquid polyurethane waterproofing can be applied. It is brushed or rolled on and cures into a seamless, flexible membrane.",
          ],
        },
        {
          heading: "Application steps",
          list: [
            "Finding the source of the leak and the existing layers",
            "Removing the old finish and correcting the fall screed if needed",
            "Checking and renewing outlets and drains",
            "Preparing detail points with fillets and reinforcement tape",
            "Applying membrane or liquid waterproofing",
            "Flood testing and adding the protection layer",
          ],
        },
      ],
      benefits: [
        "A lasting fix for leaks and damp below",
        "No pooling thanks to the correct fall",
        "A system chosen for how the surface is used",
        "Controlled handover with a flood test",
        "Minimum 2-year written workmanship warranty",
      ],
      whenNeeded: [
        "There are ceiling stains or drips in the room below the terrace",
        "Water stays on the terrace long after rain",
        "Terrace tiles are lifting or joints are separating",
        "The old waterproofing is more than 15 years old",
      ],
      faq: [
        {
          question: "Can a terrace be waterproofed without removing the tiles?",
          answer:
            "Sometimes. If the tiles are firmly bonded and the problem is at the surface, a clear or coloured liquid waterproofing can be applied over a suitable primer. If the problem lies in the lower layers, the tiles must come up.",
        },
        {
          question: "What is a flood test?",
          answer:
            "Once the waterproofing is finished, the drains are temporarily blocked and the surface is flooded for a period. If no damp appears below, the waterproofing is confirmed sound. We carry out this test before handover.",
        },
        {
          question: "How long does terrace waterproofing take?",
          answer:
            "On an average residential terrace, work without removal takes 1–2 working days; jobs needing removal and screed take longer because of curing times. We confirm the timeline during the inspection.",
        },
      ],
    },
  },
}
