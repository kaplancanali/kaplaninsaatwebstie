import image from "@/public/gallery/izolasyon/3.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const membranCati: ServicePage = {
  ...navItem("membran-cati"),
  image,
  imageAlt: {
    tr: "Çatıda su yalıtım membranı üzerine çıtalama ve kiremit uygulaması",
    en: "Battens and tiles being installed over a roof waterproofing membrane",
  },
  related: ["teras-su-yalitimi", "isi-yalitimi", "kiremit-cati"],
  content: {
    tr: {
      title: "Membran Çatı Nedir? Bitümlü Membran ile Su Yalıtımı",
      metaTitle: "Membran Çatı Nedir? Bitümlü Membran Uygulaması | Kaplan İnşaat",
      metaDescription:
        "Membran çatı nedir, bitümlü membran nasıl uygulanır, hangi çatılarda kullanılır? Düz çatı ve teraslarda membran su yalıtımı için Kocaeli'de ücretsiz keşif.",
      summary: "Düz çatı, teras ve eğimli çatı altlarında bitümlü membran ile kalıcı su yalıtımı.",
      lead:
        "Membran, suyun yapıya geçmesini engelleyen esnek bir yalıtım örtüsüdür. Özellikle düz çatılarda, teraslarda ve beton yüzeylerde çatının asıl koruma katmanını oluşturur.",
      sections: [
        {
          heading: "Membran nedir?",
          paragraphs: [
            "Bitümlü membran; polyester keçe veya cam tülü taşıyıcının iki yüzünün polimer katkılı bitümle kaplanmasıyla üretilen, rulo hâlinde gelen su yalıtım malzemesidir. Polimer katkı, malzemenin soğukta çatlamamasını ve sıcakta akmamasını sağlar.",
            "\"Membran çatı\" ifadesi genellikle üst yüzeyi doğrudan membranla kaplanan düz çatı ve teraslar için kullanılır. Eğimli çatılarda ise kiremit veya metal kaplamanın altına ikinci bir koruma katmanı olarak çatı altı membranı serilir.",
          ],
        },
        {
          heading: "Membran nasıl uygulanır?",
          paragraphs: [
            "Bitümlü membran, alt yüzeyi şaloma (gaz alevi) ile ısıtılarak zemine yapıştırılır. Rulolar en az 10 cm bindirmeli serilir ve bindirmeler de ısıyla kaynatılarak tek parça bir yalıtım yüzeyi elde edilir.",
            "Başarılı bir uygulamanın anahtarı yüzey hazırlığıdır: Zemin temiz, kuru ve düzgün olmalı, üzerine bitümlü astar sürülmelidir. Parapet, baca ve gider çevresi gibi detay noktaları ek katmanlarla güçlendirilir.",
          ],
        },
        {
          heading: "Kaç kat membran gerekir?",
          paragraphs: [
            "Düz çatı ve teraslarda genellikle çift kat uygulama öneriyoruz: Alt katta düz yüzeyli membran, üst katta UV ışınlarına karşı korumalı arduvazlı (mineral kaplı) membran. Üzerinde yürünecek teraslarda membranın üstü şap, seramik veya koruma levhasıyla kapatılır.",
          ],
        },
        {
          heading: "Uygulama aşamaları",
          list: [
            "Zemin kontrolü, gerekirse eğim ve onarım şapı",
            "Yüzey temizliği ve bitümlü astar",
            "Köşe, parapet ve gider gibi detay noktalarının güçlendirilmesi",
            "Birinci kat membranın şaloma ile yapıştırılması",
            "İkinci kat arduvazlı membranın şaşırtmalı serilmesi",
            "Su göllendirme testiyle kontrol",
          ],
        },
      ],
      benefits: [
        "Ek yeri olmayan, sürekli bir su yalıtım yüzeyi",
        "Soğukta çatlamayan, sıcakta akmayan esnek yapı",
        "Düz çatı, teras, balkon ve temel gibi pek çok alanda kullanım",
        "Arduvazlı yüzey ile UV dayanımı",
        "Doğru uygulamayla uzun yıllar koruma",
      ],
      whenNeeded: [
        "Düz çatı veya terasta su birikiyor, alt kata sızıyor",
        "Eski membranda kabarma, çatlak veya bindirme açılması var",
        "Yeni bir teras ya da düz çatı yaptırıyorsunuz",
        "Kiremit veya metal çatı yenilemesinde çatı altı yalıtımı yapılacak",
      ],
      faq: [
        {
          question: "Membran ne kadar dayanır?",
          answer:
            "Kullanım ömrü; membranın kalitesine, kat sayısına, uygulama işçiliğine ve üzerinin korunup korunmadığına göre değişir. Doğru uygulanmış, çift kat ve üzeri korunan bir sistem uzun yıllar sorunsuz hizmet verir; düzenli kontrol ömrü uzatır.",
        },
        {
          question: "Membran yağmurlu havada uygulanabilir mi?",
          answer:
            "Hayır. Membranın zemine tam yapışması için yüzeyin kuru olması gerekir; bu nedenle kuru ve 5°C üzeri havalarda uygulama yapıyoruz. Acil durumlarda geçici önlemler alınabilir.",
        },
        {
          question: "Eski membranın üzerine yeni membran serilebilir mi?",
          answer:
            "Eski membran zemine sağlam yapışıksa ve büyük kabarmalar yoksa, uygun hazırlıkla üzerine yeni kat uygulanabilir. Kabarmış, su almış ya da çok katmanlı eski yalıtımların sökülmesi ise daha sağlıklıdır. Bunu keşif sırasında yerinde tespit ediyoruz.",
        },
      ],
    },
    en: {
      title: "What Is a Membrane Roof? Waterproofing with Bituminous Membrane",
      metaTitle: "What Is a Membrane Roof? Bituminous Membrane | Kaplan İnşaat",
      metaDescription:
        "What a membrane roof is, how bituminous membrane is applied and where it is used. Membrane waterproofing for flat roofs and terraces in Kocaeli with a free inspection.",
      summary: "Lasting waterproofing with bituminous membrane on flat roofs, terraces and under pitched roofs.",
      lead:
        "A membrane is a flexible waterproofing sheet that stops water from entering the building. On flat roofs, terraces and concrete surfaces it is the roof's main protective layer.",
      sections: [
        {
          heading: "What is a membrane?",
          paragraphs: [
            "Bituminous membrane is a waterproofing material supplied in rolls, made by coating both sides of a polyester felt or glass fibre carrier with polymer-modified bitumen. The polymer keeps it from cracking in the cold and flowing in the heat.",
            "\"Membrane roof\" usually refers to flat roofs and terraces whose top surface is covered directly with membrane. On pitched roofs, an underlay membrane is laid beneath the tiles or metal sheets as a second line of protection.",
          ],
        },
        {
          heading: "How is membrane applied?",
          paragraphs: [
            "Bituminous membrane is torch-applied: its underside is heated with a gas flame and bonded to the surface. Rolls are laid with overlaps of at least 10 cm, and the overlaps are heat-welded to create one continuous waterproof surface.",
            "Surface preparation is the key to a successful job: the substrate must be clean, dry and even, and primed with bitumen primer. Detail points such as parapets, chimneys and drains are reinforced with extra layers.",
          ],
        },
        {
          heading: "How many layers are needed?",
          paragraphs: [
            "On flat roofs and terraces we usually recommend two layers: a smooth membrane below and a UV-protected, mineral-surfaced membrane on top. On terraces that will be walked on, the membrane is covered with screed, tiles or protection boards.",
          ],
        },
        {
          heading: "Application steps",
          list: [
            "Checking the substrate and adding a fall or repair screed if needed",
            "Cleaning the surface and applying bitumen primer",
            "Reinforcing detail points such as corners, parapets and drains",
            "Torch-bonding the first layer",
            "Laying the mineral-surfaced second layer with staggered joints",
            "Checking with a flood test",
          ],
        },
      ],
      benefits: [
        "A continuous waterproof surface with no joints",
        "Flexible — does not crack in cold or flow in heat",
        "Suitable for flat roofs, terraces, balconies and foundations",
        "UV resistance with a mineral-surfaced top layer",
        "Years of protection when applied correctly",
      ],
      whenNeeded: [
        "Water pools on your flat roof or terrace and leaks below",
        "The old membrane has blisters, cracks or open overlaps",
        "You are building a new terrace or flat roof",
        "An underlay is needed as part of a tile or metal roof renewal",
      ],
      faq: [
        {
          question: "How long does a membrane last?",
          answer:
            "It depends on the membrane quality, the number of layers, the workmanship and whether it is protected on top. A correctly applied two-layer, protected system gives many years of trouble-free service, and regular checks extend its life.",
        },
        {
          question: "Can membrane be applied in the rain?",
          answer:
            "No. The surface must be dry for the membrane to bond fully, so we apply it in dry weather above 5°C. Temporary measures can be taken in emergencies.",
        },
        {
          question: "Can a new membrane be laid over the old one?",
          answer:
            "If the old membrane is firmly bonded and has no large blisters, a new layer can be applied over it with proper preparation. Blistered, water-logged or multi-layered old insulation is better removed. We determine this on-site during the inspection.",
        },
      ],
    },
  },
}
