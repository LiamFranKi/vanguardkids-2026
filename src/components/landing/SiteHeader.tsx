"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "/#campus", label: t.nav.campus },
    { href: "/#experiencia", label: t.nav.experience },
    { href: "/#mapa", label: t.nav.map },
    { href: "/#contacto", label: t.nav.contact },
  ];

  const campusBtnClass =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-xs font-semibold text-ink shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-ink sm:px-3.5 sm:text-sm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "border-lavender/30 bg-gradient-to-r from-mint-soft via-lavender-soft/95 to-sun-soft/90 shadow-md shadow-lavender/10 dark:border-white/15 dark:bg-[#0c0b14]/92 dark:shadow-black/25"
          : "border-mint/25 bg-gradient-to-r from-mint-soft/95 via-lavender-soft/92 to-sun-soft/88 shadow-sm shadow-mint/10 dark:border-white/10 dark:bg-[#14122a]/88 dark:shadow-black/20"
      }`}
    >
      <div className="pt-[env(safe-area-inset-top,0px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-5">
          <BrandLogo
            size="header"
            showName
            className="self-start sm:self-center"
          />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-white/70 hover:text-ink active:bg-white/80 dark:text-ink/80 dark:hover:bg-white/10 dark:hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex w-full flex-wrap items-center justify-end gap-1.5 sm:w-auto sm:gap-2">
            <Link href={campuses.kids.path} className={campusBtnClass}>
              {t.header.kids}
            </Link>
            <Link href={campuses.academy.path} className={campusBtnClass}>
              {t.header.academy}
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ink px-3 py-2 text-xs font-bold text-cream shadow-lg shadow-ink/20 transition hover:bg-ink/90 active:brightness-95 sm:px-4 sm:text-sm dark:shadow-black/40"
            >
              {t.header.bookVisit}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
