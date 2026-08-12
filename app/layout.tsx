import type { Metadata } from "next";
import { Manrope, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

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
  authors: [{ name: "PRAXIS" }],
  creator: "PRAXIS",
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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://praxis.am/#organization",
  name: "PRAXIS",
  url: "https://praxis.am",
  logo: "https://praxis.am/praxis-logo.png",
  description:
    "Strategic communications and reputation firm helping leaders and organizations build trust, strengthen reputation, and support long-term growth.",
  foundingDate: "2026",
  areaServed: {
    "@type": "Country",
    name: "Armenia",
  },
  email: "info@praxis.am",
  founder: {
    "@type": "Person",
    name: "Nune Hovsepyan",
    jobTitle: "Founder of PRAXIS | Strategic Communications & Reputation Advisor",
  },
  sameAs: ["https://www.linkedin.com/in/nune-hovsepyan/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoArmenian.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
