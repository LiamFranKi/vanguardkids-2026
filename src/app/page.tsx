import { SiteHeader } from "@/components/landing/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { CampusSplit } from "@/components/landing/CampusSplit";
import { BentoHighlights } from "@/components/landing/BentoHighlights";
import { TrustStats } from "@/components/landing/TrustStats";
import { LocationsMap } from "@/components/landing/LocationsMap";
import { LeadMagnet } from "@/components/landing/LeadMagnet";
import { ContactFlow } from "@/components/landing/ContactFlow";
import { WhatsAppDock } from "@/components/landing/WhatsAppDock";
import { LocaleThemeDock } from "@/components/ui/LocaleThemeDock";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-28 sm:pb-32">
        <HeroSection />
        <CampusSplit />
        <BentoHighlights />
        <TrustStats />
        <LocationsMap />
        <LeadMagnet />
        <ContactFlow />
      </main>
      <SiteFooter />
      <LocaleThemeDock />
      <WhatsAppDock />
    </>
  );
}
