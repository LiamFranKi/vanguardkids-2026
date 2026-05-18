"use client";

import Link from "next/link";
import { brand, campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-white/40 bg-white/50 py-12 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div>
          <BrandLogo size="sm" href="/" />
          <p className="mt-3 font-display text-xl font-bold text-ink">{brand.name}</p>
          <p className="mt-2 max-w-xs text-sm text-ink/60 dark:text-ink/55">
            {t.brandDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/45 dark:text-ink/40">
              {t.footer.campus}
            </p>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-ink/80 dark:text-ink/75">
              <li>
                <Link
                  href={campuses.kids.path}
                  className="hover:text-mint"
                >
                  {campuses.kids.title}
                </Link>
              </li>
              <li>
                <Link
                  href={campuses.academy.path}
                  className="hover:text-lavender"
                >
                  {campuses.academy.title}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/45 dark:text-ink/40">
              {t.footer.legal}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70 dark:text-ink/60">
              <li>
                <a href="#" className="hover:text-ink">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ink">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-ink/45 sm:px-6 dark:text-ink/40">
        © {new Date().getFullYear()} {brand.name}. {t.footer.credit}
      </p>
    </footer>
  );
}
