import { createI18n } from 'vue-i18n'

const messages = {
  hu: {
    nav: {
      home: 'Főoldal',
      contact: 'Kapcsolat',
      login: 'Belépés',
    },
    footer: {
      rights: 'Minden jog fenntartva.',
    },
    home: {
      title: 'Útközben is otthon',
      subtitle: 'Megbízható, rugalmas szállásmegoldásokat kínálunk cégek számára belföldön és külföldön egyaránt.',
      letUsHandleIt: 'Bízd ránk!',
      whyChooseUs: 'Miért válassza a Cégvándort?',
      features: {
        custom: {
          title: "Testreszabott megoldások",
          text: "Minden alkalmazott különálló személyiséggel és igényekkel rendelkezik. A Cégvándornál pontosan arra törekszünk, hogy minden egyes vendégünk számára személyre szabott kényelmet és szolgáltatást nyújtsunk."
        },
        global: {
          title: "Globális elérhetőség",
          text: "Legyen szó belföldi vagy nemzetközi szállásigényről, kiterjedt hálózatunknak köszönhetően bárhol a világon behálózhatjuk Önt és csapatát."
        },
        reliable: {
          title: "Megbízhatóság és kényelem",
          text: "Megértjük, hogy a hatékonyság kulcsfontosságú a sikerhez. Ezért biztosítjuk az Ön munkatársainak azt a nyugalmat és kényelmet, amelyre egy hosszú munkanap után szükségük van."
        },
      },
      outro: "A Cégvándor célja az, hogy Ön és csapata a munkára koncentrálhassanak, miközben mi gondoskodunk az otthont nyújtó szállásról. Tapasztalja meg a velünk való együttműködés előnyeit, és hagyja, hogy mi felügyeljünk mindent, ami a kényelemről és a vendégszeretetről szól."
    },
    howItWorksPage: {
      title: 'Hogyan működünk',
      subtitle: 'Egyszerű folyamat, teljes körű ügyintézés, havi egy számla partnereink számára',
      steps: {
        step1: {
          title: '1. Igény megküldése',
          description:
            'Ön megadja a várost vagy régiót, az elhelyezés időtartamát, a munkavállalók létszámát, valamint az esetleges speciális igényeket.'
        },
        step2: {
          title: '2. Ajánlatok készítése',
          description:
            'Az igények alapján legalább két különböző szállásajánlatot készítünk, amelyek árban, elhelyezkedésben vagy komfortfokozatban is eltérhetnek.'
        },
        step3: {
          title: '3. Választás',
          description:
            'Ön kiválasztja az Önnek legmegfelelőbb megoldást, mi pedig elindítjuk a szervezést.'
        },
        step4: {
          title: '4. Teljes körű ügyintézés',
          description:
            'A szervezést teljes egészében átvállaljuk — kapcsolattartás, adminisztráció, egyeztetések és változások kezelése.'
        },
        step5: {
          title: '5. Egyszerű elszámolás',
          description:
            'A díjazás havonta egy összesített számla alapján történik, külön ügyintézés nélkül.'
        }
      },
      why: {
        title: 'Miért éri meg velünk dolgozni?',
        items: {
          timeSaving: {
            title: 'Időmegtakarítás',
            description:
              'Egyetlen partneren keresztül intézhet minden szállással kapcsolatos feladatot.'
          },
          flexible: {
            title: 'Rugalmas megoldások',
            description:
              'Minden projektet az aktuális igényekhez igazítunk, létszám és időtartam szerint.'
          },
          transparent: {
            title: 'Átlátható elszámolás',
            description:
              'Egy számla, kiszámítható fizetés, rejtett költségek nélkül.'
          }
        }
      },
      cta: {
        title: 'Készen áll az együttműködésre?',
        button: 'Lépjen kapcsolatba velünk'
      },
    },
    contactus: {
      title: 'Kapcsolat',
      intro: 'Kérdése van, ajánlatot szeretne kérni, vagy együttműködésben gondolkodik? Vegye fel velünk a kapcsolatot, és hamarosan visszajelzünk.',
      phone: 'Telefon'
    },
    login: {
      title: 'Bejelentkezés',
      subtitle: 'Adja meg az adatait a folytatáshoz',
      email: 'E-mail cím',
      password: 'Jelszó',
      submit: 'Bejelentkezés',
      invalidCredentials: 'Érvénytelen belépési adatok',
    }
  },

  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
      login: 'Login',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    home: {
      title: 'Feel at home on the go.',
      subtitle: 'We offer reliable, flexible accommodation solutions for companies both domestically and internationally.',
      letUsHandleIt: 'Let us handle it!',
      welcomeMessage:
        'Welcome to Cégvándor, where we provide accommodation solutions tailored to the needs of your company, both domestically and abroad! We specifically look for partners who aim to provide housing for large teams or long-term stays for their employees.',
      whyChooseUs: 'Why choose Cégvándor?',
      features: {
        custom: {
          title: 'Custom Solutions',
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
    howItWorksPage: {
      title: 'How we work',
      subtitle: 'Simple process, full-service administration, one monthly invoice for our partners.',
      steps: {
        step1: {
          title: '1. Submit your request',
          description:
            'You provide the city or region, the duration of accommodation, the number of employees, and any special requirements.'
        },
        step2: {
          title: '2. Offer preparation',
          description:
            'Based on your requirements, we prepare at least two different accommodation offers that may differ in price, location, or comfort level.'
        },
        step3: {
          title: '3. Selection',
          description:
            'You choose the solution that suits you best, and we start organizing everything.'
        },
        step4: {
          title: '4. Full-service management',
          description:
            'We take care of the entire process — communication, administration, coordination, and handling changes.'
        },
        step5: {
          title: '5. Simple billing',
          description:
            'Billing is handled with one consolidated monthly invoice, without additional administration.'
        },
      },
      why: {
        title: 'Why work with us?',
        items: {
          timeSaving: {
            title: 'Time-saving',
            description:
              'Manage all accommodation-related tasks through a single trusted partner.'
          },
          flexible: {
            title: 'Flexible solutions',
            description:
              'We tailor every project to your current needs, based on headcount and duration.'
          },
          transparent: {
            title: 'Transparent billing',
            description:
              'One invoice, predictable payments, with no hidden costs.'
          }
        }
      },
      cta: {
        title: 'Ready to work together?',
        button: 'Get in touch with us'
      }
    },
    login: {
      title: 'Login',
      subtitle: 'Enter your credentials to continue',
      email: 'Email',
      password: 'Password',
      submit: 'Login',
      invalidCredentials: 'Invalid credentials',
    }
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
