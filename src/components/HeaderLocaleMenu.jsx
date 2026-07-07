import React, { useEffect, useRef, useState } from "react";
import { APP_LOCALES, getLocaleLabelKey, useI18n } from "../i18n";

function LocaleGlobeIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export default function HeaderLocaleMenu() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", onPointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const selectLocale = (next) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className="app-header-locale-wrap" ref={menuRef}>
      <button
        type="button"
        className={`app-header-locale-toggle${open ? " is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        title={t("locale.language")}
        aria-label={t("locale.language")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="app-header-locale-icon" aria-hidden>
          <LocaleGlobeIcon />
        </span>
      </button>
      {open && (
        <div
          className="app-header-locale-menu"
          role="listbox"
          aria-label={t("locale.language")}
        >
          {APP_LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={locale === code}
              className={
                "app-header-locale-option" + (locale === code ? " is-active" : "")
              }
              onClick={() => selectLocale(code)}
            >
              {t(getLocaleLabelKey(code))}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
