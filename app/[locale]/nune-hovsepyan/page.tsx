import { notFound } from "next/navigation";
import Image from "next/image";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SelectedWork from "@/components/SelectedWork/SelectedWork";

import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";

import styles from "./page.module.css";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function NuneHovsepyanPage({
  params,
}: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <Header
        locale={locale as Locale}
        dict={dict}
      />

      <main className={styles.page}>
        {/* ABOUT / HERO */}
        <section className={styles.profileSection}>
          <div className={styles.profileImageWrap}>
            <Image
              src="/portfolio/nune-hovsepyan-portfolio.png"
              alt="Nune Hovsepyan"
              width={900}
              height={1100}
              priority
              className={styles.profileImage}
            />
          </div>

          <div className={styles.profileContent}>
            <h1>Nune Hovsepyan</h1>

            <p className={styles.role}>
              Strategic Communications & Reputation Advisor
            </p>

            <h2>
              I bring 14 years of experience into building
              PRAXIS.
            </h2>

            <p>
              I started my career as a journalist covering the
              legal field, working with news websites and
              television. One principle from those early years
              has stayed with me:{" "}
              <em>finding the right “hook” in every story</em>{" "}
              — the idea that matters most. That way of
              thinking has since become the foundation of my
              work: understanding the essence of a challenge,
              identifying its key message, and building the
              right communication around it.
            </p>

            <p>
              For more than 6 years, I led the Public Relations
              Division at the Office of the Human Rights
              Defender of Armenia, working to strengthen the
              institution’s public reputation and develop the
              Defender’s personal brand into a trusted and
              recognizable voice.
            </p>

            <p>
              During this period, I also began consulting on
              communications and awareness-raising programs for
              international organizations operating in Armenia,
              including UNFPA, UNDP, USAID, the U.S. Embassy in
              Armenia, the European Union, the Council of
              Europe, and UNICEF.
            </p>

            <p>
              An important part of my professional experience
              has focused on challenging stereotypes
              surrounding women, children, and persons with
              disabilities, and on shaping responsible and
              impactful communication around these issues.
            </p>

            <p>
              I later worked on brand development at a law firm
              and also gained experience leading and
              implementing a political election campaign.
            </p>

            <p>
              This experience became the foundation for PRAXIS.
            </p>

            <p>
              PRAXIS does not offer ready-made strategies. We
              start with the right questions and build a
              strategy around your goals, leadership, and
              context.
            </p>

            <p className={styles.closingStatement}>
              Because every challenge is different.
              <br />
              Every strategy should be too.
            </p>
          </div>
        </section>

        {/* STATS + LINKEDIN */}
        <section className={styles.metrics}>
          <div className={styles.metric}>
            <strong>14+</strong>
            <span>Years of Experience</span>
          </div>

          <div className={styles.metric}>
            <strong>50+</strong>
            <span>Projects & Campaigns</span>
          </div>

          <a
            href="https://www.linkedin.com/in/nune-hovsepyan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            <span className={styles.linkedinIcon}>in</span>
            <span>Connect on LinkedIn</span>
            <span className={styles.linkedinArrow}>→</span>
          </a>
        </section>

        {/* EXISTING SELECTED WORK */}
        <SelectedWork locale={locale as Locale} />
      </main>

      <Footer dict={dict} />
    </>
  );
}