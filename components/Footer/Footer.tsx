import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import styles from "./Footer.module.css";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <Image src="/praxis-logo.png" alt="PRAXIS" width={220} height={50} className={styles.logo} />
        </div>
        <p className={styles.rights}>© 2026 PRAXIS. {dict.footer.rights}</p>
      </div>
    </footer>
  );
}
