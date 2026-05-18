"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/i18n-context";

const spans = ["lg:col-span-2", "", "", "lg:col-span-2", ""] as const;
const itemClass =
  [
    "bg-gradient-to-br from-white/90 to-sun-soft/80 border-sun/30 dark:from-white/5 dark:to-sun-soft/20 dark:border-sun/20",
    "bg-gradient-to-br from-mint-soft/90 to-white border-mint/25 dark:from-mint-soft/25 dark:to-transparent dark:border-mint/20",
    "bg-gradient-to-br from-lavender-soft/90 to-white border-lavender/25 dark:from-lavender-soft/25 dark:to-transparent dark:border-lavender/20",
    "bg-gradient-to-br from-white/95 to-coral/15 border-coral/25 dark:from-white/5 dark:to-coral/10 dark:border-coral/20",
    "bg-gradient-to-br from-ink/5 to-white border-ink/10 dark:from-white/5 dark:to-transparent dark:border-white/10",
  ] as const;

export function BentoHighlights() {
  const { t } = useI18n();

  return (
    <section id="experiencia" className="scroll-mt-32 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-lavender">
              {t.bento.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {t.bento.title}
            </h2>
          </div>
          <p className="max-w-md text-ink/65 dark:text-ink/60">{t.bento.intro}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.bento.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6 ${spans[i]} ${itemClass[i]}`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/40 blur-2xl dark:bg-white/5" />
              <h3 className="font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink/65">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
