"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const THEME_KEY = "yas-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { ui } = useLang();
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    setTheme(
      (document.documentElement.getAttribute("data-theme") as
        | "dark"
        | "light") ?? "light",
    );
  }, []);

  function flip() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode — the choice simply won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={flip}
      aria-label={ui("switchTheme")}
      title={ui("switchTheme")}
      className={`label border-b border-transparent pb-0.5 transition hover:border-rule-firm hover:text-ink ${className}`}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, ui } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui("switchLang")}
      title={ui("switchLang")}
      className={`label border-b border-rule-firm pb-0.5 text-ink transition hover:text-pine ${className}`}
    >
      {/* The Arabic glyph needs more optical size than the Latin label. */}
      <span
        className={
          lang === "en" ? "font-arabic text-[1.05rem] leading-none" : ""
        }
      >
        {ui("switchLangShort")}
      </span>
    </button>
  );
}
