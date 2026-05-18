"use client";

import Image from "next/image";
import Link from "next/link";
import { campuses } from "@/lib/site";
import { useI18n } from "@/i18n/i18n-context";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppDock } from "@/components/landing/WhatsAppDock";
import { LocaleThemeDock } from "@/components/ui/LocaleThemeDock";
import { CampusExperience } from "@/components/campus/CampusExperience";

export function CampusMiniPage({ variant }: { variant: "kids" | "academy" }) {
  const { t } = useI18n();
  const c = variant === "kids" ? campuses.kids : campuses.academy;
  const isKids = variant === "kids";

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-28 sm:pb-32">
        <section className="relative overflow-hidden pt-[max(10.5rem,calc(9rem+env(safe-area-inset-top,0px)))] sm:pt-32 lg:pt-28">
          <div
            className={`absolute inset-0 ${
              isKids
                ? "bg-gradient-to-br from-mint-soft via-cream to-white dark:via-cream dark:to-transparent"
                : "bg-gradient-to-br from-lavender-soft via-cream to-white dark:via-cream dark:to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute top-20 h-72 w-72 rounded-full blur-3xl ${
              isKids
                ? "right-0 bg-mint/35 dark:bg-mint/20"
                : "left-0 bg-lavender/35 dark:bg-lavender/20"
            }`}
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-2 sm:px-6 sm:pt-0 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p
                className={`text-xs font-bold uppercase tracking-widest ${
                  isKids ? "text-mint" : "text-lavender"
                }`}
              >
                {t.campusPage.miniKicker}
              </p>
              <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {c.title}
              </h1>
              <p className="mt-4 text-lg text-ink/70 dark:text-ink/65">
                {isKids ? t.campusKidsShort : t.campusAcademyShort}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contacto"
                  className="rounded-2xl bg-ink px-6 py-3 text-sm font-bold text-cream shadow-lg dark:shadow-black/40"
                >
                  {isKids
                    ? t.campusPage.scheduleTour
                    : t.campusPage.requestAdmission}
                </Link>
                <Link
                  href="/"
                  className="glass-panel rounded-2xl px-6 py-3 text-sm font-bold text-ink"
                >
                  {t.campusPage.backHub}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl dark:shadow-black/50">
              <Image
                src={
                  isKids
                    ? "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
                    : "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
                }
                alt={
                  isKids
                    ? t.campusPage.imageKidsAlt
                    : t.campusPage.imageAcademyAlt
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
        <CampusExperience
          accent={isKids ? "mint" : "lavender"}
          tourTitle={
            isKids ? t.campusPage.tourKids : t.campusPage.tourAcademy
          }
          tourCopy={
            isKids ? t.campusPage.tourKidsCopy : t.campusPage.tourAcademyCopy
          }
          galleryTitle={
            isKids
              ? t.campusPage.galleryKidsTitle
              : t.campusPage.galleryAcademyTitle
          }
          galleryCopy={
            isKids
              ? t.campusPage.galleryKidsCopy
              : t.campusPage.galleryAcademyCopy
          }
        />
      </main>
      <SiteFooter />
      <LocaleThemeDock />
      <WhatsAppDock />
    </>
  );
}
