'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SetHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.startsWith("/hy") ? "hy" : "en";
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}