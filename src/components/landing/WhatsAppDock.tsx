"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { waLink, whatsapp } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

export function WhatsAppDock() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const options = useMemo(
    () => [
      {
        id: "adm",
        label: t.wa.admission,
        body: t.wa.admissionBody,
        phone: whatsapp.admission,
      },
      {
        id: "fam",
        label: t.wa.families,
        body: t.wa.familiesBody,
        phone: whatsapp.families,
      },
    ],
    [t],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[58] bg-ink/40 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              className="w-[min(calc(100vw-2.5rem),17.5rem)] overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-2xl shadow-ink/25 dark:border-white/20 dark:bg-[#1e1c32] dark:shadow-black/70"
            >
              <p className="border-b border-ink/10 bg-mint-soft/50 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink dark:border-white/10 dark:bg-mint-soft/20 dark:text-ink">
                {t.wa.menuTitle}
              </p>
              <div className="p-1.5">
                {options.map((o, i) => (
                  <a
                    key={o.id}
                    href={waLink(o.phone, o.body)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex min-h-12 items-center rounded-xl px-4 py-3.5 text-sm font-bold text-ink transition hover:bg-mint-soft active:bg-mint/20 dark:hover:bg-white/10 dark:active:bg-white/5 ${
                      i > 0 ? "mt-1" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {o.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.96 }}
          className="relative z-[61] flex h-[3.5rem] w-[3.5rem] min-h-[3.5rem] min-w-[3.5rem] items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-600/40 ring-4 ring-white dark:ring-[#1e1c32] sm:h-14 sm:w-14"
          aria-expanded={open}
          aria-label={t.wa.ariaOpen}
        >
          {!open && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" />
          )}
          <svg
            className="relative h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.button>
      </div>
    </>
  );
}
