"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import type { Locale } from "@/lib/types";

const LANG_KEY = "santechdev-lang";
const BANNER_SEEN_KEY = "santechdev-lang-banner-seen";

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  showBanner: boolean;
  dismissBanner: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("es");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_KEY);
      if (stored === "es" || stored === "en") {
        setLangState(stored);
      }

      const bannerSeen = window.localStorage.getItem(BANNER_SEEN_KEY);
      if (!bannerSeen) {
        setShowBanner(true);
      }
    } catch {
      // localStorage no disponible (modo privado, etc.)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_KEY, next);
    } catch {
      // localStorage no disponible
    }
  }, []);

  const dismissBanner = useCallback(() => {
    setShowBanner(false);
    try {
      window.localStorage.setItem(BANNER_SEEN_KEY, "1");
    } catch {
      // localStorage no disponible
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, showBanner, dismissBanner }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
}
