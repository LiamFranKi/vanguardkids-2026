"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[100dvh] min-h-[100svh] overflow-hidden pt-[max(8.25rem,calc(7rem+env(safe-area-inset-top,0px)))] sm:pt-28 lg:pt-28">
      <div className="absolute inset-0 mesh-bg noise" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-lavender/25 blur-3xl dark:bg-lavender/15" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-mint/30 blur-3xl dark:bg-mint/15" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-6 sm:gap-10 sm:px-6 sm:pt-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex max-w-[min(100%,20rem)] items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-ink/70 backdrop-blur-md sm:max-w-none sm:px-4 sm:text-xs sm:tracking-widest dark:border-white/10 dark:bg-white/5 dark:text-ink/80"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-mint shadow-[0_0_12px_#3ecfb0]" />
            <span className="whitespace-nowrap sm:hidden">{t.hero.badgeMobile}</span>
            <span className="hidden sm:inline">{t.hero.badge}</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {t.hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-mint via-lavender to-coral bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg text-ink/70 dark:text-ink/65 lg:mx-0 mx-auto"
          >
            {t.brandDescription} {t.hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <Link
              href="#campus"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-ink px-6 py-3.5 text-sm font-bold text-cream shadow-xl shadow-ink/25 transition hover:scale-[1.02] active:scale-[0.98] sm:w-auto dark:shadow-black/50"
            >
              {t.hero.ctaCampus}
            </Link>
            <Link
              href="#contacto"
              className="glass-panel inline-flex min-h-11 w-full items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-white/70 active:bg-white/90 sm:w-auto dark:hover:bg-white/10"
            >
              {t.hero.ctaAdmission}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 grid w-full max-w-xs grid-cols-3 gap-3 text-center text-sm text-ink/60 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:justify-start dark:text-ink/55"
          >
            <div>
              <p className="font-display text-2xl font-bold text-ink">2</p>
              <p className="text-[11px] leading-snug sm:text-sm">{t.hero.statCampuses}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink">360°</p>
              <p className="text-[11px] leading-snug sm:text-sm">{t.hero.statTours}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink">IA+</p>
              <p className="text-[11px] leading-snug sm:text-sm">{t.hero.statMarketing}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-lavender/20 dark:shadow-black/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
                alt={t.hero.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent dark:from-ink/70" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <p className="font-display text-sm font-bold text-white drop-shadow">
                  {t.hero.imageCaption}
                </p>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow dark:bg-ink/90 dark:text-cream">
                  {t.hero.imageBadge}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            aria-hidden
            className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-3xl bg-gradient-to-br from-sun to-coral opacity-90 blur-2xl lg:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-6xl justify-center px-4 pb-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex items-center gap-2 text-center text-xs font-medium text-ink/50 dark:text-ink/45"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-ink/20 dark:to-ink/40" />
          {t.hero.scrollHint} {campuses.kids.title} {t.hero.scrollBetween}{" "}
          {campuses.academy.title}
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-ink/20 dark:to-ink/40" />
        </motion.div>
      </div>
    </section>
  );
}
