import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Founder.module.css";

export default function Founder({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="founder" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="sectionLabel">{dict.founder.label}</p>

          <div className={styles.media}>
            <Image
              src="/nune-hovsepyan.png"
              alt="Nune Hovsepyan, Founder of PRAXIS"
              width={1200}
              height={1500}
              className={styles.image}
            />
          </div>
        </div>

        <div
          className={`${styles.copy} ${
            dict.founder.label === "Հիմնադիր" ? styles.copyHy : ""
          }`}
        >
          <h2>{dict.founder.name}</h2>

          {dict.founder.role ? (
            <p className={styles.role}>{dict.founder.role}</p>
          ) : null}

          <p className={styles.quote}>{dict.founder.quote}</p>

          <div className={styles.body}>
            {dict.founder.body.split("\\n\\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/nune-hovsepyan/"
              target="_blank"
              rel="noreferrer"
            >
              {dict.founder.linkedin}
            </a>

            <Link
              href={`/${locale}/nune-hovsepyan`}
              className={styles.portfolioLink}
            >
              {locale === "hy" ? "Դիտել աշխատանքները" : "View Selected Work"} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}