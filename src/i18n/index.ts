import { createI18n } from 'vue-i18n'

const messages = {
  hu: {
    nav: {
      home: 'Főoldal',
      contact: 'Kapcsolat',
    },
    footer: {
      rights: 'Minden jog fenntartva.',
    },
    home: {
      title: 'Cégvándor – Az alkalmazottak otthona, bárhol is dolgoznak',
      welcomeMessage: 'Üdvözöljük a Cégvándornál, ahol az Ön vállalatának igényeire szabott szállásmegoldásokat kínálunk belföldön és külföldön egyaránt! Cégünk kifejezetten olyan partnereket keres, akik nagy létszámú vagy hosszú távú szálláshely biztosítására törekednek alkalmazottaik számára.',
      whyChooseUs: 'Miért válassza a Cégvándort?',
      features: {
        custom: {
          title: "Testreszabott megoldások: ",
          text: "Minden alkalmazott különálló személyiséggel és igényekkel rendelkezik. A Cégvándornál pontosan arra törekszünk, hogy minden egyes vendégünk számára személyre szabott kényelmet és szolgáltatást nyújtsunk."
        },
        global: {
          title: "Globális elérhetőség: ",
          text: "Legyen szó belföldi vagy nemzetközi szállásigényről, kiterjedt hálózatunknak köszönhetően bárhol a világon behálózhatjuk Önt és csapatát."
        },
        reliable: {
          title: "Megbízhatóság és kényelem: ",
          text: "Megértjük, hogy a hatékonyság kulcsfontosságú a sikerhez. Ezért biztosítjuk az Ön munkatársainak azt a nyugalmat és kényelmet, amelyre egy hosszú munkanap után szükségük van."
        },
      },
      outro: "A Cégvándor célja az, hogy Ön és csapata a munkára koncentrálhassanak, miközben mi gondoskodunk az otthont nyújtó szállásról. Tapasztalja meg a velünk való együttműködés előnyeit, és hagyja, hogy mi felügyeljünk mindent, ami a kényelemről és a vendégszeretetről szól."
    },
    contactus: {
      title: 'Kapcsolat',
      intro: 'Kérdése van, ajánlatot szeretne kérni, vagy együttműködésben gondolkodik? Vegye fel velünk a kapcsolatot, és hamarosan visszajelzünk.',
      phone: 'Telefon'
    },
  },

  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    home: {
      title: 'Cégvándor – The home for your employees, wherever they work',
      welcomeMessage:
        'Welcome to Cégvándor, where we provide accommodation solutions tailored to the needs of your company, both domestically and abroad! We specifically look for partners who aim to provide housing for large teams or long-term stays for their employees.',
      whyChooseUs: 'Why choose Cégvándor?',
      features: {
        custom: {
          title: 'Custom Solutions: ',
          text: 'Every employee has unique needs and preferences. At Cégvándor, we strive to provide personalized comfort and services for each guest.',
        },
        global: {
          title: 'Global Availability: ',
          text: 'Whether your accommodation needs are domestic or international, our extensive network allows us to support you and your team anywhere in the world.',
        },
        reliable: {
          title: 'Reliability and Comfort: ',
          text: 'We understand that efficiency is key to success. That’s why we ensure your employees have the peace of mind and comfort they need after a long workday.',
        },
      },
      outro:
        'Cégvándor’s goal is to let you and your team focus on work while we take care of providing a home-like accommodation. Experience the benefits of working with us, and let us manage everything related to comfort and hospitality.',
    },
    contactus: {
      title: 'Contact',
      intro:
        'Do you have questions, want to request a quote, or are considering a partnership? Get in touch with us, and we will respond shortly.',
      phone: 'Phone',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'hu',
  fallbackLocale: 'en',
  missingWarn: true,
  fallbackWarn: true,
  messages,
})
