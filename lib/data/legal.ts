import type { Lang } from "@/lib/i18n"
import type { LegalPage } from "@/lib/routes"
import type { ServiceSection } from "@/lib/data/services/types"
import { SITE } from "@/lib/site"

/**
 * KVKK privacy notice and cookie policy. Written to match what the site
 * actually does (form → WhatsApp, GA4 only with consent, cookieless Vercel
 * Analytics, consent-gated map). Template text: have it reviewed by a lawyer
 * or accountant, and update `UPDATED` whenever it changes.
 */
export type LegalContent = {
  title: string
  metaDescription: string
  intro: string
  sections: ServiceSection[]
}

export const LEGAL_UPDATED: Record<Lang, string> = { tr: "24 Ekim 2026", en: "24 October 2026" }

const controller = {
  tr: [
    `Unvan: ${SITE.name} (şahıs işletmesi)`,
    `Adres: ${SITE.address.full}`,
    `Telefon: ${SITE.phones.primaryDisplay}, ${SITE.phones.secondaryDisplay}`,
    `Web sitesi: ${SITE.url.replace("https://", "")}`,
  ],
  en: [
    `Business: ${SITE.name} (sole proprietorship)`,
    `Address: ${SITE.address.full}, Türkiye`,
    `Phone: ${SITE.phones.primaryDisplay}, ${SITE.phones.secondaryDisplay}`,
    `Website: ${SITE.url.replace("https://", "")}`,
  ],
}

export const LEGAL: Record<LegalPage, Record<Lang, LegalContent>> = {
  kvkk: {
    tr: {
      title: "KVKK Aydınlatma Metni",
      metaDescription:
        "MKaplan İnşaat'ın 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni: işlenen veriler, amaçlar, aktarım ve haklarınız.",
      intro:
        "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, veri sorumlusu sıfatıyla MKaplan İnşaat olarak web sitemizi kullandığınızda ve bizimle iletişime geçtiğinizde işlenen kişisel verileriniz hakkında sizi bilgilendirmek isteriz.",
      sections: [
        { heading: "1. Veri sorumlusu", list: controller.tr },
        {
          heading: "2. İşlenen kişisel veriler",
          list: [
            "Kimlik: keşif formunda veya iletişimde paylaştığınız ad ve soyad",
            "İletişim: telefon numarası ve WhatsApp üzerinden iletişimde görünen bilgiler",
            "Talep bilgileri: mesajınızın içeriği, iş yapılacak adres, proje ayrıntıları ve paylaştığınız fotoğraflar",
            "İşlem güvenliği: siteyi ziyaret ettiğinizde barındırma sağlayıcısının tuttuğu IP adresi, tarayıcı ve cihaz bilgisi gibi sunucu kayıtları",
            "Site kullanım verileri: yalnızca onay vermeniz hâlinde, Google Analytics çerezleri aracılığıyla ziyaret ettiğiniz sayfalar ve etkileşimler",
          ],
        },
        {
          heading: "3. İşleme amaçları",
          list: [
            "Keşif ve teklif taleplerinizi almak, size dönüş yapmak",
            "Hizmetin planlanması, yürütülmesi ve teslimi",
            "Garanti ve satış sonrası süreçlerin yürütülmesi",
            "Fatura ve vergi mevzuatı gibi yasal yükümlülüklerin yerine getirilmesi",
            "Web sitesinin güvenliğinin ve işleyişinin sağlanması",
            "Onayınız hâlinde, site kullanımının ölçülmesi ve sitenin iyileştirilmesi",
          ],
        },
        {
          heading: "4. Toplama yöntemi ve hukuki sebepler",
          paragraphs: [
            "Kişisel verileriniz; web sitemizdeki keşif formu, telefon, WhatsApp ve yüz yüze görüşmeler aracılığıyla toplanır. Keşif formuna yazdığınız bilgiler sunucumuza kaydedilmez; Gönder'e bastığınızda WhatsApp uygulamasında mesaj olarak açılır ve ancak siz gönderdiğinizde bize ulaşır.",
            "Verileriniz KVKK m. 5/2 kapsamında bir sözleşmenin kurulması veya ifası, hukuki yükümlülüklerimizin yerine getirilmesi ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz hukuki sebeplerine dayanılarak işlenir. Analitik çerezler aracılığıyla yapılan işleme ise açık rızanıza dayanır ve bu rızayı istediğiniz zaman geri alabilirsiniz.",
          ],
        },
        {
          heading: "5. Kişisel verilerin aktarılması",
          paragraphs: [
            "Kişisel verileriniz, yasal yükümlülükler kapsamında yetkili kamu kurum ve kuruluşlarına ve mali müşavirimize; hizmetin yürütülmesi için gerekli olduğu ölçüde iş ortaklarımıza aktarılabilir.",
            "Web sitemiz Vercel Inc. altyapısında barındırılmaktadır. Site kullanım istatistikleri yalnızca onayınızla Google Analytics (Google LLC / Google Ireland Ltd.) ile ölçülür. WhatsApp üzerinden iletişimde mesajlarınız WhatsApp (Meta) tarafından iletilir. Bu hizmet sağlayıcıların sunucuları yurt dışında bulunabileceğinden, söz konusu aktarımlar KVKK m. 9'da öngörülen şartlara uygun olarak gerçekleştirilir.",
          ],
        },
        {
          heading: "6. Saklama süresi",
          paragraphs: [
            "Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca saklanır; bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.",
          ],
        },
        {
          heading: "7. KVKK m. 11 kapsamındaki haklarınız",
          list: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
            "İşlenmişse buna ilişkin bilgi talep etme",
            "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
            "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
            "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
            "KVKK m. 7'deki şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
            "Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
            "Otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme",
            "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
          ],
        },
        {
          heading: "8. Başvuru",
          paragraphs: [
            "Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'de belirtilen yöntemlerle, örneğin yukarıdaki adresimize yazılı olarak iletebilirsiniz. Başvurunuz en geç otuz gün içinde ücretsiz olarak sonuçlandırılır.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Notice (KVKK)",
      metaDescription:
        "MKaplan İnşaat's privacy notice under the Turkish Personal Data Protection Law No. 6698 (KVKK): data processed, purposes, transfers and your rights.",
      intro:
        "Under the Turkish Personal Data Protection Law No. 6698 (KVKK), MKaplan İnşaat, as the data controller, informs you about the personal data processed when you use our website or contact us.",
      sections: [
        { heading: "1. Data controller", list: controller.en },
        {
          heading: "2. Personal data processed",
          list: [
            "Identity: the name you share in the inspection form or when contacting us",
            "Contact: your phone number and the details visible when you contact us via WhatsApp",
            "Request details: the content of your message, the job address, project details and any photos you share",
            "Security: server logs kept by our hosting provider when you visit the site, such as IP address, browser and device information",
            "Site usage: only if you consent, the pages you visit and your interactions, via Google Analytics cookies",
          ],
        },
        {
          heading: "3. Purposes",
          list: [
            "Receiving your inspection and quote requests and getting back to you",
            "Planning, carrying out and delivering the service",
            "Warranty and after-sales processes",
            "Meeting legal obligations such as invoicing and tax rules",
            "Keeping the website secure and working",
            "With your consent, measuring site usage and improving the site",
          ],
        },
        {
          heading: "4. Collection method and legal grounds",
          paragraphs: [
            "Your data is collected through the inspection form on our website, by phone, via WhatsApp and in person. What you type into the inspection form is not stored on our servers; pressing Send opens it as a message in WhatsApp, and it reaches us only when you send it.",
            "Your data is processed under KVKK Art. 5/2 on the grounds of entering into or performing a contract, complying with our legal obligations, and our legitimate interests provided they do not harm your fundamental rights and freedoms. Processing through analytics cookies relies on your explicit consent, which you can withdraw at any time.",
          ],
        },
        {
          heading: "5. Transfers",
          paragraphs: [
            "Your data may be shared with authorised public bodies and our accountant to meet legal obligations, and with business partners to the extent needed to deliver the service.",
            "Our website is hosted on Vercel Inc. infrastructure. Site usage statistics are measured with Google Analytics (Google LLC / Google Ireland Ltd.) only with your consent. When you contact us via WhatsApp, your messages are carried by WhatsApp (Meta). As these providers' servers may be located abroad, such transfers are made in line with the conditions of KVKK Art. 9.",
          ],
        },
        {
          heading: "6. Retention",
          paragraphs: [
            "Your data is kept for as long as the purpose requires and for the statutory retention periods in the relevant legislation, then deleted, destroyed or anonymised.",
          ],
        },
        {
          heading: "7. Your rights under KVKK Art. 11",
          list: [
            "To learn whether your personal data is processed",
            "To request information if it has been processed",
            "To learn the purpose of processing and whether it is used accordingly",
            "To know the third parties in Türkiye or abroad to whom it is transferred",
            "To request correction if it is incomplete or inaccurate",
            "To request deletion or destruction under the conditions of KVKK Art. 7",
            "To request that corrections, deletions or destructions be notified to the third parties it was transferred to",
            "To object to a result against you arising from analysis solely by automated systems",
            "To claim compensation if you suffer damage due to unlawful processing",
          ],
        },
        {
          heading: "8. How to apply",
          paragraphs: [
            "You can send requests about your rights using the methods set out in the Communiqué on the Procedures and Principles of Application to the Data Controller, for example in writing to our address above. Your request will be answered free of charge within thirty days at the latest.",
          ],
        },
      ],
    },
  },
  cookies: {
    tr: {
      title: "Çerez Politikası",
      metaDescription:
        "MKaplan İnşaat web sitesinde kullanılan çerezler, Google Analytics'in yalnızca onayla çalışması ve çerez tercihlerinizi nasıl değiştirebileceğiniz.",
      intro:
        "Çerezler, ziyaret ettiğiniz web sitelerinin tarayıcınıza kaydettiği küçük metin dosyalarıdır. Bu sayfada sitemizde hangi çerezlerin ve benzeri tarayıcı depolama kayıtlarının kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklıyoruz.",
      sections: [
        {
          heading: "1. Zorunlu ve işlevsel kayıtlar",
          paragraphs: [
            "Siteyi kullanabilmeniz için gereken bu kayıtlar onay gerektirmez ve kişisel veri içermez. Tarayıcınızın yerel depolama alanında tutulurlar:",
          ],
          list: [
            "theme: seçtiğiniz renk temasını (koyu, açık veya sistem) hatırlar",
            "mk-cookie-consent: çerez tercihinizi (kabul veya ret) hatırlar",
          ],
        },
        {
          heading: "2. Analitik çerezler (yalnızca onayla)",
          paragraphs: [
            "Sitenin nasıl kullanıldığını anlamak için Google Analytics 4 kullanıyoruz. Bu çerezler yalnızca çerez çubuğunda Kabul et'i seçerseniz bırakılır. Google Analytics 4 IP adreslerini kaydetmez.",
            "Onay vermediğiniz sürece Google Analytics çerez bırakmaz. Google'ın Onay Modu (Consent Mode) kapsamında Google'a yalnızca çerez içermeyen, sizi tanımlamayan sinyaller (örneğin bir sayfanın görüntülendiği bilgisi) gönderilebilir.",
          ],
          list: [
            "_ga: ziyaretçileri birbirinden ayırt eder, 2 yıl saklanır",
            "_ga_<kimlik>: oturum durumunu tutar, 2 yıl saklanır",
          ],
        },
        {
          heading: "3. Çerez kullanmayan ölçüm",
          paragraphs: [
            "Barındırma sağlayıcımızın Vercel Web Analytics hizmeti çerez kullanmaz ve kimliğinizi belirlemeden yalnızca toplu ziyaret istatistikleri üretir.",
          ],
        },
        {
          heading: "4. Üçüncü taraf içerikler",
          paragraphs: [
            "İletişim bölümündeki Google Haritalar haritası Google tarafından sağlanır ve Google'ın kendi çerezlerini kullanabilir. Bu nedenle harita yalnızca çerezleri kabul ettiyseniz ya da Haritayı göster butonuna bastığınızda yüklenir.",
          ],
        },
        {
          heading: "5. Tercihlerinizi yönetme",
          paragraphs: [
            "Tercihinizi istediğiniz zaman sayfanın en altındaki Çerez ayarları bağlantısından değiştirebilirsiniz. Ayrıca tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz; bu durumda sitenin bazı tercihleri hatırlaması mümkün olmayabilir.",
            "Kişisel verilerinizin işlenmesine ilişkin ayrıntılar için KVKK Aydınlatma Metnimizi inceleyebilirsiniz.",
          ],
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      metaDescription:
        "Cookies used on the MKaplan İnşaat website, how Google Analytics runs only with consent, and how to change your cookie preferences.",
      intro:
        "Cookies are small text files that websites store in your browser. This page explains which cookies and similar browser storage our site uses and how you can manage your preferences.",
      sections: [
        {
          heading: "1. Essential and functional storage",
          paragraphs: [
            "These entries are needed for the site to work, require no consent and contain no personal data. They are kept in your browser's local storage:",
          ],
          list: [
            "theme: remembers your colour theme (dark, light or system)",
            "mk-cookie-consent: remembers your cookie choice (accept or reject)",
          ],
        },
        {
          heading: "2. Analytics cookies (only with consent)",
          paragraphs: [
            "We use Google Analytics 4 to understand how the site is used. These cookies are set only if you choose Accept in the cookie bar. Google Analytics 4 does not log IP addresses.",
            "Until you consent, Google Analytics sets no cookies. Under Google's Consent Mode, only cookieless signals that do not identify you (for example, that a page was viewed) may be sent to Google.",
          ],
          list: [
            "_ga: distinguishes visitors, kept for 2 years",
            "_ga_<id>: keeps session state, kept for 2 years",
          ],
        },
        {
          heading: "3. Cookieless measurement",
          paragraphs: [
            "Our hosting provider's Vercel Web Analytics uses no cookies and produces only aggregate visit statistics without identifying you.",
          ],
        },
        {
          heading: "4. Third-party content",
          paragraphs: [
            "The Google Maps map in the contact section is provided by Google and may use Google's own cookies. It therefore loads only if you have accepted cookies or press Show map.",
          ],
        },
        {
          heading: "5. Managing your preferences",
          paragraphs: [
            "You can change your choice at any time via the Cookie settings link at the very bottom of the page. You can also delete or block cookies in your browser settings; the site may then be unable to remember some preferences.",
            "For details on how your personal data is processed, see our Privacy Notice (KVKK).",
          ],
        },
      ],
    },
  },
}
