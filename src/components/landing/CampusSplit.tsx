"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

const cardBase =
  "group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/50 p-8 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:shadow-black/40 sm:min-h-[320px]";

export function CampusSplit() {
  const { t } = useI18n();

  return (
    <section id="campus" className="relative scroll-mt-32 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-mint">
            {t.campusSplit.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.campusSplit.title}
          </h2>
          <p className="mt-4 text-ink/65 dark:text-ink/60">{t.campusSplit.body}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`${cardBase} bg-gradient-to-br from-mint-soft via-white to-mint/20 hover:from-mint/30 dark:from-mint-soft/30 dark:via-cream dark:to-transparent`}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint/40 blur-2xl transition group-hover:scale-125 dark:bg-mint/25" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur dark:bg-white/10 dark:text-ink">
                {t.campusSplit.kidsBadge}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-ink">
                {campuses.kids.title}
              </h3>
              <p className="mt-2 max-w-sm text-ink/70 dark:text-ink/65">
                {t.campusKidsShort}
              </p>
              <Link
                href={campuses.kids.path}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-cream shadow-lg transition group-hover:gap-3 dark:shadow-black/50"
              >
                {t.campusSplit.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`${cardBase} bg-gradient-to-br from-lavender-soft via-white to-lavender/25 hover:from-lavender/35 dark:from-lavender-soft/25 dark:via-cream dark:to-transparent`}
          >
            <div className="pointer-events-none absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-lavender/40 blur-2xl transition group-hover:scale-125 dark:bg-lavender/25" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur dark:bg-white/10 dark:text-ink">
                {t.campusSplit.academyBadge}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-ink">
                {campuses.academy.title}
              </h3>
              <p className="mt-2 max-w-sm text-ink/70 dark:text-ink/65">
                {t.campusAcademyShort}
              </p>
              <Link
                href={campuses.academy.path}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-cream shadow-lg transition group-hover:gap-3 dark:shadow-black/50"
              >
                {t.campusSplit.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
