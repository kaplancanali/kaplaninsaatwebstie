import image from "@/public/gallery/izolasyon/2.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const eksizOluk: ServicePage = {
  ...navItem("eksiz-oluk"),
  image,
  imageAlt: {
    tr: "Bina saçağına monte edilmiş antrasit renkli eksiz oluk",
    en: "Anthracite seamless gutter installed along a building's eaves",
  },
  related: ["cati-tamiri", "metal-cati", "teras-su-yalitimi"],
  content: {
    tr: {
      title: "Eksiz Oluk Nedir? Yerinde Üretim Derzsiz Oluk Sistemleri",
      metaTitle: "Eksiz Oluk Nedir? Yerinde Üretim Oluk Sistemleri | Kaplan İnşaat",
      metaDescription:
        "Eksiz oluk nedir, parçalı oluktan farkı ve avantajları. Alüminyum ve çelik eksiz oluk sistemleri yerinde üretimle Kocaeli genelinde. Ücretsiz keşif.",
      summary: "Özel makineyle yerinde, tek parça üretilen; ek yeri olmadığı için sızdırmayan oluklar.",
      lead:
        "Eksiz oluk, oluk profilinin özel bir makineyle binanın önünde, cephe uzunluğunda tek parça olarak üretildiği sistemdir. Ek yeri olmadığı için parçalı oluklarda en sık görülen sızıntı sorunu ortadan kalkar.",
      sections: [
        {
          heading: "Eksiz oluk nedir?",
          paragraphs: [
            "Geleneksel oluklar 2–3 metrelik hazır parçaların birbirine eklenmesiyle oluşturulur. Zamanla bu ek yerlerindeki conta ve silikonlar yıpranır, açılır ve su sızdırmaya başlar.",
            "Eksiz olukta ise rulo hâlindeki alüminyum ya da boyalı çelik sac, sahaya getirilen oluk makinesinde şekillendirilerek ölçüye göre tek parça üretilir. Birleşim yalnızca köşe dönüşlerinde ve iniş borusu bağlantılarında bulunur.",
          ],
        },
        {
          heading: "Oluk neden önemlidir?",
          paragraphs: [
            "Oluk sistemi, çatıdan gelen yağmur suyunu toplayıp iniş borularıyla binadan uzaklaştırır. Oluğu olmayan ya da düzgün çalışmayan binalarda su doğrudan cepheye ve temele akar. Bu da zamanla duvarlarda rutubete, sıva dökülmesine, mantolama hasarına ve temelde nem sorununa yol açar.",
          ],
        },
        {
          heading: "Uygulama aşamaları",
          list: [
            "Cephe ölçüleri alınır, iniş borusu noktaları ve eğim planlanır",
            "Eski oluklar sökülür, saçak tahtası kontrol edilir",
            "Oluk, makinede cephe uzunluğunda tek parça üretilir",
            "Askılar, suyu iniş borusuna yönlendirecek eğimle monte edilir",
            "Köşe ve iniş borusu bağlantıları yapılır",
            "Su testiyle akış kontrol edilir",
          ],
        },
      ],
      benefits: [
        "Ek yeri olmadığı için çok düşük sızıntı riski",
        "Temiz ve düzgün görünen tek hat",
        "Daha az bakım ihtiyacı",
        "Alüminyum ve boyalı çelik seçenekleri, farklı renkler",
        "Binanıza özel ölçüde yerinde üretim",
      ],
      whenNeeded: [
        "Yağmurda oluk taşıyor ya da ek yerlerinden su damlıyor",
        "Dış duvarlarda nem lekesi veya sıva kabarması var",
        "Mevcut oluklarda pas, çatlak veya sarkma görülüyor",
        "Yeni çatı ya da mantolama yaptırıyorsunuz",
      ],
      faq: [
        {
          question: "Eksiz oluk hangi malzemeden yapılır?",
          answer:
            "En yaygın olarak boyalı alüminyum ve boyalı galvaniz çelik kullanılır. Alüminyum hafiftir ve paslanmaz; çelik ise darbelere karşı daha dayanıklıdır. Binanıza ve bütçenize uygun seçeneği keşifte birlikte belirliyoruz.",
        },
        {
          question: "Eksiz oluk montajı ne kadar sürer?",
          answer:
            "Müstakil ev ve küçük apartmanlarda montaj genellikle yarım gün ile bir gün arasında tamamlanır. Büyük ve çok cepheli yapılarda süre keşif sırasında netleşir.",
        },
        {
          question: "Oluklar ne sıklıkla temizlenmeli?",
          answer:
            "Yılda en az bir kez, özellikle sonbaharda yaprak dökümünden sonra temizlenmesini öneriyoruz. Ağaçlara yakın binalarda oluk filtresi takmak tıkanmayı önemli ölçüde azaltır.",
        },
      ],
    },
    en: {
      title: "What Is a Seamless Gutter? On-site Produced Jointless Gutter Systems",
      metaTitle: "What Is a Seamless Gutter? On-site Gutter Systems | Kaplan İnşaat",
      metaDescription:
        "What a seamless gutter is, how it differs from sectional gutters and its benefits. Aluminium and steel seamless gutters produced on-site across Kocaeli. Free inspection.",
      summary: "Gutters formed in one piece on-site by a special machine — no joints, no leaks.",
      lead:
        "A seamless gutter is formed by a special machine right in front of the building, in one piece the length of the façade. With no joints, the most common leak problem of sectional gutters disappears.",
      sections: [
        {
          heading: "What is a seamless gutter?",
          paragraphs: [
            "Conventional gutters are made by joining ready-made 2–3 metre sections. Over time, the seals and silicone at these joints wear out, open up and start leaking.",
            "With a seamless gutter, coiled aluminium or painted steel is shaped on-site by a gutter machine and produced in one piece to measure. Joints exist only at corners and downpipe connections.",
          ],
        },
        {
          heading: "Why do gutters matter?",
          paragraphs: [
            "A gutter system collects rainwater from the roof and carries it away from the building through downpipes. Without working gutters, water runs straight down the façade and into the foundations, causing damp walls, falling plaster, damage to external insulation and moisture in the foundations over time.",
          ],
        },
        {
          heading: "Installation steps",
          list: [
            "The façade is measured and downpipe positions and fall are planned",
            "Old gutters are removed and the fascia board is checked",
            "The gutter is formed in one piece the length of the façade",
            "Brackets are fixed with a fall that leads water to the downpipe",
            "Corner and downpipe connections are made",
            "Flow is checked with a water test",
          ],
        },
      ],
      benefits: [
        "Very low leak risk thanks to no joints",
        "A clean, continuous line",
        "Less maintenance",
        "Aluminium and painted steel in various colours",
        "Produced on-site to fit your building",
      ],
      whenNeeded: [
        "Gutters overflow in the rain or drip at the joints",
        "Damp stains or blistering plaster on exterior walls",
        "Existing gutters are rusty, cracked or sagging",
        "You are having a new roof or external insulation installed",
      ],
      faq: [
        {
          question: "What are seamless gutters made of?",
          answer:
            "Most commonly painted aluminium and painted galvanised steel. Aluminium is light and does not rust; steel is more impact-resistant. We choose the right option for your building and budget during the inspection.",
        },
        {
          question: "How long does installation take?",
          answer:
            "For detached houses and small apartment buildings, installation usually takes half a day to a full day. For large buildings with several façades, the timeline is confirmed during the inspection.",
        },
        {
          question: "How often should gutters be cleaned?",
          answer:
            "At least once a year, ideally in autumn after the leaves fall. On buildings near trees, gutter guards greatly reduce clogging.",
        },
      ],
    },
  },
}
