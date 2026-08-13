"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Header.module.css";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const languagePath = (target: Locale) => {
    const parts = pathname.split("/");
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  return (
 <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${locale}`} className={styles.brand} aria-label="PRAXIS">
          <Image
            src="/praxis-logo.png"
            alt="PRAXIS"
            width={290}
            height={70}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav}>
          <a href="#about">{dict.nav.about}</a>
          <a href="#capabilities">{dict.nav.capabilities}</a>
          <a href="#founder">{dict.nav.founder}</a>
          <a href="tel:+37494890059" className={styles.navCall}>{dict.nav.contact}</a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.language}>
            <Link className={locale === "en" ? styles.active : ""} href={languagePath("en")}>EN</Link>
            <span>/</span>
            <Link className={locale === "hy" ? styles.active : ""} href={languagePath("hy")}>ՀՅ</Link>
          </div>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <div className={styles.mobilePanel}>
            <a href="#about" onClick={() => setOpen(false)}>{dict.nav.about}</a>
            <a href="#capabilities" onClick={() => setOpen(false)}>{dict.nav.capabilities}</a>
            <a href="#founder" onClick={() => setOpen(false)}>{dict.nav.founder}</a>
            <a href="tel:+37494890059" onClick={() => setOpen(false)}>{dict.nav.contact}</a>
          </div>
        )}
      </div>
    </header>
  );
}
