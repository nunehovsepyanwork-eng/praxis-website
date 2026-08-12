import type { Dictionary } from "@/lib/i18n";
import styles from "./About.module.css";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="sectionLabel">{dict.about.label}</p>
          <h2>{dict.about.title}</h2>
        </div>

        <div className={styles.copy}>
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
        </div>
      </div>
    </section>
  );
}
