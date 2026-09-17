"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { uiStrings } from "@/lib/i18n/ui-strings";

export function SkipLink() {
  const { lang } = useLanguage();

  return (
    <a
      href="#inicio"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-violet-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {uiStrings[lang].skipToContent}
    </a>
  );
}
