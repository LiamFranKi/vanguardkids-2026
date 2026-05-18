"use client";

import { motion } from "framer-motion";
import { LocaleThemeControls } from "@/components/ui/LocaleThemeControls";

/** Flotante en desktop; en móvil los controles van en SiteHeader */
export function LocaleThemeDock() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      className="fixed left-[max(0.75rem,env(safe-area-inset-left,0px))] top-[max(5.5rem,calc(4.75rem+env(safe-area-inset-top,0px)))] z-[55] hidden lg:block"
    >
      <LocaleThemeControls layout="column" />
    </motion.aside>
  );
}
