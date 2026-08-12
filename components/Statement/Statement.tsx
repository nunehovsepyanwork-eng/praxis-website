import type { Dictionary } from "@/lib/i18n";
import styles from "./Statement.module.css";

export default function Statement({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.rule} />
        <p>
          {dict.statement.line1}
          <br />
          {dict.statement.line2}
          {dict.statement.accent ? <>{" "}<em>{dict.statement.accent}</em></> : null}
          {"tail" in dict.statement && dict.statement.tail ? <>{" "}<span>{dict.statement.tail}</span></> : null}
        </p>
      </div>
    </section>
  );
}
