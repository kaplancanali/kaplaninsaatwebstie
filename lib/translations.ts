export type Lang = "tr" | "en"

const tr = {
  // ── Meta (SEO) ─────────────────────────────────────────────────
  meta: {
    title: "Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri",
    description:
      "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra. Ücretsiz keşif, garantili işçilik.",
    ogDescription:
      "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. Ücretsiz keşif, garantili işçilik.",
    keywords:
      "çatı sistemleri, eksiz oluk, izolasyon, membran, Kocaeli, İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra, çatı ustası, çatı tamiri",
    ogAlt: "Kaplan İnşaat çatı ve oluk uygulamaları",
  },

  // ── Ortak ──────────────────────────────────────────────────────
  common: {
    freeInspection: "Ücretsiz Keşif Al",
    callNow: "Hemen Ara",
    whatsapp: "WhatsApp'tan Yaz",
    getQuote: "Ücretsiz Keşif Talep Et",
    moreInstagram: "Daha Fazlası İçin Instagram",
    send: "Gönder",
    sending: "Gönderiliyor...",
    sent: "Gönderildi!",
    skipToContent: "İçeriğe geç",
  },

  // ── Nav ────────────────────────────────────────────────────────
  nav: {
    services: "Hizmetler",
    gallery: "Galeri",
    about: "Hakkımızda",
    reviews: "Yorumlar",
    contact: "İletişim",
    call: "Hemen Ara",
    freeInspection: "Ücretsiz Keşif",
    mainNav: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    home: "Kaplan İnşaat ana sayfa",
    language: "Dil seçimi",
  },

  // ── Hero ───────────────────────────────────────────────────────
  hero: {
    badge: "Kocaeli Genelinde Hizmet",
    titleBefore: "Kocaeli'de Profesyonel",
    titleHighlight: "Çatı ve Oluk",
    titleAfter: "Sistemleri",
    description:
      "Kaliteli işçilik, garantili çözümler ve uygun fiyatlarla çatı sistemleri, eksiz oluk ve izolasyon hizmetleri sunuyoruz.",
    cta1: "Ücretsiz Keşif Al",
    cta2: "+90 539 913 06 46",
    statLabels: ["Tamamlanan Proje", "Yıllık Deneyim", "Müşteri Memnuniyeti"],
    stat724: "7/24",
    stat724Label: "Destek",
    scrollLabel: "Aşağı kaydır",
    imageAlt: "Kocaeli'de kiremit çatı yenileme uygulaması: su yalıtım membranı üzerine kiremit döşemesi",
    callAria: "Hemen arayın: +90 539 913 06 46",
  },

  // ── Trust Badges ───────────────────────────────────────────────
  trustLabel: "Güvencelerimiz",
  trustBadges: [
    { title: "Garantili İşçilik", description: "Tüm işlerimiz garantili" },
    { title: "Zamanında Teslim", description: "Söz verilen tarihte teslimat" },
    { title: "Ücretsiz Keşif", description: "Ücretsiz yerinde inceleme" },
    { title: "Uzman Ekip", description: "Profesyonel ve deneyimli ekip" },
  ],

  // ── Services ───────────────────────────────────────────────────
  services: {
    badge: "Hizmetlerimiz",
    title: "Profesyonel Çatı Çözümleri",
    subtitle:
      "Kocaeli ve çevresinde çatı sistemleri, oluk ve izolasyon konusunda uzman ekibimizle yanınızdayız. Her hizmet öncesi ücretsiz keşif yapıyoruz.",
    subtitleBold: "ücretsiz keşif",
    tipsTitle: "Ne zaman yaptırmalısınız?",
    items: [
      {
        title: "Çatı Sistemleri",
        description:
          "Metal çatı, kiremit kaplama, tamirat ve komple yenileme hizmetleri sunuyoruz. Çatınız binanızın en kritik koruma katmanıdır; zamanında bakım yapılmadığında su sızıntısı, ısı kaybı ve yapısal hasar kaçınılmaz hale gelir.",
        tips: [
          "Tavanda rutubet lekesi veya sızıntı fark ettiniz",
          "Kiremit/metal kaplamalarda kırık, kayma veya pas var",
          "Çatınız 15+ yıllık ve hiç kapsamlı bakım görmedi",
        ],
        features: ["Metal Çatı", "Kiremit Kaplama", "Tamirat", "Komple Yenileme"],
      },
      {
        title: "Eksiz Oluk Sistemleri",
        description:
          "Özel makine ile yerinde üretilen eksiz oluk sistemleri, derzlerin olmadığı için sızıntı riski sıfıra indirir. Yağmur suyunu çatıdan ve duvardan uzaklaştırarak temel ve cephe hasarını önler.",
        tips: [
          "Yağmurda oluk taşıyor veya su dışarı akıyor",
          "Bina dış duvarlarında rutubet, nem lekesi oluşuyor",
          "Mevcut oluklarda pas, çatlak veya sarkma görülüyor",
        ],
        features: ["Yerinde Üretim", "Derzsiz", "Alüminyum / Çelik", "Uzun Ömürlü"],
      },
      {
        title: "İzolasyon & Membran",
        description:
          "Çatı ve teras izolasyonu hem ısı tasarrufu sağlar hem de yapıyı su hasarından korur. Doğru membran uygulaması bina ömrünü uzatır ve kış-yaz enerji giderlerinizi önemli ölçüde düşürür.",
        tips: [
          "Çatı katında veya üst odada ısı kaybı hissediyorsunuz",
          "Düz teras veya çatıda su birikintisi ya da iç sızıntı var",
          "Tavanda nem yoğuşması veya küf oluşumu görülüyor",
        ],
        features: ["Su Yalıtımı", "Isı İzolasyonu", "Bitümlü Membran", "Çatı Terası"],
      },
    ],
  },

  // ── Gallery ────────────────────────────────────────────────────
  gallery: {
    badge: "Galeri",
    title: "İşlerimizden Fotoğraflar",
    subtitle:
      "Kocaeli ve çevresinde tamamladığımız projeleri hizmet türüne göre inceleyebilirsiniz. Bir görsele tıklayarak büyütebilirsiniz.",
    instagram: "Daha Fazlası İçin Instagram",
    photoPreview: "Fotoğraf önizleme",
    openImage: "Fotoğrafı büyüt",
    photos: "fotoğraf",
    categories: [
      {
        label: "Çatı Sistemleri",
        description:
          "Metal çatı ve kiremit kaplama uygulamalarımızdan seçilmiş sahadan kareler. Her proje teslim öncesi su sızdırmazlık testi yapılmaktadır.",
      },
      {
        label: "Eksiz Oluk",
        description:
          "Özel makinemizle sahada üretilen, derzsiz alüminyum ve çelik oluk sistemlerimiz. Birleşim noktası olmadığı için yıllarca sızıntısız çalışır.",
      },
      {
        label: "İzolasyon & Membran",
        description:
          "Bitümlü membran ve poliüretan köpük yalıtım uygulamalarımız. Doğru izolasyon ısıtma-soğutma maliyetinizi yılda %20-30 düşürebilir.",
      },
    ],
  },

  // ── Service Areas ──────────────────────────────────────────────
  serviceAreas: {
    badge: "Hizmet Bölgelerimiz",
    title: "Kocaeli Genelinde Hizmet",
    subtitle:
      "İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra ve çevresinde profesyonel çatı ve oluk hizmetleri sunuyoruz.",
    mapLabel: "Kocaeli hizmet bölgeleri haritası (temsili)",
    sea: "Karadeniz",
    gulf: "İzmit Körfezi",
    activeHint: "Bir ilçenin üzerine gelin veya seçin",
    servicesLink: "Hizmetlerimizi inceleyin",
    richText:
      "Kocaeli çatı ustası olarak İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe ve Kandıra bölgelerinde hizmet veriyoruz. Başiskele çatı ustası, Gölcük oluk sistemi, Kartepe çatı izolasyon ve Kandıra eksiz oluk konularında uzman ekibimizle yanınızdayız. Kocaeli genelinde ücretsiz keşif hizmeti sunuyoruz.",
  },

  // ── Why Us ─────────────────────────────────────────────────────
  whyUs: {
    badge: "Neden Biz?",
    title: "Güvenilir Çatı Çözüm Ortağınız",
    description:
      "Kaplan İnşaat olarak Kocaeli ve çevresinde yılların verdiği tecrübe ile çatı sistemleri, eksiz oluk ve izolasyon konusunda profesyonel hizmet sunuyoruz.",
    benefits: [
      "Ücretsiz yerinde keşif",
      "Detaylı proje teklifi",
      "Garantili işçilik",
      "Zamanında teslim",
      "Uygun fiyat garantisi",
      "7/24 destek hattı",
    ],
    reasons: [
      {
        title: "Yılların Tecrübesi",
        description: "15 yılı aşkın sektör deneyimi ile kaliteli hizmet garantisi",
      },
      {
        title: "Kaliteli Malzeme",
        description: "Sadece birinci sınıf, garantili malzemeler kullanıyoruz",
      },
      {
        title: "Hızlı ve Temiz İşçilik",
        description: "Profesyonel ekibimizle hızlı ve temiz iş teslimi",
      },
      {
        title: "Müşteri Memnuniyeti",
        description: "Müşteri memnuniyeti odaklı çalışma prensibi",
      },
    ],
  },

  // ── Reviews ────────────────────────────────────────────────────
  reviews: {
    badge: "Müşteri Yorumları",
    title: "Müşterilerimiz Ne Diyor?",
    subtitle: "Kocaeli genelinde yüzlerce mutlu müşterimizden bazılarının görüşleri",
    prev: "Önceki yorum",
    next: "Sonraki yorum",
    goTo: "Yorum grubuna git",
    rating: "5 üzerinden 5 yıldız",
    carousel: "Müşteri yorumları",
    slide: "yorum",
    items: [
      {
        name: "Ahmet Yılmaz", location: "İzmit",
        comment: "Çatımızı tamamen yenilediler. İşçilikleri çok temiz ve profesyonel. Zamanında teslim ettiler. Kesinlikle tavsiye ederim.",
      },
      {
        name: "Fatma Demir", location: "Gebze",
        comment: "Eksiz oluk sistemi yaptırdık. Artık yağmur sularından hiç sorun yaşamıyoruz. Fiyatları da gayet uygun.",
      },
      {
        name: "Mehmet Kaya", location: "Başiskele",
        comment: "Fabrikamızın çatı izolasyonunu yaptılar. Çok memnun kaldık. Uzman ve güler yüzlü bir ekip.",
      },
      {
        name: "Ayşe Şahin", location: "Gölcük",
        comment: "Ücretsiz keşfe geldiler, detaylı bilgi verdiler. İşi söyledikleri tarihte bitirdiler. Teşekkürler Kaplan İnşaat!",
      },
      {
        name: "Mustafa Öztürk", location: "Kartepe",
        comment: "Yazlık evimizin çatısını yaptırdık. Kaliteli malzeme ve işçilik. Herşey için teşekkürler.",
      },
      {
        name: "Zeynep Arslan", location: "Darıca",
        comment: "Apartmanımızın çatı onarımını yaptılar. Komşularımız da çok memnun kaldı. Profesyonel bir firma.",
      },
    ],
  },

  // ── Process ────────────────────────────────────────────────────
  process: {
    badge: "Çalışma Sürecimiz",
    title: "İlk Aramadan Teslime 4 Adım",
    subtitle:
      "Şeffaf ve müşteri odaklı iş sürecimizle projenizi sorunsuz yönetiyoruz. Hiçbir adımda sizi karanlıkta bırakmıyoruz.",
    note: "Ortalama konut projesi 1–3 iş günü içinde tamamlanır. Proje büyüklüğüne göre keşif sırasında tahmini süre bildirilir.",
    noteBold: "1–3 iş günü",
    steps: [
      {
        number: "01",
        title: "Ücretsiz Keşif",
        description:
          "Deneyimli ustamız belirlediğiniz günde gelir, çatınızı ve oluk sistemini yerinde inceler. Rutubet, çatlak, kaplama bozulmaları ve izolasyon sorunları tespit edilir; size açık ve anlaşılır bilgi verilir. Keşif için ücret alınmaz.",
      },
      {
        number: "02",
        title: "Şeffaf Teklif",
        description:
          "Kullanılacak malzeme, işçilik detayı, tahmini çalışma süresi ve garanti koşullarını kapsayan net bir teklif hazırlanır. Sürpriz maliyet yoktur; onaylamadan önce tüm kalemleri birlikte gözden geçirebilirsiniz.",
      },
      {
        number: "03",
        title: "Profesyonel Uygulama",
        description:
          "Yalnızca kalite belgeli, garantili malzemeler kullanılır. Çalışma alanı güvenli şekilde çevrilir, iş süreci boyunca çevre ve komşu saygısına dikkat edilir. Her aşamada sizi bilgilendirir, gerektiğinde fotoğraflı ilerleme raporu paylaşırız.",
      },
      {
        number: "04",
        title: "Garantili Teslim",
        description:
          "İş tamamlandığında son kalite kontrolü birlikte yapılır. Yazılı garanti belgesi ve bakım rehberi teslim edilir. Çatınızın uzun yıllar sorunsuz kalması için mevsimlik kontrol ve bakım tavsiyeleri paylaşılır.",
      },
    ],
  },

  // ── FAQ ────────────────────────────────────────────────────────
  faq: {
    badge: "Sık Sorulan Sorular",
    title: "Merak Ettikleriniz",
    subtitle:
      "Çatı, oluk ve izolasyon hizmetleri hakkında en çok sorulan soruları ve yanıtlarını derledik. Aklınıza takılan başka bir soru varsa bizi aramaktan çekinmeyin.",
    bottomTitle: "Sorunuzu burada bulamadınız mı?",
    bottomDesc: "Uzmanlarımız, projenize özel sorularınızı yanıtlamaktan memnuniyet duyar.",
    whatsappLink: "WhatsApp ile yazın",
    items: [
      {
        question: "Çatı bakımı ne sıklıkla yapılmalıdır?",
        answer:
          "Genel kural olarak çatınızın yılda en az bir kez — tercihen ilkbahar veya sonbahar aylarında — uzman tarafından gözden geçirilmesi önerilir. Kış mevsimindeki kar ve buz yükü, yaz aylarındaki UV etkisi ve şiddetli yağışlar yıl boyunca birikerek hasar oluşturur. Küçük sorunlar erken fark edildiğinde onarım maliyeti çok daha düşük kalır.",
      },
      {
        question: "Metal çatı mı, kiremit çatı mı tercih etmeliyim?",
        answer:
          "Her ikisinin de avantajları vardır. Metal çatı daha hafif, uzun ömürlü (40–50 yıl) ve hızlı montaj imkânı sunar; endüstriyel ve modern binalarda tercih edilir. Kiremit ise estetik açıdan geleneksel görünüm verir ve iyi ısı yalıtımı sağlar. Seçim; çatının eğimi, binanın yapısı, estetik beklenti ve bütçeye göre belirlenir. Keşif sırasında en uygun seçeneği birlikte değerlendiririz.",
      },
      {
        question: "Eksiz oluk ile normal (parçalı) oluk arasındaki fark nedir?",
        answer:
          "Parçalı oluklarda bölümler birbirine ek yerlerinde birleştirilir; zamanla bu ek noktaları açılarak sızıntıya yol açar. Eksiz oluk ise tek parça olarak, yerinde özel makineyle üretilir; ek yeri bulunmadığından sızıntı riski minimuma iner. Ayrıca görsel olarak daha temiz bir hat oluşturur ve uzun vadede bakım maliyeti düşüktür.",
      },
      {
        question: "Çatı izolasyonu enerji tasarrufu sağlar mı?",
        answer:
          "Evet, önemli ölçüde. Isı enerjisinin yaklaşık %25–30'u yalıtımsız çatıdan dışarı kaçar. Düzgün bir çatı izolasyonu; kış aylarında ısınma, yaz aylarında soğutma giderlerinizi yüzde yirmiden fazla düşürebilir. Ayrıca nem ve yoğuşmayı önleyerek duvar ve tavan yüzeylerindeki uzun vadeli hasarı engeller.",
      },
      {
        question: "Komple yenileme mi yaptırmalıyım, yoksa onarım mı?",
        answer:
          "Bu karar çatının yaşına, hasar boyutuna ve mevcut malzemenin durumuna bağlıdır. 20 yılın altındaki çatılarda lokal onarım genellikle yeterlidir. Ancak çatı 20–25 yaşın üzerindeyse, birden fazla bölgede ciddi hasar varsa ya da ısı kaybı yüksekse komple yenileme daha ekonomik olabilir. Keşif sırasında her iki seçeneğin maliyet ve fayda analizini sunuyoruz.",
      },
      {
        question: "Çatı veya oluk işi ne kadar sürer?",
        answer:
          "Süre projenin kapsamına göre değişir. Standart bir konut çatısının tamiri 1 iş günü; komple yenilenmesi 2–4 iş günü sürer. Eksiz oluk montajı küçük binalarda genellikle yarım-tam gün içinde tamamlanır. Büyük ticari ya da endüstriyel projeler daha uzun sürebilir. Keşif sırasında projenize özel tahmini süreyi net olarak bildiriyoruz.",
      },
      {
        question: "Kış aylarında veya yağışlı havada çatı işi yapılabilir mi?",
        answer:
          "Onarım ve basit bakım işlemleri hava koşulları uygun olduğu günlerde kış aylarında da yapılabilir. Ancak komple çatı kaplama veya membran uygulamaları için kuru ve 5°C üzeri hava tercih edilir; bu koşullar malzemenin doğru yapışması ve uzun ömürlü olması için gereklidir. Acil sızıntı onarımları ise hava durumundan bağımsız olarak öncelikli şekilde ele alınır.",
      },
      {
        question: "İş garantisi ne kadar sürelidir?",
        answer:
          "Tüm işçilik uygulamalarımız için minimum 2 yıl yazılı işçilik garantisi veriyoruz. Kullandığımız malzemelerin üretici garantisi ise ürüne göre 10–25 yıla kadar uzanabilmektedir. Garanti belgesi teslimatta elden verilir. Garanti süresi içinde oluşacak işçilik kaynaklı sorunlarda ücretsiz müdahale sağlıyoruz.",
      },
    ],
  },

  // ── CTA ────────────────────────────────────────────────────────
  cta: {
    title: "Hemen Ücretsiz Keşif Talep Edin",
    subtitle:
      "Çatı, oluk veya izolasyon projeniz için bugün bizi arayın. Uzman ekibimiz ücretsiz keşif için hazır!",
    cta1: "Hemen Ara",
    cta2: "WhatsApp'tan Yaz",
  },

  // ── Contact ────────────────────────────────────────────────────
  contact: {
    badge: "İletişim",
    title: "Bizimle İletişime Geçin",
    subtitle: "Sorularınız için bizi arayın veya formu doldurun, size en kısa sürede dönelim",
    formTitle: "Ücretsiz Keşif Formu",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız ve soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "05XX XXX XX XX",
    messageLabel: "Mesajınız",
    messagePlaceholder: "Projeniz hakkında bilgi verin...",
    formNote: "Formunuz WhatsApp üzerinden bize iletilecektir",
    phoneError: "Lütfen geçerli bir cep telefonu numarası girin (05XX XXX XX XX).",
    nameError: "Lütfen adınızı ve soyadınızı yazın.",
    messageError: "Lütfen projeniz hakkında kısa bir bilgi yazın (en az 10 karakter).",
    sentNote: "WhatsApp açıldı. Mesajı göndermek için WhatsApp'ta Gönder'e dokunun.",
    mapPlaceholder: "Harita yakında eklenecek",
    mapOpen: "Google Haritalar'da aç",
    hoursCard: "Çalışma Saatleri",
    hours: "7 gün 24 saat ulaşabilirsiniz",
    phoneCard: "Telefon",
    whatsappCard: "WhatsApp",
    whatsappAction: "Hemen Mesaj Gönderin",
    instagramCard: "Instagram",
    locationCard: "Konum",
    location: "Kocaeli, Türkiye",
    mapTitle: "Kocaeli Harita",
  },

  // ── Footer ─────────────────────────────────────────────────────
  footer: {
    brand: "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk ve izolasyon hizmetleri. Kaliteli işçilik ve garantili çözümler.",
    servicesTitle: "Hizmetlerimiz",
    services: ["Çatı Sistemleri", "Eksiz Oluk Sistemleri", "İzolasyon & Membran", "Çatı Tamiri", "Metal Çatı"],
    areasTitle: "Hizmet Bölgeleri",
    contactTitle: "İletişim",
    whatsappLink: "WhatsApp İletişim",
    location: "Kocaeli, Türkiye",
    copyright: "Kaplan İnşaat. Tüm hakları saklıdır.",
    seoLine: "Kocaeli Çatı Ustası | İzmit Oluk Sistemleri | Gebze Çatı İzolasyonu",
    social: "Sosyal medya ve iletişim",
    backToTop: "Başa dön",
  },

  // ── Hizmet rehberi sayfaları ───────────────────────────────────
  servicePages: {
    home: "Ana Sayfa",
    breadcrumb: "Sayfa konumu",
    indexEyebrow: "Hizmet Rehberi",
    indexTitle: "Hizmetlerimiz ve Bilmeniz Gerekenler",
    indexDescription:
      "Çatı, oluk ve yalıtım hizmetlerimizi tek tek inceleyin: her sayfada ne olduğunu, nasıl uygulandığını, avantajlarını ve ne zaman yaptırmanız gerektiğini bulabilirsiniz.",
    indexMetaTitle: "Hizmetlerimiz | Çatı, Oluk ve Yalıtım Rehberi | Kaplan İnşaat",
    indexMetaDescription:
      "Metal çatı, kiremit çatı, çatı tamiri, eksiz oluk, membran, çatı ısı yalıtımı ve teras su yalıtımı hakkında bilmeniz gerekenler. Kocaeli genelinde ücretsiz keşif.",
    categories: { cati: "Çatı Sistemleri", oluk: "Oluk Sistemleri", izolasyon: "İzolasyon & Yalıtım" },
    readMore: "Detaylı bilgi",
    allServices: "Tüm hizmetler",
    guideMenu: "Hizmet rehberi",
    benefitsTitle: "Avantajları",
    whenTitle: "Ne zaman yaptırmalısınız?",
    faqTitle: "Sık sorulan sorular",
    relatedTitle: "İlgili hizmetler",
    asideTitle: "Ücretsiz keşif isteyin",
    asideText: "Kocaeli genelinde yerinde inceleme yapıyor, size net bir teklif sunuyoruz.",
    areasNote: "Hizmet bölgeleri: İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra",
    ctaTitle: "Projeniz için ücretsiz keşif",
    ctaText: "Uzman ekibimiz yerinde inceleme yapar, size en uygun çözümü ve net teklifi sunar.",
  },

  // ── WhatsApp ───────────────────────────────────────────────────
  whatsapp: {
    tooltip: "WhatsApp ile Yazın",
    aria: "WhatsApp ile iletişime geçin",
  },
}

// ── English ────────────────────────────────────────────────────────────────────

const en: typeof tr = {
  meta: {
    title: "Kaplan İnşaat | Roofing & Gutter Systems in Kocaeli",
    description:
      "Professional roofing systems, seamless gutters and insulation services across Kocaeli. İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra. Free inspection, guaranteed workmanship.",
    ogDescription:
      "Professional roofing systems, seamless gutters and insulation services across Kocaeli. Free inspection, guaranteed workmanship.",
    keywords:
      "roofing, seamless gutter, insulation, waterproofing membrane, Kocaeli, İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra, roofing contractor, roof repair",
    ogAlt: "Kaplan İnşaat roofing and gutter projects",
  },

  common: {
    freeInspection: "Get Free Inspection",
    callNow: "Call Now",
    whatsapp: "Message on WhatsApp",
    getQuote: "Request Free Inspection",
    moreInstagram: "More on Instagram",
    send: "Send",
    sending: "Sending...",
    sent: "Sent!",
    skipToContent: "Skip to content",
  },

  nav: {
    services: "Services",
    gallery: "Gallery",
    about: "About Us",
    reviews: "Reviews",
    contact: "Contact",
    call: "Call Now",
    freeInspection: "Free Inspection",
    mainNav: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Kaplan İnşaat home page",
    language: "Language",
  },

  hero: {
    badge: "Serving All of Kocaeli",
    titleBefore: "Professional",
    titleHighlight: "Roofing & Gutter",
    titleAfter: "Systems in Kocaeli",
    description:
      "Quality craftsmanship, guaranteed solutions and competitive prices for roofing systems, seamless gutters and insulation services.",
    cta1: "Get Free Inspection",
    cta2: "+90 539 913 06 46",
    statLabels: ["Completed Projects", "Years of Experience", "Customer Satisfaction"],
    stat724: "24/7",
    stat724Label: "Support",
    scrollLabel: "Scroll down",
    imageAlt: "Tile roof renewal in Kocaeli: tiles being laid over a waterproofing membrane",
    callAria: "Call now: +90 539 913 06 46",
  },

  trustLabel: "Our guarantees",
  trustBadges: [
    { title: "Guaranteed Workmanship", description: "All our work comes with a guarantee" },
    { title: "On-Time Delivery", description: "Delivery on the promised date" },
    { title: "Free Inspection", description: "Free on-site assessment" },
    { title: "Expert Team", description: "Professional and experienced crew" },
  ],

  services: {
    badge: "Our Services",
    title: "Professional Roofing Solutions",
    subtitle:
      "Our expert team is with you in Kocaeli and surroundings for roofing, gutter and insulation services. We provide a free inspection before every job.",
    subtitleBold: "free inspection",
    tipsTitle: "When should you get this done?",
    items: [
      {
        title: "Roofing Systems",
        description:
          "We provide metal roofing, tile covering, repair and complete renewal services. Your roof is the most critical protective layer of your building — without timely maintenance, water infiltration, heat loss and structural damage become inevitable.",
        tips: [
          "You notice moisture stains or seepage on the ceiling",
          "Broken, displaced or rusty tiles / metal sheets are visible",
          "Your roof is 15+ years old with no major maintenance history",
        ],
        features: ["Metal Roof", "Tile Covering", "Repair", "Full Renewal"],
      },
      {
        title: "Seamless Gutter Systems",
        description:
          "Seamless gutters produced on-site with a special machine reduce leakage risk to zero by eliminating joints. They carry rainwater away from the roof and walls, preventing long-term foundation and façade damage.",
        tips: [
          "Gutters overflow or spill water outward during rain",
          "Moisture or damp stains appearing on exterior walls",
          "Existing gutters show rust, cracks or sagging",
        ],
        features: ["On-site Production", "Seamless / Jointless", "Aluminium / Steel", "Long-lasting"],
      },
      {
        title: "Insulation & Waterproofing",
        description:
          "Roof and terrace insulation saves energy and protects the structure from water damage. Proper waterproofing membrane application extends the building's lifespan and significantly reduces heating and cooling costs year-round.",
        tips: [
          "You feel heat loss in the attic or top-floor rooms",
          "Standing water or interior leaks on a flat roof or terrace",
          "Moisture condensation or mould forming on the ceiling",
        ],
        features: ["Waterproofing", "Thermal Insulation", "Bituminous Membrane", "Roof Terrace"],
      },
    ],
  },

  gallery: {
    badge: "Gallery",
    title: "Photos from Our Work",
    subtitle:
      "Browse the projects we have completed in Kocaeli and surrounding areas by service type. Click any image to enlarge.",
    instagram: "More on Instagram",
    photoPreview: "Photo preview",
    openImage: "Enlarge photo",
    photos: "photos",
    categories: [
      {
        label: "Roofing Systems",
        description:
          "Selected shots from our metal roofing and tile covering projects. Every project undergoes a water-tightness test before handover.",
      },
      {
        label: "Seamless Gutters",
        description:
          "Our seamless aluminium and steel gutter systems produced on-site. No joints means leak-free performance for years.",
      },
      {
        label: "Insulation & Waterproofing",
        description:
          "Bituminous membrane and polyurethane foam insulation applications. Proper insulation can reduce your heating and cooling costs by 20–30% annually.",
      },
    ],
  },

  serviceAreas: {
    badge: "Service Areas",
    title: "Serving All of Kocaeli",
    subtitle:
      "Professional roofing and gutter services in İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra and surrounding areas.",
    mapLabel: "Map of service areas in Kocaeli (illustrative)",
    sea: "Black Sea",
    gulf: "Gulf of İzmit",
    activeHint: "Hover over or select a district",
    servicesLink: "Explore our services",
    richText:
      "As a Kocaeli roofing contractor we serve İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe and Kandıra. Our expert team is ready for roofing, seamless gutter systems, roof insulation and all related services throughout the province. Free inspection available across Kocaeli.",
  },

  whyUs: {
    badge: "Why Us?",
    title: "Your Trusted Roofing Partner",
    description:
      "As Kaplan İnşaat, we have been delivering professional roofing systems, seamless gutters and insulation services across Kocaeli and surroundings for over 15 years.",
    benefits: [
      "Free on-site inspection",
      "Detailed project quote",
      "Guaranteed workmanship",
      "On-time delivery",
      "Competitive price guarantee",
      "24/7 support line",
    ],
    reasons: [
      {
        title: "Years of Experience",
        description: "Over 15 years of industry expertise with quality service guarantee",
      },
      {
        title: "Quality Materials",
        description: "Only first-class, certified materials are used on every project",
      },
      {
        title: "Fast & Clean Work",
        description: "Fast and clean delivery with our professional skilled team",
      },
      {
        title: "Customer Satisfaction",
        description: "A customer-first working principle at every step",
      },
    ],
  },

  reviews: {
    badge: "Customer Reviews",
    title: "What Our Customers Say",
    subtitle: "Reviews from some of our hundreds of satisfied customers across Kocaeli",
    prev: "Previous review",
    next: "Next review",
    goTo: "Go to review group",
    rating: "5 out of 5 stars",
    carousel: "Customer reviews",
    slide: "review",
    items: [
      {
        name: "Ahmet Yılmaz", location: "İzmit",
        comment: "They completely renewed our roof. The workmanship was very clean and professional. They delivered on time. I strongly recommend them.",
      },
      {
        name: "Fatma Demir", location: "Gebze",
        comment: "We had a seamless gutter system installed. We haven't had a single rainwater problem since. Very reasonable pricing too.",
      },
      {
        name: "Mehmet Kaya", location: "Başiskele",
        comment: "They did the roof insulation at our factory. We are very satisfied. An expert and friendly team.",
      },
      {
        name: "Ayşe Şahin", location: "Gölcük",
        comment: "They came for a free inspection and gave us detailed information. They finished the job exactly on the date they promised. Thank you Kaplan İnşaat!",
      },
      {
        name: "Mustafa Öztürk", location: "Kartepe",
        comment: "We had the roof of our summer house done. Quality materials and workmanship. Thank you for everything.",
      },
      {
        name: "Zeynep Arslan", location: "Darıca",
        comment: "They repaired our apartment building's roof. Our neighbours are also very satisfied. A truly professional company.",
      },
    ],
  },

  process: {
    badge: "Our Working Process",
    title: "4 Steps from First Call to Handover",
    subtitle:
      "We manage your project transparently and with a customer-first approach. We never leave you in the dark at any stage.",
    note: "An average residential project is completed within 1–3 working days. An estimated timeline is confirmed during the free inspection.",
    noteBold: "1–3 working days",
    steps: [
      {
        number: "01",
        title: "Free Inspection",
        description:
          "Our experienced craftsman visits on your chosen day and inspects the roof and gutter system in person. Moisture, cracks, coating deterioration and insulation issues are identified and clearly explained. No charge for the inspection.",
      },
      {
        number: "02",
        title: "Transparent Quote",
        description:
          "A clear quote covering the materials to be used, workmanship details, estimated duration and warranty conditions is prepared. No surprises — you can review every line item together before approving.",
      },
      {
        number: "03",
        title: "Professional Application",
        description:
          "Only certified, guaranteed materials are used. The work area is safely cordoned off and respect for neighbours and surroundings is maintained throughout. You are kept informed at every stage with a photo progress report when needed.",
      },
      {
        number: "04",
        title: "Guaranteed Handover",
        description:
          "A final quality inspection is carried out together on completion. A written warranty document and maintenance guide are handed over. Seasonal maintenance tips are shared to keep your roof trouble-free for many years.",
      },
    ],
  },

  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle:
      "We have compiled the most common questions about roofing, gutter and insulation services. If you have another question in mind, don't hesitate to call us.",
    bottomTitle: "Couldn't find your question here?",
    bottomDesc: "Our specialists would be happy to answer questions specific to your project.",
    whatsappLink: "Message on WhatsApp",
    items: [
      {
        question: "How often should a roof be serviced?",
        answer:
          "As a general rule, your roof should be inspected by a professional at least once a year — preferably in spring or autumn. Snow and ice loads in winter, UV exposure in summer and heavy rainfall accumulate throughout the year and cause damage. Small problems caught early mean much lower repair costs.",
      },
      {
        question: "Metal roof or tile roof — which should I choose?",
        answer:
          "Both have their advantages. Metal roofing (trapezoidal sheet, sandwich panel) is lighter, long-lasting (40–50 years) and offers fast installation; it is preferred for industrial and modern buildings. Tile gives a traditional aesthetic and good thermal insulation. The choice depends on the roof pitch, building structure, aesthetic expectations and budget. We evaluate the best option together during the free inspection.",
      },
      {
        question: "What is the difference between seamless and sectional gutters?",
        answer:
          "Sectional gutters are joined at seams; over time these joints open and cause leaks. A seamless gutter is produced in one continuous piece on-site with a special machine — no joints means leakage risk is minimised. It also creates a cleaner visual line and has lower long-term maintenance costs.",
      },
      {
        question: "Does roof insulation save energy?",
        answer:
          "Yes, significantly. Approximately 25–30% of heat energy escapes through an uninsulated roof. Proper roof insulation can reduce your heating costs in winter and cooling costs in summer by more than twenty percent. It also prevents moisture and condensation, protecting wall and ceiling surfaces from long-term damage.",
      },
      {
        question: "Should I get a full renewal or a repair?",
        answer:
          "This depends on the age of the roof, the extent of the damage and the condition of the existing materials. For roofs under 20 years old, local repair is usually sufficient. However, if the roof is over 20–25 years old, there is serious damage in multiple areas, or heat loss is high, a full renewal may be more economical. We present a cost-benefit analysis of both options during the inspection.",
      },
      {
        question: "How long does a roofing or gutter job take?",
        answer:
          "Duration varies depending on the scope of the project. Repairing a standard residential roof takes 1 working day; a full renewal takes 2–4 working days. Seamless gutter installation on a small building is usually completed within half to a full day. Large commercial or industrial projects may take longer. A specific timeline for your project is confirmed during the free inspection.",
      },
      {
        question: "Can roofing work be done in winter or rainy weather?",
        answer:
          "Repairs and simple maintenance can be done in winter on days when weather conditions are suitable. However, full roof covering or membrane applications require dry weather above 5°C — these conditions are necessary for materials to adhere properly and last long. Emergency leak repairs are handled as a priority regardless of weather.",
      },
      {
        question: "How long is the workmanship warranty?",
        answer:
          "We provide a minimum 2-year written workmanship warranty on all our applications. The manufacturer's warranty on the materials we use can extend from 10 to 25 years depending on the product. The warranty document is handed over in person at the time of delivery. If a workmanship-related issue arises within the warranty period, we respond free of charge.",
      },
    ],
  },

  cta: {
    title: "Request Your Free Inspection Today",
    subtitle:
      "Call or message us today for your roofing, gutter or insulation project. Our expert team is ready for a free inspection!",
    cta1: "Call Now",
    cta2: "Message on WhatsApp",
  },

  contact: {
    badge: "Contact",
    title: "Get in Touch with Us",
    subtitle: "Call us or fill in the form with your questions and we'll get back to you as soon as possible",
    formTitle: "Free Inspection Form",
    nameLabel: "Full Name",
    namePlaceholder: "Your name and surname",
    phoneLabel: "Phone",
    phonePlaceholder: "05XX XXX XX XX",
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your project...",
    formNote: "Your form will be forwarded to us via WhatsApp",
    phoneError: "Please enter a valid mobile number (05XX XXX XX XX).",
    nameError: "Please enter your full name.",
    messageError: "Please tell us briefly about your project (at least 10 characters).",
    sentNote: "WhatsApp has opened. Tap Send in WhatsApp to deliver your message.",
    mapPlaceholder: "Map coming soon",
    mapOpen: "Open in Google Maps",
    hoursCard: "Working Hours",
    hours: "Reachable 24/7",
    phoneCard: "Phone",
    whatsappCard: "WhatsApp",
    whatsappAction: "Send a Message Now",
    instagramCard: "Instagram",
    locationCard: "Location",
    location: "Kocaeli, Turkey",
    mapTitle: "Kocaeli Map",
  },

  footer: {
    brand: "Professional roofing systems, seamless gutters and insulation services throughout Kocaeli. Quality workmanship and guaranteed solutions.",
    servicesTitle: "Our Services",
    services: ["Roofing Systems", "Seamless Gutter Systems", "Insulation & Waterproofing", "Roof Repair", "Metal Roofing"],
    areasTitle: "Service Areas",
    contactTitle: "Contact",
    whatsappLink: "WhatsApp Contact",
    location: "Kocaeli, Turkey",
    copyright: "Kaplan İnşaat. All rights reserved.",
    seoLine: "Kocaeli Roofing Contractor | İzmit Gutter Systems | Gebze Roof Insulation",
    social: "Social media and contact",
    backToTop: "Back to top",
  },

  servicePages: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    indexEyebrow: "Service Guide",
    indexTitle: "Our Services and What You Should Know",
    indexDescription:
      "Explore our roofing, gutter and insulation services one by one: each page explains what it is, how it is done, its benefits and when you need it.",
    indexMetaTitle: "Our Services | Roofing, Gutter and Insulation Guide | Kaplan İnşaat",
    indexMetaDescription:
      "What you should know about metal roofing, tile roofing, roof repair, seamless gutters, membrane, roof insulation and terrace waterproofing. Free inspection across Kocaeli.",
    categories: { cati: "Roofing Systems", oluk: "Gutter Systems", izolasyon: "Insulation & Waterproofing" },
    readMore: "Learn more",
    allServices: "All services",
    guideMenu: "Service guide",
    benefitsTitle: "Benefits",
    whenTitle: "When do you need it?",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Related services",
    asideTitle: "Request a free inspection",
    asideText: "We inspect on-site anywhere in Kocaeli and give you a clear quote.",
    areasNote: "Service areas: İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra",
    ctaTitle: "Free inspection for your project",
    ctaText: "Our expert team inspects on-site and offers you the best solution with a clear quote.",
  },

  whatsapp: {
    tooltip: "Chat on WhatsApp",
    aria: "Contact via WhatsApp",
  },
}

export type Translations = typeof tr

export const translations: Record<Lang, Translations> = { tr, en }

export const LANGS: Lang[] = ["tr", "en"]

/** Route path for each language — TR is served at the root. */
export const LANG_PATH: Record<Lang, string> = { tr: "/", en: "/en" }

export const getT = (lang: Lang) => translations[lang]
