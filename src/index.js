const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
// İlgili öğelere erişmek için seçiciler(selectors) oluşturun

const headerNav = document.querySelectorAll("header nav a");
const logoImg = document.querySelector("#logo-img");
const ctaSection = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");
const ctaImg = document.querySelector("#cta-img");
const textContenth4 = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);
const textContentp = document.querySelectorAll(
  ".main-content .top-content .text-content p"
);

const textContentBottomh4 = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);

const textContentBottomp = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);

const midImg = document.querySelector("#middle-img");

const contacth4 = document.querySelector(".contact h4");
const contactp = document.querySelectorAll(".contact p");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const footer = document.querySelectorAll("footer a");

//Metin içeriği ekle
h1.textContent = siteContent.cta.h1;
button.textContent = siteContent.cta.button;

headerNav[0].textContent = siteContent.nav["nav-item-1"];
headerNav[1].textContent = siteContent.nav["nav-item-2"];
headerNav[2].textContent = siteContent.nav["nav-item-3"];
headerNav[3].textContent = siteContent.nav["nav-item-4"];
headerNav[4].textContent = siteContent.nav["nav-item-5"];
headerNav[5].textContent = siteContent.nav["nav-item-6"];

logoImg.src = siteContent.images["logo-img"];
ctaImg.src = siteContent.images["cta-img"];
midImg.src = siteContent.images["accent-img"];

textContenth4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textContentp[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];

textContenth4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
textContentp[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

textContentBottomh4[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
textContentBottomp[0].textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

textContentBottomh4[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
textContentBottomp[1].textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

textContentBottomh4[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];
textContentBottomp[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

contacth4.textContent = siteContent.iletisim["iletişim-h4"];
contactp[0].textContent = siteContent.iletisim.adres;
contactp[1].textContent = siteContent.iletisim.telefon;
contactp[2].textContent = siteContent.iletisim.email;

footer[0].textContent = siteContent.footer.copyright;

headerNav[0].classList.add("italic");
headerNav[1].classList.add("italic");
headerNav[2].classList.add("italic");
headerNav[3].classList.add("italic");
headerNav[4].classList.add("italic");
headerNav[5].classList.add("italic");

footer[0].classList.add("bold");
