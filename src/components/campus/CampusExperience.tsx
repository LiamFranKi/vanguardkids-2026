"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandAssets } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

const shots = [...brandAssets.gallery];

type Accent = "mint" | "lavender";

const accentRing: Record<Accent, string> = {
  mint: "ring-mint/40 shadow-mint/20 dark:ring-mint/30",
  lavender: "ring-lavender/40 shadow-lavender/20 dark:ring-lavender/30",
};

export function CampusExperience({
  accent,
  tourTitle,
  tourCopy,
  galleryTitle,
  galleryCopy,
}: {
  accent: Accent;
  tourTitle: string;
  tourCopy: string;
  galleryTitle: string;
  galleryCopy: string;
}) {
  const { t } = useI18n();
  const levels = t.campusExperience.levels;

  return (
    <div className="space-y-20 py-16 sm:py-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {tourTitle}
            </h2>
            <p className="mt-4 text-ink/70 dark:text-ink/65">{tourCopy}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative aspect-video overflow-hidden rounded-[2rem] bg-ink/5 ring-8 ${accentRing[accent]} shadow-2xl dark:bg-white/5`}
          >
            <Image
              src={shots[0]}
              alt={tourTitle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-6 text-center font-display text-lg font-bold text-white drop-shadow">
              {tourTitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {galleryTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70 dark:text-ink/65">
          {galleryCopy}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {shots.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg dark:shadow-black/40"
            >
              <Image
                src={src}
                alt={`${t.campusExperience.reelLabel} ${i + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                  {t.campusExperience.reelLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {t.campusExperience.curriculumTitle}
        </h2>
        <p className="mt-3 text-ink/70 dark:text-ink/65">
          {t.campusExperience.curriculumSubtitle}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {levels.map((lv, i) => (
            <motion.button
              type="button"
              key={lv.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-3xl p-6 text-left transition hover:bg-white/80 dark:hover:bg-white/10"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-ink/45 dark:text-ink/40">
                {t.campusExperience.levelLabel} {i + 1}
              </p>
              <p className="mt-2 font-display text-xl font-bold text-ink">
                {lv.name}
              </p>
              <p className="mt-2 text-sm text-ink/65 dark:text-ink/60">
                {lv.detail}
              </p>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
}
