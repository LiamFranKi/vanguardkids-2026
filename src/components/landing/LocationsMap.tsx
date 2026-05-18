"use client";

import { motion } from "framer-motion";
import { campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

export function LocationsMap() {
  const { t } = useI18n();

  return (
    <section id="mapa" className="scroll-mt-32 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-mint">
            {t.map.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.map.title}
          </h2>
          <p className="mt-4 text-ink/65 dark:text-ink/60">{t.map.hint}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[campuses.kids, campuses.academy].map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel overflow-hidden rounded-[2rem] shadow-xl dark:shadow-black/40"
            >
              <div className="flex items-center justify-between border-b border-white/50 bg-white/40 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50 dark:text-ink/45">
                    {t.map.campusLabel}
                  </p>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {c.title}
                  </h3>
                </div>
                <a
                  href={c.mapsOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream transition hover:bg-ink/90 dark:hover:bg-ink/80"
                >
                  {t.map.openMaps}
                </a>
              </div>
              <div className="relative aspect-[16/11] min-h-[220px] bg-ink/5 sm:min-h-[260px] dark:bg-ink/20">
                <iframe
                  title={`${t.map.campusLabel} ${c.title}`}
                  src={c.mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
