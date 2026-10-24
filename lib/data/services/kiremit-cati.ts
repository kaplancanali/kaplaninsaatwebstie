import image from "@/public/gallery/cati/8.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const kiremitCati: ServicePage = {
  ...navItem("kiremit-cati"),
  image,
  imageAlt: {
    tr: "Mahya kiremitleriyle tamamlanmış kiremit çatı uygulaması",
    en: "Tile roof finished with ridge tiles",
  },
  related: ["cati-tamiri", "membran-cati", "metal-cati"],
  content: {
    tr: {
      title: "Kiremit Çatı Nedir? Kiremit Çatı Yapımı ve Aktarma",
      metaTitle: "Kiremit Çatı Nedir? Kiremit Çatı Yapımı ve Aktarma | Kaplan İnşaat",
      metaDescription:
        "Kiremit çatı nedir, kil ve beton kiremit farkları, kiremit çatı yapımı ve çatı aktarma aşamaları. Kocaeli'de ücretsiz keşif ile kiremit çatı uygulaması.",
      summary: "Geleneksel görünümlü, nefes alan ve iyi yalıtım sağlayan kiremit çatı yapımı ve aktarma.",
      lead:
        "Kiremit çatı, Türkiye'de konutlarda en yaygın kullanılan çatı kaplamasıdır. Doğru alt yapıyla uygulandığında estetik, dayanıklı ve uzun ömürlü bir çözüm sunar.",
      sections: [
        {
          heading: "Kiremit çatı nedir?",
          paragraphs: [
            "Kiremit çatı; ahşap çatı iskeleti üzerine su yalıtım örtüsü, çıta ve kiremitlerin bindirmeli olarak dizilmesiyle oluşturulan kaplama sistemidir. Kiremitler birbirine geçmeli tasarlanır; yağmur suyu bu bindirmeler sayesinde saçağa ve oluğa yönlendirilir.",
            "Kiremidin altındaki su yalıtım örtüsü, sistemin görünmeyen ama en kritik katmanıdır. Kırılan ya da kayan bir kiremitte suyun yapıya girmesini bu katman engeller.",
          ],
        },
        {
          heading: "Kil kiremit mi, beton kiremit mi?",
          paragraphs: [
            "Kil (toprak) kiremit pişirilmiş kilden üretilir; doğal rengi, nefes alan yapısı ve uzun ömrüyle en çok tercih edilen türdür. Beton kiremit daha ağırdır ancak darbelere dayanıklıdır ve farklı renk seçenekleri sunar.",
            "Hangi kiremidin uygun olduğu; çatı eğimine, taşıyıcı sistemin kapasitesine ve istenen görünüme göre belirlenir.",
          ],
        },
        {
          heading: "Çatı aktarma nedir?",
          paragraphs: [
            "Çatı aktarma; kiremitlerin sökülüp altındaki çıta, ahşap ve yalıtım örtüsünün kontrol edilmesi, gerekirse yenilenmesi ve ardından sağlam kiremitlerin yeniden dizilmesi işlemidir. Komple yenilemeye göre daha ekonomiktir; kiremitleri sağlam ama alt yapısı yıpranmış çatılar için idealdir.",
          ],
        },
        {
          heading: "Uygulama aşamaları",
          list: [
            "Keşif: kiremit, ahşap aksam ve yalıtım örtüsünün durumu incelenir",
            "Mevcut kiremitler sökülür, sağlam olanlar ayrılır",
            "Çürümüş ahşap ve çıtalar yenilenir",
            "Su yalıtım örtüsü bindirmeli olarak serilir",
            "Çıtalama yapılır ve kiremitler düzgün şekilde dizilir",
            "Mahya, baca ve dere birleşimleri tamamlanır",
          ],
        },
      ],
      benefits: [
        "Geleneksel ve estetik görünüm",
        "Nefes alan yapısıyla yoğuşmayı azaltır",
        "İyi ısı ve ses yalıtımı",
        "Tek tek değiştirilebildiği için kolay bakım",
        "Doğru alt yapıyla uzun yıllar sorunsuz kullanım",
      ],
      whenNeeded: [
        "Kiremitlerde kırık, kayma veya yerinden oynama var",
        "Tavanda ya da çatı katında rutubet ve su lekesi görülüyor",
        "Çatı uzun yıllardır aktarılmadı, alt yapısı hiç kontrol edilmedi",
        "Yeni binanız için çatı kaplaması seçiyorsunuz",
      ],
      faq: [
        {
          question: "Kiremit çatı ne sıklıkla aktarılmalı?",
          answer:
            "Kesin bir süre yoktur; kullanılan malzemeye ve iklime bağlıdır. Çatının yılda bir kez kontrol edilmesini ve kırık kiremitlerin zamanında değiştirilmesini öneriyoruz. Alt yapıda çürüme veya yalıtım örtüsünde yıpranma görüldüğünde aktarma gündeme gelir.",
        },
        {
          question: "Tek bir kırık kiremit sorun yaratır mı?",
          answer:
            "Zamanla yaratabilir. Kırık kiremitten giren su, altındaki örtüye ve ahşap aksama ulaşarak çürümeye ve tavanda lekeye neden olur. Küçük bir değişim, ileride büyük bir onarım masrafını önler.",
        },
        {
          question: "Eski kiremitler tekrar kullanılabilir mi?",
          answer:
            "Sağlam ve aynı modeldeki kiremitler aktarma sırasında yeniden kullanılabilir; eksik kalan kısımlar için uyumlu kiremit temin edilir. Bu, maliyeti düşüren önemli bir avantajdır.",
        },
      ],
    },
    en: {
      title: "What Is a Tile Roof? Tile Roof Installation and Re-laying",
      metaTitle: "What Is a Tile Roof? Installation and Re-laying | Kaplan İnşaat",
      metaDescription:
        "What a tile roof is, clay vs. concrete tiles, tile roof installation and re-laying steps. Tile roofing in Kocaeli with a free inspection.",
      summary: "Traditional-looking, breathable tile roofs with good insulation — new builds and re-laying.",
      lead:
        "Tile is the most common roof covering on homes in Turkey. Installed on a proper substructure, it is attractive, durable and long-lasting.",
      sections: [
        {
          heading: "What is a tile roof?",
          paragraphs: [
            "A tile roof is built by laying a waterproofing underlay, battens and overlapping tiles on a timber roof frame. The tiles interlock, and the overlaps channel rainwater to the eaves and the gutter.",
            "The underlay beneath the tiles is the invisible but most critical layer. If a tile breaks or slips, this layer stops water from entering the building.",
          ],
        },
        {
          heading: "Clay tiles or concrete tiles?",
          paragraphs: [
            "Clay tiles are made from fired clay; their natural colour, breathability and long life make them the most popular choice. Concrete tiles are heavier but impact-resistant and come in more colours.",
            "The right tile depends on the roof pitch, the load capacity of the structure and the look you want.",
          ],
        },
        {
          heading: "What is roof re-laying?",
          paragraphs: [
            "Re-laying means removing the tiles, checking the battens, timber and underlay beneath, renewing them where needed and then re-laying the sound tiles. It is more economical than a full renewal and ideal for roofs whose tiles are fine but whose substructure has worn out.",
          ],
        },
        {
          heading: "Installation steps",
          list: [
            "Inspection: the tiles, timber and underlay are assessed",
            "Existing tiles are removed and sound ones are set aside",
            "Rotten timber and battens are replaced",
            "The waterproofing underlay is laid with overlaps",
            "Battens are fixed and the tiles are laid neatly",
            "Ridge, chimney and valley joints are finished",
          ],
        },
      ],
      benefits: [
        "Traditional, attractive appearance",
        "Breathable structure that reduces condensation",
        "Good thermal and acoustic insulation",
        "Easy maintenance — tiles can be replaced individually",
        "Years of trouble-free use on a proper substructure",
      ],
      whenNeeded: [
        "Tiles are broken, slipped or displaced",
        "Damp or water stains appear on the ceiling or in the attic",
        "The roof has not been re-laid or inspected for many years",
        "You are choosing a roof covering for a new building",
      ],
      faq: [
        {
          question: "How often should a tile roof be re-laid?",
          answer:
            "There is no fixed interval; it depends on the materials and the climate. We recommend an inspection once a year and replacing broken tiles promptly. Re-laying becomes necessary when the timber rots or the underlay wears out.",
        },
        {
          question: "Can a single broken tile cause problems?",
          answer:
            "Over time, yes. Water entering through a broken tile reaches the underlay and timber, causing rot and ceiling stains. A small replacement prevents a much bigger repair bill later.",
        },
        {
          question: "Can old tiles be reused?",
          answer:
            "Sound tiles of the same model can be reused when re-laying, and matching tiles are sourced for any shortfall. This significantly lowers the cost.",
        },
      ],
    },
  },
}
