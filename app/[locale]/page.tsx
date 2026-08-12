import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Capabilities from "@/components/Capabilities/Capabilities";
import Statement from "@/components/Statement/Statement";
import Founder from "@/components/Founder/Founder";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/Reveal/Reveal";
import { getDictionary, isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className={locale === "hy" ? "fontHy" : "fontEn"}>
        <Hero dict={dict} />
        <Reveal><About dict={dict} /></Reveal>
        <Reveal><Capabilities dict={dict} /></Reveal>
        <Reveal><Statement dict={dict} /></Reveal>
        <Reveal><Founder dict={dict} /></Reveal>
        <Reveal><Contact dict={dict} /></Reveal>
      </main>
      <Footer dict={dict} />
    </>
  );
}
