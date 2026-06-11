import {
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "../types";
import { LanguageContext, uiCopy } from "./language";

const STORAGE_KEY = "around-locale";

function getInitialLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "ko" || saved === "en") {
    return saved;
  }
  return "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, copy: uiCopy[locale] }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
