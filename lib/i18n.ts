export const locales = ["en", "hy"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const dictionaries = {
  en: {
    meta: {
      title: "PRAXIS | Strategic Communications & Reputation Firm in Armenia",
      description:
        "PRAXIS is a strategic communications and reputation firm in Armenia helping leaders and organizations navigate reputation, crisis, executive branding, PR, and growth."
    },
    nav: {
      about: "About",
      capabilities: "Capabilities",
      founder: "Founder",
      contact: "Let’s Talk Strategy",
      menu: "Menu",
    },
    hero: {
      title1: "We don't sell templates.",
      title2: "We ask the right questions first.",
      body:
        "PRAXIS builds strategy around your goals — never a one-size-fits-all approach.",
      primary: "Let’s Talk Strategy",
      secondary: "Explore Capabilities",
      micro: "",
    },
    about: {
      label: "About PRAXIS",
      title: "Every challenge is different. Every strategy should be too.",
      p1:
        "PRAXIS is a strategic communications and reputation firm in Armenia that doesn't offer pre-packaged strategies — it builds a strategy shaped around your specific needs, your leadership, and your timing.",
      p2:
        "PRAXIS believes every challenge is different. Every strategy should be too.",
      p3:
        "PRAXIS works with leaders and organizations who are ready to invest not just in advertising, but in reputation, trust, and long-term growth — becoming their strategic communications partner for high-stakes decisions, from crisis response to executive branding.",
    },
   
    capabilities: {
      label: "Capabilities",
      title: "From plan to execution, fully covered.",
      groups: [
        {
          title: "Advisory",
          items: [
            "Communication Strategy",
            "Marketing Strategy",
            "Brand Strategy",
            "Executive & Personal Branding",
            "Crisis Communications",
          ],
        },
        {
          title: "Management",
          items: [
            "Brand Launch Campaigns",
            "Political & Campaign Communications",
            "Public Relations & Media Relations",
            "Social Media & Influencer Partnerships",
          ],
        },
        {
          title: "Production",
          items: ["Content", "Design", "Video", "Advertising", "Website"],
        },
      ],
    },
    statement: {
      line1: "We don't sell templates.",
      line2: "We build strategies tailored to",
      accent: "your business, your leadership, your timing.",
      tail: "",
    },
    founder: {
      label: "Founder",
      name: "Nune Hovsepyan",
      role: "Strategic Communications & Reputation Advisor",
      quote: "I bring 14 years of experience into building PRAXIS.",
      body:
        "I started my career as a journalist covering the legal field, working with news websites and television. One principle from those early years has stayed with me: *finding the right “hook” in every story* — the idea that matters most. That way of thinking has since become the foundation of my work: understanding the essence of a challenge, identifying its key message, and building the right communication around it.\\n\\nFor more than 6 years, I led the Public Relations Division at the Office of the Human Rights Defender of Armenia, working to strengthen the institution’s public reputation and develop the Defender’s personal brand into a trusted and recognizable voice.\\n\\nDuring this period, I also began consulting on communications and awareness-raising programs for international organizations operating in Armenia, including UNFPA, UNDP, USAID, the U.S. Embassy in Armenia, the European Union, the Council of Europe, and UNICEF.\\n\\nAn important part of my professional experience has focused on challenging stereotypes surrounding women, children, and persons with disabilities, and on shaping responsible and impactful communication around these issues.\\n\\nI later worked on brand development at a law firm and also gained experience leading and implementing a political election campaign.\\n\\nThis experience became the foundation for PRAXIS.\\n\\nPRAXIS does not offer ready-made strategies. We start with the right questions and build a strategy around your goals, leadership, and context.\\n\\nBecause every challenge is different.\\n\\nEvery strategy should be too.\\n\\n",
      linkedin: "Connect on LinkedIn",
    },
    contact: {
      label: "Start a conversation",
      title: "Let’s build what matters.",
      body: "Tell us what you’re trying to solve.",
      email: "info@praxis.am",
      linkedin: "Linkedin",
    },
    footer: {
      descriptor: "STRATEGIC COMMUNICATIONS & REPUTATION FIRM",
      rights: "All rights reserved.",
    },
  },

  hy: {
    meta: {
      title: "PRAXIS | Ռազմավարական հաղորդակցություն և հեղինակության զարգացում Հայաստանում",
      description:
        "PRAXIS-ը Հայաստանում գործող ռազմավարական հաղորդակցության և հեղինակության զարգացման ընկերություն է՝ ղեկավարների և կազմակերպությունների համար"
    },
    nav: {
      about: "Մեր մասին",
      capabilities: "Ծառայություններ",
      founder: "Հիմնադիր",
      contact: "ԿԱՊ",
      menu: "Մենյու",
    },
    hero: {
      title1: "Ո՛Չ ՊԱՏՐԱՍՏԻ ՁԵՎԱԹՂԹԻՆ",
      title2: "Սկզբում տալիս ենք ճիշտ հարցերը",
      body:
        "PRAXIS-ը կառուցում է ռազմավարություն ձեր նպատակների շուրջ, ոչ թե պատրաստի ձևանմուշով։",
      primary: "ԿԱՊ",
      secondary: "Ծանոթանալ ծառայություններին",
      micro: "",
    },
    about: {
      label: "PRAXIS-ի մասին",
      title: "Յուրաքանչյուր մարտահրավեր տարբեր է, Ռազմավարությունը՝ նույնպես",
      p1:
        "Պրաքսիսը ռազմավարական հաղորդակցության և հեղինակության զարգացման ընկերություն է Հայաստանում, որը ոչ թե առաջարկում է պատրաստի ռազմավարություններ, այլ կառուցում է ձեր կոնկրետ կարիքներին, ղեկավարությանը և ժամանակին համապատասխան ռազմավարություն։",
      p2:
        "Յուրաքանչյուր մարտահրավեր տարբեր է, հետևաբար յուրաքանչյուր ռազմավարություն նույնպես պետք է տարբեր լինի։",
      p3:
        "Պրաքսիսն աշխատում է այն ղեկավարների ու կազմակերպությունների հետ, ովքեր պատրաստ են ներդնել ոչ միայն գովազդի, այլև հեղինակության, վստահության և երկարաժամկետ աճի մեջ՝ դառնալով նրանց ռազմավարական հաղորդակցության գործընկերն ամենակարևոր որոշումների համար՝ ճգնաժամային կառավարումից մինչև ղեկավարների անձնական բրենդինգ։",
    },
    capabilities: {
      label: "Ծառայություններ",
      title: "Ամբողջական ծառայություններ՝ մեկ վայրում",
      groups: [
        {
          title: "Խորհրդատվություն",
          items: [
            "Հաղորդակցության ռազմավարություն",
            "Մարքեթինգային ռազմավարություն",
            "Բրենդի ռազմավարություն",
            "Անձնական բրենդինգ",
            "Ճգնաժամային հաղորդակցություն",
          ],
        },
        {
          title: "Կառավարում",
          items: [
            "Նոր բրենդի շուկա մուտք գործելու արշավներ",
            "Քաղաքական և քարոզարշավային հաղորդակցություն",
            "Հասարակայնության հետ կապեր և մեդիա հարաբերություններ",
            "Սոցիալական մեդիա և ինֆլուենսերների հետ համագործակցություն",
          ],
        },
        {
          title: "Արտադրություն",
          items: ["Կոնտենտ", "Դիզայն", "Վիդեո արտադրություն", "Գովազդ (արտաքին, օնլայն և SMM)", "Կայքեր"],
        },
      ],
    },
    statement: {
      line1: "Մենք պատրաստի ձևանմուշներ չենք վաճառում,",
      line2: "այլ առաջարկում ենք",
      accent: "ձեր բիզնեսին, ղեկավարին և ժամանակին",
      tail: "համապատասխան ռազմավարություններ",
    },
    founder: {
      label: "Հիմնադիր",
      name: "Նունե Հովսեփյան",
      role: "Ռազմավարական հաղորդակցության ու հեղինակության զարգագման խորհրդատու",
      quote: "PRAXIS-ը հիմնադրելիս ես ներդրել եմ իմ 14 տարվա փորձը",
      body:
        "Մասնագիտական ուղիս սկսել եմ որպես իրավական ոլորտը լուսաբանող լրագրող՝ աշխատելով լրատվական կայքերում և հեռուստատեսությունում։ Այդ տարիներից մնացած կարևոր սկզբունքը՝ պատմություններում ճիշտ «մեխը» գտնելն է, որն ընկած է հետագայում իմ ամբողջ աշխատանքի հիմքում։\\n\\nԱվելի քան 6 տարի ղեկավարել եմ Հայաստանի Մարդու իրավունքների պաշտպանի աշխատակազմի հանրային կապերի բաժինը՝ զարգացնելով հաստատության հանրային վարկանիշը և Պաշտպանի անձնական բրենդը դարձնելով վստահելի ու ճանաչելի։ Այդ ընթացքում սկսել եմ համատեղ աշխատել ու նաև խորհրդատվություն տրամադրել Հայաստանում գործող միջազգային կազմակերպությունների հաղորդակցության և իրազեկման ծրագրերի համար՝ ներառյալ UNFPA-ն, UNDP-ն, USAID-ը, Հայաստանում ԱՄՆ դեսպանությունը, Եվրոպական միությունը, Եվրոպայի խորհուրդը և UNICEF-ը։\\n\\nՄասնագիտացել եմ կանանց, երեխաների ու հաշմանդամություն ունեցող անձանց հետ կապված կարծրատիպերի հաղթահարման ու լուսաբանման հարցերում, և այս համագործակցությունները շարունակվել են նաև հետագայում։ Այնուհետև աշխատել եմ իրավաբանական ընկերությունում բրենդի զարգացման ուղղությամբ։ Ունեմ նաև քաղաքական ընտրարշավի ղեկավարման ու իրականացման փորձ։\\n\\nԱյս տարիների փորձն այսօր դարձել է PRAXIS-ի ստեղծման հիմքը՝ պրակտիկա, որը կառուցված է այն համոզմունքի վրա, որ առանց ռազմավարության հաղորդակցությունը ձախողված է։ Յուրաքանչյուր մարտահրավեր տարբեր է։ Ռազմավարությունը՝ նույնպես։",
      linkedin: "Միանալ LinkedIn-ում",
    },
    contact: {
      label: "Սկսենք զրույցը",
      title: "",
      body: "Պատմեք՝ ինչ խնդիր եք փորձում լուծել։",
      email: "info@praxis.am",
      linkedin: "Linkedin",
    },
    footer: {
      descriptor: "ՌԱԶՄԱՎԱՐԱԿԱՆ ՀԱՂՈՐԴԱԿՑՈՒԹՅՈՒՆ ԵՎ ՀԵՂԻՆԱԿՈՒԹՅՈՒՆ",
      rights: "Բոլոր իրավունքները պաշտպանված են։",
    },
  },
} as const;

export type Dictionary =
  | (typeof dictionaries)["en"]
  | (typeof dictionaries)["hy"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
