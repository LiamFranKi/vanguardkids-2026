import type { Metadata, Viewport } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { brand, brandAssets } from "@/lib/site";
import { messages } from "@/i18n/messages";
import { AppProviders } from "@/providers/app-providers";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const metaEn = messages.en;

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s · ${brand.name}`,
  },
  description: metaEn.brandDescription,
  metadataBase: new URL("https://vanguardkids.com"),
  openGraph: {
    title: brand.name,
    description: metaEn.brandDescription,
    locale: "en_US",
    type: "website",
    images: [{ url: brandAssets.logo, alt: brand.name }],
  },
  icons: {
    icon: [{ url: brandAssets.favicon, type: "image/png" }],
    apple: brandAssets.favicon,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffbf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-dvh min-h-[100dvh] flex flex-col bg-cream pb-[env(safe-area-inset-bottom,0px)] text-ink transition-colors duration-300 touch-manipulation">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
