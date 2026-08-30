import type { Metadata } from "next";
import { Manrope, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";
import SetHtmlLang from "./SetHtmlLang";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-armenian",
  subsets: ["armenian"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praxis.am"),

  title: "PRAXIS | Strategic Communications & Reputation Firm in Armenia",

  description:
    "PRAXIS is a strategic communications and reputation firm in Armenia helping leaders and organizations build trust, strengthen reputation, and support long-term growth.",

  applicationName: "PRAXIS",

  authors: [
    {
      name: "Nune Hovsepyan",
      url: "https://www.linkedin.com/in/nune-hovsepyan/",
    },
  ],

  creator: "Nune Hovsepyan",

  publisher: "PRAXIS",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "PRAXIS | Strategic Communications & Reputation Firm in Armenia",
    description:
      "PRAXIS is a strategic communications and reputation firm in Armenia helping leaders and organizations build trust, strengthen reputation, and support long-term growth.",
    url: "https://praxis.am/",
    siteName: "PRAXIS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://praxis.am/praxis-logo.png",
        width: 1200,
        height: 630,
        alt: "PRAXIS | Strategic Communications & Reputation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PRAXIS | Strategic Communications & Reputation",
    description:
      "Strategic communications and reputation advisory for leaders and organizations.",
    images: ["https://praxis.am/praxis-logo.png"],
  },
};

/*
  PRAXIS Structured Data
  Schema.org JSON-LD
*/

const praxisSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",

      "@id": "https://praxis.am/#organization",

      name: "PRAXIS",

      alternateName:
        "PRAXIS Strategic Communications & Reputation Firm",
        "ՊՐԱՔՍԻՍ",

      url: "https://praxis.am/",

      logo: {
        "@type": "ImageObject",
        "@id": "https://praxis.am/#logo",
        url: "https://praxis.am/praxis-logo.png",
        contentUrl: "https://praxis.am/praxis-logo.png",
      },

      description:
        "PRAXIS is a strategic communications and reputation firm in Armenia helping leaders and organizations build trust, strengthen reputation, and support long-term growth.",

      foundingDate: "2026",

      founder: {
        "@id": "https://praxis.am/#nune-hovsepyan",
      },

      areaServed: {
        "@type": "Country",
        name: "Armenia",
      },

      email: "info@praxis.am",

      knowsAbout: [
        "Strategic Communications",
        "Reputation Management",
        "Reputation Advisory",
        "Executive Branding",
        "Leadership Communications",
        "Crisis Communications",
        "Corporate Communications",
        "Public Relations",
        "Marketing Strategy",
        "Personal Branding",
      ],

      sameAs: [
        "https://www.linkedin.com/company/138454576",
      ],
    },

    {
      "@type": "Person",

      "@id": "https://praxis.am/#nune-hovsepyan",

      name: "Nune Hovsepyan",

      givenName: "Nune",

      familyName: "Hovsepyan",

      url: "https://www.linkedin.com/in/nune-hovsepyan/",

      image: "https://praxis.am/nune-hovsepyan.png",

      jobTitle:
        "Founder | Strategic Communications & Reputation Advisor",

      description:
        "Nune Hovsepyan is a strategic communications and reputation advisor, PR specialist, media expert, and founder of PRAXIS.",

      worksFor: {
        "@id": "https://praxis.am/#organization",
      },

      sameAs: [
        "https://www.linkedin.com/in/nune-hovsepyan/",
      ],

      knowsAbout: [
        "Strategic Communications",
        "Public Relations",
        "Reputation Management",
        "Executive Branding",
        "Crisis Communications",
        "Media Relations",
        "Leadership Communications",
        "Personal Branding",
        "Strategic Marketing",
      ],
    },

    {
      "@type": "WebSite",

      "@id": "https://praxis.am/#website",

      url: "https://praxis.am/",

      name: "PRAXIS",

      description:
        "Strategic Communications & Reputation Firm in Armenia",

      publisher: {
        "@id": "https://praxis.am/#organization",
      },

      inLanguage: [
        "en",
        "hy",
      ],
    },

    {
      "@type": "WebPage",

      "@id": "https://praxis.am/#webpage",

      url: "https://praxis.am/",

      name:
        "PRAXIS | Strategic Communications & Reputation Firm in Armenia",

      description:
        "PRAXIS is a strategic communications and reputation firm in Armenia helping leaders and organizations build trust, strengthen reputation, and support long-term growth.",

      isPartOf: {
        "@id": "https://praxis.am/#website",
      },

      about: {
        "@id": "https://praxis.am/#organization",
      },

      mainEntity: {
        "@id": "https://praxis.am/#organization",
      },

      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${notoArmenian.variable}`}
    >
      <head>
        <meta name="msvalidate.01" content="BD6A691B70E2486B6140B9ED8EFF70C5" />
      </head>
      <body>
        <SetHtmlLang />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(praxisSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}