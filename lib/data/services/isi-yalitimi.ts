import image from "@/public/gallery/cati/ahsap-cati-karkasi.jpg"
import { navItem } from "./nav"
import type { ServicePage } from "./types"

export const isiYalitimi: ServicePage = {
  ...navItem("isi-yalitimi"),
  image,
  imageAlt: {
    tr: "Yalıtım ve kaplama öncesi kurulan ahşap çatı karkası",
    en: "Timber roof frame built before insulation and covering",
  },
  related: ["membran-cati", "metal-cati", "cati-tamiri"],
  content: {
    tr: {
      title: "Çatı Isı Yalıtımı Nedir? Taş Yünü, XPS ve Poliüretan Uygulamaları",
      metaTitle: "Çatı Isı Yalıtımı Nedir? Taş Yünü, XPS, Poliüretan | MKaplan İnşaat",
      metaDescription:
        "Çatı ısı yalıtımı nedir, hangi malzemeler kullanılır, ne kadar tasarruf sağlar? Taş yünü, XPS ve poliüretan köpük çatı yalıtımı için Kocaeli'de ücretsiz keşif.",
      summary: "Taş yünü, XPS ve poliüretan köpük ile çatıdan kaçan ısıyı azaltan yalıtım uygulamaları.",
      lead:
        "Yalıtımsız bir çatıdan binanın ısı enerjisinin önemli bir kısmı dışarı kaçar. Çatı ısı yalıtımı kışın ısınma, yazın soğutma giderlerini düşürür ve üst katlarda konforu belirgin biçimde artırır.",
      sections: [
        {
          heading: "Çatı ısı yalıtımı nedir?",
          paragraphs: [
            "Isı yalıtımı; çatı katmanları arasına ısı iletkenliği düşük malzemeler yerleştirerek iç ortam ile dış hava arasındaki ısı geçişini azaltmaktır. Sıcak hava yükseldiği için binalarda en fazla ısı kaybı çatıdan yaşanır; bu yüzden çatı, yalıtımın en verimli sonuç verdiği bölümdür.",
          ],
        },
        {
          heading: "Hangi malzemeler kullanılır?",
          paragraphs: [
            "Malzeme seçimi; çatının tipine, kullanım amacına ve yangın, nem gibi beklentilere göre yapılır:",
          ],
          list: [
            "Taş yünü: Yanmaz ve ses yalıtımı da sağlar; eğimli çatı aralarında ve çatı arası döşemesinde yaygın kullanılır",
            "XPS levha: Basınç dayanımı yüksek ve suya dirençlidir; düz çatı ve teraslarda tercih edilir",
            "Poliüretan köpük: Püskürtme yöntemiyle uygulanır ve derzsiz, tek parça bir yalıtım katmanı oluşturur",
            "Sandviç panel: Metal çatılarda kaplama ve yalıtımı tek üründe birleştirir",
          ],
        },
        {
          heading: "Yalıtım ve nem kontrolü",
          paragraphs: [
            "Isı yalıtımı doğru uygulanmadığında yoğuşma (terleme) sorununa yol açabilir. Bu nedenle sıcak tarafa buhar kesici, dış tarafa su yalıtım örtüsü veya nefes alan membran uygulanır ve çatı havalandırması göz önünde bulundurulur. Böylece yalıtım malzemesi kuru kalır ve verimini korur.",
          ],
        },
        {
          heading: "Uygulama aşamaları",
          list: [
            "Keşifte çatı tipi ve mevcut yalıtım durumu incelenir",
            "Uygun malzeme ve kalınlık belirlenir",
            "Gerekli yerlere buhar kesici serilir",
            "Yalıtım malzemesi boşluk ve ısı köprüsü kalmayacak şekilde yerleştirilir",
            "Üzerine su yalıtımı ve çatı kaplaması tamamlanır",
          ],
        },
      ],
      benefits: [
        "Isınma ve soğutma giderlerinde belirgin düşüş",
        "Üst katlarda yaz-kış daha dengeli sıcaklık",
        "Yoğuşma ve küf oluşumunun önlenmesi",
        "Taş yünü ile ek ses yalıtımı",
        "Binanın enerji verimliliğinin artması",
      ],
      whenNeeded: [
        "Çatı katında kışın üşüyor, yazın bunalıyorsunuz",
        "Isınma faturalarınız beklenenden yüksek",
        "Tavanda yoğuşma, küf veya kararma görülüyor",
        "Çatı yenilemesi yaptırıyorsunuz; yalıtım eklemenin en doğru zamanı",
      ],
      faq: [
        {
          question: "Çatı yalıtımı ne kadar tasarruf sağlar?",
          answer:
            "Tasarruf; binanın mevcut durumuna, iklime ve uygulanan malzemenin kalınlığına bağlıdır. Yalıtımsız bir çatıya doğru yalıtım yapıldığında ısınma ve soğutma giderlerinde yüzde yirmiyi aşan düşüşler görülebilir.",
        },
        {
          question: "Mevcut çatıyı sökmeden yalıtım yapılabilir mi?",
          answer:
            "Çoğu durumda evet. Çatı arası kullanılmıyorsa yalıtım, çatı arası döşemesinin üzerine serilebilir. Kullanılan çatı katlarında ise içeriden uygulama veya püskürtme poliüretan gibi seçenekler değerlendirilir.",
        },
        {
          question: "Poliüretan köpük mü, taş yünü mü?",
          answer:
            "İkisi de etkili ısı yalıtım malzemeleridir. Poliüretan köpük derzsiz ve hızlı uygulanır; taş yünü ise yanmaz yapısı ve ses yalıtımıyla öne çıkar. Seçimi çatınızın yapısına ve önceliklerinize göre birlikte yapıyoruz.",
        },
      ],
    },
    en: {
      title: "What Is Roof Insulation? Stone Wool, XPS and Polyurethane",
      metaTitle: "What Is Roof Insulation? Stone Wool, XPS, Polyurethane | MKaplan İnşaat",
      metaDescription:
        "What roof insulation is, which materials are used and how much it saves. Stone wool, XPS and polyurethane foam roof insulation in Kocaeli with a free inspection.",
      summary: "Stone wool, XPS and polyurethane foam insulation that cuts heat loss through the roof.",
      lead:
        "An uninsulated roof lets a large share of a building's heat escape. Roof insulation lowers heating costs in winter and cooling costs in summer, and noticeably improves comfort on the top floors.",
      sections: [
        {
          heading: "What is roof insulation?",
          paragraphs: [
            "Thermal insulation means placing materials with low thermal conductivity between the roof layers to reduce heat transfer between inside and outside. Because warm air rises, buildings lose the most heat through the roof — which makes the roof the place where insulation pays off most.",
          ],
        },
        {
          heading: "Which materials are used?",
          paragraphs: ["The choice depends on the roof type, its use and requirements such as fire safety and moisture:"],
          list: [
            "Stone wool: non-combustible and also insulates against sound; common between rafters and on attic floors",
            "XPS boards: high compressive strength and water resistance; preferred on flat roofs and terraces",
            "Polyurethane foam: spray-applied, forming a seamless, continuous insulation layer",
            "Sandwich panels: combine covering and insulation in one product on metal roofs",
          ],
        },
        {
          heading: "Insulation and moisture control",
          paragraphs: [
            "Poorly applied insulation can cause condensation. That is why a vapour barrier is placed on the warm side, a waterproofing underlay or breathable membrane on the outside, and roof ventilation is taken into account. This keeps the insulation dry and effective.",
          ],
        },
        {
          heading: "Application steps",
          list: [
            "The roof type and existing insulation are assessed during the inspection",
            "The right material and thickness are chosen",
            "A vapour barrier is laid where needed",
            "Insulation is fitted with no gaps or thermal bridges",
            "Waterproofing and the roof covering are completed on top",
          ],
        },
      ],
      benefits: [
        "Noticeably lower heating and cooling costs",
        "More even temperatures on top floors all year",
        "Prevents condensation and mould",
        "Extra sound insulation with stone wool",
        "Better energy efficiency for the building",
      ],
      whenNeeded: [
        "Your attic floor is cold in winter and stifling in summer",
        "Your heating bills are higher than expected",
        "Condensation, mould or dark patches appear on the ceiling",
        "You are renewing your roof — the best time to add insulation",
      ],
      faq: [
        {
          question: "How much does roof insulation save?",
          answer:
            "Savings depend on the building's current state, the climate and the insulation thickness. Properly insulating an uninsulated roof can reduce heating and cooling costs by more than twenty percent.",
        },
        {
          question: "Can a roof be insulated without removing the covering?",
          answer:
            "In most cases, yes. If the attic is unused, insulation can be laid on the attic floor. For lived-in attic floors, insulating from the inside or spray polyurethane are options we consider.",
        },
        {
          question: "Polyurethane foam or stone wool?",
          answer:
            "Both are effective insulators. Polyurethane foam is seamless and quick to apply; stone wool stands out for being non-combustible and for sound insulation. We choose together based on your roof and priorities.",
        },
      ],
    },
  },
}
