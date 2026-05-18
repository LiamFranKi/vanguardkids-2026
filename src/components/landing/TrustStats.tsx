"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/i18n-context";

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 18 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    motionValue.set(0);
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return () => unsub();
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const statValues = [
  { value: 10, suffix: "+" },
  { value: 2, suffix: "" },
  { value: 40, suffix: "+" },
  { value: 100, suffix: "%" },
];

export function TrustStats() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-mint/15 via-transparent to-lavender/15 dark:from-mint/10 dark:to-lavender/10" />
      <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/50 bg-white/40 px-6 py-12 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-coral">
            {t.stats.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.stats.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-extrabold tabular-nums text-ink sm:text-5xl">
                <AnimatedNumber
                  value={statValues[i]!.value}
                  suffix={statValues[i]!.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-ink/60 dark:text-ink/55">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
