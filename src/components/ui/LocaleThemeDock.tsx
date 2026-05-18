"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/i18n-context";

const dockBtnBase =
  "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-md ring-1 transition hover:scale-105 active:scale-95 sm:h-10 sm:w-10";

export function LocaleThemeDock() {
  const { locale, setLocale, t } = useI18n();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted ? (resolvedTheme ?? "light") : "light";
  const nextLocale = locale === "en" ? "es" : "en";
  const nextTheme = theme === "light" ? "dark" : "light";

  const langBtnClass = `${dockBtnBase} bg-gradient-to-br from-mint-soft to-mint/30 text-ink ring-mint/40 shadow-mint/25 hover:brightness-[1.02] dark:from-mint-soft/60 dark:to-mint/25 dark:text-ink dark:ring-mint/35`;

  const themeBtnClass =
    nextTheme === "dark"
      ? `${dockBtnBase} bg-gradient-to-br from-lavender/30 to-lavender-soft text-ink ring-lavender/40 shadow-lavender/30 dark:from-[#2a2242] dark:to-lavender/25 dark:text-cream dark:ring-lavender/25`
      : `${dockBtnBase} bg-gradient-to-br from-sun-soft to-sun/40 text-ink ring-sun/50 shadow-sun/30 hover:brightness-[1.02] dark:from-sun-soft/40 dark:to-sun/25 dark:text-ink`;

  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      className="fixed left-[max(0.75rem,env(safe-area-inset-left,0px))] top-[max(6.25rem,calc(5.5rem+env(safe-area-inset-top,0px)))] z-[55] flex flex-col items-center gap-2.5 sm:top-[max(5.5rem,calc(4.75rem+env(safe-area-inset-top,0px)))]"
      aria-label="Preferencias"
    >
      <motion.button
        key={`lang-${locale}`}
        type="button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setLocale(nextLocale)}
        className={langBtnClass}
        title={nextLocale === "es" ? t.controls.langEs : t.controls.langEn}
        aria-label={
          nextLocale === "es"
            ? `Cambiar a ${t.controls.langEs}`
            : `Switch to ${t.controls.langEn}`
        }
      >
        <span className="text-[11px] font-extrabold uppercase tracking-wide">
          {nextLocale}
        </span>
      </motion.button>

      <motion.button
        key={`theme-${theme}`}
        type="button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setTheme(nextTheme)}
        className={themeBtnClass}
        title={nextTheme === "dark" ? t.controls.themeDark : t.controls.themeLight}
        aria-label={
          nextTheme === "dark"
            ? t.controls.themeDark
            : t.controls.themeLight
        }
      >
        <span aria-hidden className="text-base leading-none">
          {nextTheme === "dark" ? "☾" : "☀"}
        </span>
      </motion.button>
    </motion.aside>
  );
}
