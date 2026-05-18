"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n/i18n-context";

export function LeadMagnet() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ebook-adaptacion" }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-ink/15 bg-gradient-to-br from-[#14122a] via-[#1e1a38] to-lavender/50 p-8 text-white shadow-2xl dark:border-lavender/25 dark:from-[#0a0912] dark:via-[#14122a] dark:to-lavender/35 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-mint/25 blur-3xl dark:bg-mint/20" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mint">
                {t.lead.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                {t.lead.title}
              </h2>
              <p className="mt-4 text-sm text-white/85">{t.lead.body}</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-3">
              <label className="block text-sm font-semibold text-white/95">
                {t.lead.emailLabel}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  placeholder={t.lead.placeholder}
                  className="mt-2 w-full rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/45 outline-none ring-0 backdrop-blur transition focus:border-mint focus:bg-white/20"
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-mint px-4 py-3.5 text-sm font-bold text-ink shadow-lg shadow-mint/30 transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "loading" ? t.lead.sending : t.lead.submit}
              </button>
              {status === "ok" && (
                <p className="text-sm font-medium text-mint">{t.lead.success}</p>
              )}
              {status === "err" && (
                <p className="text-sm text-coral">{t.lead.error}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
