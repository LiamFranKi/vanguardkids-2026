"use client";

import Link from "next/link";
import { brand, campuses, social } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";

type SocialKey = keyof typeof social;

const socialLinks: {
  key: SocialKey;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "instagram",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 3.92.01 7.84-.02 11.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.43-.63.66-1.39.65-2.14V.02z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-ink/10 bg-gradient-to-br from-lavender-soft via-mint-soft/70 to-sun-soft/80 dark:border-white/10 dark:from-[#14122a] dark:via-[#1a1730] dark:to-[#0f0e18]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.12),transparent_50%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:flex-row sm:justify-between sm:px-6 sm:py-14">
        <div className="max-w-sm">
          <p className="font-display text-xl font-bold text-ink">{brand.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink/60">
            {t.brandDescription}
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-ink/50 dark:text-ink/45">
            {t.footer.social}
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {socialLinks.map(({ key, label, icon }) => (
              <a
                key={key}
                href={social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink shadow-sm transition hover:scale-105 hover:border-mint/40 hover:bg-white hover:text-mint active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-ink dark:hover:border-mint/35 dark:hover:bg-white/15"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/50 dark:text-ink/45">
              {t.footer.campus}
            </p>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-ink/80 dark:text-ink/75">
              <li>
                <Link href={campuses.kids.path} className="hover:text-mint">
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
            <p className="text-xs font-bold uppercase tracking-widest text-ink/50 dark:text-ink/45">
              {t.footer.legal}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70 dark:text-ink/65">
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
      <p className="relative border-t border-ink/8 px-4 py-5 text-center text-xs text-ink/50 dark:border-white/8 dark:text-ink/45">
        © {new Date().getFullYear()} {brand.name}. {t.footer.credit}
      </p>
    </footer>
  );
}
