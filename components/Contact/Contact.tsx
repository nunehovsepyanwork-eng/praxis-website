import type { Dictionary } from "@/lib/i18n";
import styles from "./Contact.module.css";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          {dict.contact.title ? <h2>{dict.contact.title}</h2> : null}
          <p className={styles.body}>{dict.contact.body}</p>
          <div className={styles.links}>
            <a href={`mailto:${dict.contact.email}`}>{dict.contact.email}</a>
            <a href="https://www.linkedin.com/in/nune-hovsepyan/" target="_blank" rel="noreferrer">
              {dict.contact.linkedin} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
