"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/i18n-context";

type FormData = {
  childName: string;
  age: string;
  parentName: string;
  phone: string;
  campus: string;
  message: string;
};

const initial: FormData = {
  childName: "",
  age: "",
  parentName: "",
  phone: "",
  campus: "vanguard-kids",
  message: "",
};

export function ContactFlow() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );

  const steps = useMemo(
    () => [
      {
        title: t.contact.steps[0]!.title,
        field: "childName" as const,
        type: "text" as const,
        placeholder: t.contact.steps[0]!.placeholder ?? "",
      },
      {
        title: t.contact.steps[1]!.title,
        field: "age" as const,
        type: "text" as const,
        placeholder: t.contact.steps[1]!.placeholder ?? "",
      },
      {
        title: t.contact.steps[2]!.title,
        field: "parentName" as const,
        type: "text" as const,
        placeholder: t.contact.steps[2]!.placeholder ?? "",
      },
      {
        title: t.contact.steps[3]!.title,
        field: "phone" as const,
        type: "tel" as const,
        placeholder: t.contact.steps[3]!.placeholder ?? "",
      },
      {
        title: t.contact.steps[4]!.title,
        field: "campus" as const,
        type: "select" as const,
      },
      {
        title: t.contact.steps[5]!.title,
        field: "message" as const,
        type: "textarea" as const,
        placeholder: t.contact.steps[5]!.placeholder ?? "",
      },
    ],
    [t],
  );

  const current = steps[step]!;
  const progress = ((step + 1) / steps.length) * 100;

  async function submitAll() {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contacto" className="scroll-mt-32 py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-sun">
            {t.contact.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.contact.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-mint via-lavender to-coral"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            {status === "ok" ? (
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-ink">
                  {t.contact.thanksTitle}
                </p>
                <p className="mt-3 text-ink/70 dark:text-ink/65">
                  {t.contact.thanksBody}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep(0);
                    setData(initial);
                    setStatus("idle");
                  }}
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-cream active:brightness-95 dark:shadow-lg"
                >
                  {t.contact.again}
                </button>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-ink/45 dark:text-ink/40">
                      {t.contact.stepWord} {step + 1} {t.contact.stepBetween}{" "}
                      {steps.length}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                      {current.title}
                    </h3>

                    {current.type === "select" ? (
                      <select
                        className="mt-6 min-h-12 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-base text-ink outline-none focus:border-mint dark:border-white/10 dark:bg-white/5 dark:text-ink"
                        value={data.campus}
                        onChange={(e) =>
                          setData({ ...data, campus: e.target.value })
                        }
                      >
                        {t.contact.campusOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    ) : current.type === "textarea" ? (
                      <textarea
                        className="mt-6 min-h-[120px] w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-base text-ink outline-none focus:border-mint dark:border-white/10 dark:bg-white/5 dark:text-ink"
                        placeholder={current.placeholder}
                        value={data[current.field]}
                        onChange={(e) =>
                          setData({ ...data, [current.field]: e.target.value })
                        }
                      />
                    ) : (
                      <input
                        className="mt-6 min-h-12 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-base text-ink outline-none focus:border-mint dark:border-white/10 dark:bg-white/5 dark:text-ink"
                        type={current.type}
                        placeholder={current.placeholder}
                        value={data[current.field]}
                        onChange={(e) =>
                          setData({ ...data, [current.field]: e.target.value })
                        }
                        required={step < 4}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-between gap-3">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="inline-flex min-h-12 min-w-[5.5rem] items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-ink/60 transition hover:bg-white/60 disabled:opacity-30 dark:hover:bg-white/10"
                  >
                    {t.contact.back}
                  </button>
                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (step < 4 && !data[steps[step]!.field]?.trim())
                          return;
                        setStep((s) => s + 1);
                      }}
                      className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-ink px-6 py-3 text-sm font-bold text-cream shadow-lg active:brightness-95 dark:shadow-black/40"
                    >
                      {t.contact.next}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submitAll}
                      disabled={status === "loading"}
                      className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-mint to-lavender px-6 py-3 text-sm font-bold text-ink shadow-lg disabled:opacity-50 active:brightness-95"
                    >
                      {status === "loading" ? t.contact.sending : t.contact.send}
                    </button>
                  )}
                </div>
                {status === "err" && (
                  <p className="mt-4 text-center text-sm text-coral">
                    {t.contact.error}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
