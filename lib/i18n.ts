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
      title1: "Right diagnosis.",
      title2: "Right strategy.",
      body:
        "We partner with leadership teams to understand what’s actually driving their communications and reputation challenges, then build the strategy — from crisis response to executive branding — that fits their specific context.",
      primary: "Let’s Talk Strategy",
      secondary: "Explore Capabilities",
      micro: "",
    },
    about: {
      label: "About PRAXIS",
      title: "Every challenge is different. Every strategy should be too.",
      p1:
        "PRAXIS is a strategic communications and reputation firm helping leaders and organizations who are ready to invest not just in advertising, but in reputation, trust, and long-term growth. We become our clients\' strategic communications partner — helping them navigate high-stakes decisions, from crisis response to executive branding.",
      p2:
        "We believe communication rarely fails because of poor execution. It fails because the wrong problem is being solved.",
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
      role: "",
      quote: "I bring 14 years of experience into building PRAXIS.",
      body:
        "I started my career as a journalist covering the legal field, working with news websites and television. That early instinct — to find the story that matters before anything else — is still at the core of how I work today.\\n\\nFor more than 6 years, I led the public relations division at the Office of the Human Rights Defender of Armenia, building the institution's public visibility and developing the Defender's personal brand into a trusted, recognizable voice. It was during this time that I also began consulting on communications and awareness programs for international organizations operating in Armenia — including UNFPA, UNDP, USAID, the U.S. Embassy in Armenia, the European Union, the Council of Europe, and UNICEF — work I've continued ever since. My focus within these programs has centered on breaking down stereotypes and shaping coverage around women, children, and persons with disabilities. I later moved into brand development at a law firm, followed by running a political election campaign.\\n\\nThat experience is now the foundation of PRAXIS — a practice built on the belief that strategy must come before communication. Every challenge is different. Every strategy should be too.",
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
      title1: "Ճիշտ ախտորոշում,",
      title2: "ճիշտ ռազմավարություն",
      body:
        "Մենք բացահայտում ենք ձեր հաղորդակցային և հեղինակության իրական ռիսկերը, ապա ստեղծում ռազմավարություն՝ ճգնաժամային կառավարումից մինչև ղեկավարների անձնական բրենդի զարգացում",
      primary: "ԿԱՊ",
      secondary: "Ծանոթանալ ծառայություններին",
      micro: "",
    },
    about: {
      label: "PRAXIS-ի մասին",
      title: "Յուրաքանչյուր մարտահրավեր տարբեր է, Ռազմավարությունը՝ նույնպես",
      p1:
        "PRAXIS-ը ռազմավարական հաղորդակցության և հեղինակության զարգացման ընկերություն է, որն օգնում է ղեկավարներին և կազմակերպություններին, ովքեր պատրաստ են ներդնել ոչ միայն գովազդի, այլ նաև հեղինակության, վստահության և երկարաժամկետ աճի մեջ։",
      p2:
        "Հաղորդակցությունը հազվադեպ է ձախողվում այն պատճառով, որ վատ է իրականացվում։ Այն ձախողվում է, երբ ի սկզբանե սխալ խնդիր է լուծվում։",
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
      role: "",
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
