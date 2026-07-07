import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { en } from "./locales/en";
import { zhCN } from "./locales/zh-CN";
import { zhTW } from "./locales/zh-TW";
import { translateToolDescription } from "./toolDescriptions";

export const APP_LOCALE_KEY = "app-locale";
export const APP_LOCALES = ["en", "zh-CN", "zh-TW"];

const dictionaries = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW
};

const LOCALE_LABEL_KEYS = {
  en: "locale.english",
  "zh-CN": "locale.simplifiedChinese",
  "zh-TW": "locale.traditionalChinese"
};

export function isAppLocale(value) {
  return APP_LOCALES.includes(value);
}

export function getStoredAppLocale() {
  try {
    const stored = localStorage.getItem(APP_LOCALE_KEY);
    return isAppLocale(stored) ? stored : "en";
  } catch {
    return "en";
  }
}

export function getDocumentLang(locale) {
  if (locale === "zh-CN") return "zh-CN";
  if (locale === "zh-TW") return "zh-TW";
  return "en";
}

export function translate(locale, key, params) {
  const template = dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key;
  if (!params) return template;
  return Object.entries(params).reduce(
    (text, [name, value]) => text.replaceAll(`{{${name}}}`, value),
    template
  );
}

export function getLocaleLabelKey(locale) {
  return LOCALE_LABEL_KEYS[locale];
}

export function getCategoryTitleKey(categoryId) {
  return `category.${categoryId}`;
}

const I18nContext = createContext(null);

function applyDocumentLocale(locale) {
  document.documentElement.lang = getDocumentLang(locale);
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getStoredAppLocale);

  useEffect(() => {
    applyDocumentLocale(locale);
    try {
      localStorage.setItem(APP_LOCALE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key, params) => translate(locale, key, params),
      tTool: (categoryId, toolName, fallback) =>
        translateToolDescription(locale, categoryId, toolName, fallback)
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
