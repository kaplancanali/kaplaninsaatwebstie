import image from "@/public/gallery/cati/4.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const catiTamiri: ServicePage = {
  ...navItem("cati-tamiri"),
  image,
  imageAlt: {
    tr: "Çatı yenilemesinde su yalıtım örtüsü ve çıtalar üzerine kiremit dizimi",
    en: "Roof renewal: tiles being laid over waterproofing underlay and battens",
  },
  related: ["kiremit-cati", "metal-cati", "membran-cati"],
  content: {
    tr: {
      title: "Çatı Tamiri ve Komple Çatı Yenileme",
      metaTitle: "Çatı Tamiri ve Komple Çatı Yenileme | Kaplan İnşaat Kocaeli",
      metaDescription:
        "Çatınız akıtıyor mu? Tamirin mi komple yenilemenin mi gerektiğini nasıl anlarsınız, hangi arızalar hızla onarılır? Kocaeli'de ücretsiz keşif ve garantili çatı tamiri.",
      summary: "Sızıntı, kırık kiremit, fırtına hasarı ve yıpranmış çatılar için onarım ya da komple yenileme.",
      lead:
        "Çatıdaki küçük bir sorun, zamanında müdahale edilmezse tavana, duvarlara ve taşıyıcı sisteme yayılır. Doğru tespitle hangi durumda onarımın yeterli olduğunu, hangi durumda yenilemenin daha ekonomik olduğunu belirliyoruz.",
      sections: [
        {
          heading: "En sık karşılaşılan çatı arızaları",
          list: [
            "Kırık, kaymış veya rüzgârla uçmuş kiremitler",
            "Baca ve duvar birleşimlerinden su alma",
            "Mahya ve dere hatlarında açılmalar",
            "Metal çatılarda gevşeyen vidalar ve pas",
            "Yıpranmış ya da yırtılmış su yalıtım örtüsü",
            "Çürümüş çatı tahtası ve kirişler",
          ],
        },
        {
          heading: "Tamir mi, komple yenileme mi?",
          paragraphs: [
            "Hasar belirli bir bölgeyle sınırlıysa ve çatının alt yapısı genel olarak sağlamsa lokal tamir yeterlidir. Birkaç kırık kiremidin değiştirilmesi ya da bir baca birleşiminin yeniden yalıtılması kısa sürede tamamlanır.",
            "Çatı 20–25 yaşın üzerindeyse, birden fazla noktada sızıntı varsa, ahşap aksamda yaygın çürüme görülüyorsa ya da ısı kaybı yüksekse komple yenileme uzun vadede daha ekonomik olabilir. Keşif sırasında iki seçeneğin maliyetini ve faydasını açıkça paylaşıyoruz.",
          ],
        },
        {
          heading: "Acil sızıntı durumunda ne yapmalısınız?",
          paragraphs: [
            "Su gelen noktanın altına bir kap koyun; elektrik tesisatına yakın bir ıslaklık varsa ilgili sigortayı kapatın. Çatıya kendiniz çıkmayın, ıslak çatı yüzeyleri son derece kaygandır. Bizi arayın; acil sızıntı onarımlarını hava koşullarından bağımsız olarak öncelikli şekilde ele alıyoruz.",
          ],
        },
        {
          heading: "Komple çatı yenileme aşamaları",
          list: [
            "Mevcut kaplamanın sökülmesi ve molozun güvenli şekilde indirilmesi",
            "Taşıyıcı sistemin kontrolü, çürümüş ahşabın değiştirilmesi",
            "Gerekirse ısı yalıtımının uygulanması",
            "Su yalıtım örtüsünün serilmesi",
            "Yeni kaplamanın (kiremit veya metal) uygulanması",
            "Oluk ve iniş borularının kontrol edilip yenilenmesi",
          ],
        },
      ],
      benefits: [
        "Yerinde ücretsiz keşif ve net tespit",
        "Tamir ve yenileme seçeneklerinin şeffaf karşılaştırması",
        "Acil sızıntılara öncelikli müdahale",
        "En az 2 yıl yazılı işçilik garantisi",
        "Çalışma alanının temiz teslimi",
      ],
      whenNeeded: [
        "Yağmurdan sonra tavanda yeni lekeler oluşuyor",
        "Fırtınadan sonra kiremitler kaydı veya uçtu",
        "Çatı katında küf kokusu ya da nem var",
        "Çatınız 20 yılı aşkın süredir kapsamlı bakım görmedi",
      ],
      faq: [
        {
          question: "Çatı tamiri ne kadar sürer?",
          answer:
            "Kiremit değişimi, baca birleşimi gibi lokal onarımlar genellikle 1 iş gününde tamamlanır. Standart bir konutta komple çatı yenilemesi ise 2–4 iş günü sürer. Net süreyi keşif sırasında bildiriyoruz.",
        },
        {
          question: "Kışın çatı tamiri yapılabilir mi?",
          answer:
            "Onarım ve bakım işleri, havanın uygun olduğu günlerde kışın da yapılabilir. Komple kaplama ve membran uygulamaları için kuru ve 5°C üzeri hava tercih edilir. Acil sızıntılara ise hava durumundan bağımsız olarak müdahale ediyoruz.",
        },
        {
          question: "Sızıntının kaynağı, tavandaki lekenin hemen üstünde mi olur?",
          answer:
            "Her zaman değil. Su, yalıtım örtüsünün ve kirişlerin üzerinden akarak lekenin görüldüğü yerden metrelerce uzakta içeri girmiş olabilir. Bu yüzden yalnızca lekenin üstünü değil, suyun izlediği yolu baştan sona inceliyoruz.",
        },
      ],
    },
    en: {
      title: "Roof Repair and Full Roof Renewal",
      metaTitle: "Roof Repair and Full Roof Renewal | Kaplan İnşaat Kocaeli",
      metaDescription:
        "Is your roof leaking? How to tell whether you need a repair or a full renewal, and which faults can be fixed quickly. Free inspection and guaranteed roof repair in Kocaeli.",
      summary: "Repair or full renewal for leaks, broken tiles, storm damage and worn-out roofs.",
      lead:
        "A small roof problem that is not dealt with in time spreads to the ceiling, the walls and the structure. With a proper assessment we determine when a repair is enough and when a renewal is more economical.",
      sections: [
        {
          heading: "The most common roof faults",
          list: [
            "Broken, slipped or wind-blown tiles",
            "Leaks at chimney and wall junctions",
            "Gaps along ridge and valley lines",
            "Loose screws and rust on metal roofs",
            "Worn or torn waterproofing underlay",
            "Rotten roof boards and rafters",
          ],
        },
        {
          heading: "Repair or full renewal?",
          paragraphs: [
            "If the damage is limited to one area and the substructure is generally sound, a local repair is enough. Replacing a few broken tiles or resealing a chimney junction is done quickly.",
            "If the roof is over 20–25 years old, leaks in several places, shows widespread timber rot or loses a lot of heat, a full renewal can be more economical in the long run. We share the costs and benefits of both options openly during the inspection.",
          ],
        },
        {
          heading: "What to do in an emergency leak",
          paragraphs: [
            "Put a container under the leak, and switch off the relevant circuit if water is near electrical fittings. Do not climb onto the roof yourself — wet roof surfaces are extremely slippery. Call us; we handle emergency leaks as a priority regardless of the weather.",
          ],
        },
        {
          heading: "Full roof renewal steps",
          list: [
            "Removing the existing covering and safely bringing down the debris",
            "Checking the structure and replacing rotten timber",
            "Adding thermal insulation if needed",
            "Laying the waterproofing underlay",
            "Installing the new covering (tile or metal)",
            "Checking and renewing gutters and downpipes",
          ],
        },
      ],
      benefits: [
        "Free on-site inspection and a clear diagnosis",
        "A transparent comparison of repair and renewal",
        "Priority response to emergency leaks",
        "Minimum 2-year written workmanship warranty",
        "The site is handed over clean",
      ],
      whenNeeded: [
        "New stains appear on the ceiling after rain",
        "Tiles slipped or blew off after a storm",
        "There is a musty smell or damp in the attic",
        "Your roof has not had a thorough check for over 20 years",
      ],
      faq: [
        {
          question: "How long does a roof repair take?",
          answer:
            "Local repairs such as replacing tiles or a chimney junction usually take 1 working day. A full renewal of a standard home takes 2–4 working days. We confirm the exact time during the inspection.",
        },
        {
          question: "Can roofs be repaired in winter?",
          answer:
            "Repairs and maintenance can be done in winter on days with suitable weather. Full coverings and membrane work need dry weather above 5°C. Emergency leaks are handled regardless of the weather.",
        },
        {
          question: "Is the leak always right above the ceiling stain?",
          answer:
            "Not always. Water can run along the underlay and rafters and enter several metres away from where the stain appears. That is why we trace the whole path of the water, not just the spot above the stain.",
        },
      ],
    },
  },
}
