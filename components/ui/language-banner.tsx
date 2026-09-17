"use client";

import { Languages, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";

export function LanguageBanner() {
  const { lang, setLang, showBanner, dismissBanner } = useLanguage();
  const t = uiStrings[lang].languageBanner;

  return (
    <AnimatePresence>
      {showBanner ? (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label={t.question}
          className="fixed inset-x-0 top-0 z-50 flex h-12 items-center border-b border-white/10 bg-zinc-900/95 backdrop-blur-lg"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-nowrap items-center justify-between gap-3 overflow-x-auto px-4 md:px-6">
            <div className="flex shrink-0 items-center gap-2 text-xs text-zinc-200 sm:text-sm">
              <Languages className="h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
              <span className="whitespace-nowrap">{t.question}</span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setLang(lang === "es" ? "en" : "es");
                  dismissBanner();
                }}
                className="whitespace-nowrap rounded-full bg-violet-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-violet-400"
              >
                {t.primary}
              </button>
              <button
                type="button"
                onClick={dismissBanner}
                className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10"
              >
                {t.secondary}
              </button>
              <button
                type="button"
                onClick={dismissBanner}
                aria-label={t.dismiss}
                className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
