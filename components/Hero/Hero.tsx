import type { Dictionary } from "@/lib/i18n";
import styles from "./Hero.module.css";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1>
            {dict.hero.title1}
            <br />
            <span>{dict.hero.title2}</span>
          </h1>

          <p className={styles.body}>{dict.hero.body}</p>

          <div className={styles.buttons}>
            <a href="#contact" className={styles.primary}>{dict.hero.primary}</a>
            <a href="#capabilities" className={styles.secondary}>{dict.hero.secondary}</a>
          </div>

          {dict.hero.micro ? <p className={styles.micro}>{dict.hero.micro}</p> : null}
        </div>

        <div className={styles.air} aria-hidden="true">
          <span className={styles.lineOne} />
          <span className={styles.lineTwo} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
}
