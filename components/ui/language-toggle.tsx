"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white ${className}`}
    >
      <span className={lang === "es" ? "text-white" : "text-zinc-500"}>ES</span>
      <span className="text-zinc-600">/</span>
      <span className={lang === "en" ? "text-white" : "text-zinc-500"}>EN</span>
    </button>
  );
}
