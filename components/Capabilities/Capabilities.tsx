import type { Dictionary } from "@/lib/i18n";
import styles from "./Capabilities.module.css";

export default function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <section id="capabilities" className={styles.section}>
      <div className="container">
        <p className="sectionLabel">{dict.capabilities.label}</p>
        <h2 className={styles.title}>{dict.capabilities.title}</h2>

        <div className={styles.cards}>
          {dict.capabilities.groups.map((group) => (
            <article className={styles.card} key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
