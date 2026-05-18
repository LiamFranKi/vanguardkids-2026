"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/i18n/i18n-context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="vanguardkids-theme"
    >
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
