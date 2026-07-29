"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { PROFILE } from "@/lib/content";
import { IconMenu, IconX } from "./Icons";
import { LangToggle, ThemeToggle } from "./Toggles";

const LINKS = [
  { href: "#about", key: "navAbout" },
  { href: "#expertise", key: "navExpertise" },
  { href: "#experience", key: "navExperience" },
  { href: "#publications", key: "navPublications" },
  { href: "#projects", key: "navProjects" },
  { href: "#contact", key: "navContact" },
] as const;

export default function Nav() {
  const { t, ui } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      // Near the top nothing is "current" — the masthead is.
      if (y < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 200) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-100 focus:bg-pine focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        {ui("skipToContent")}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          // Opaque, not translucent: the arabesque field sits directly behind
          // the header and would otherwise read through it as stray rules.
          scrolled
            ? "border-b border-rule bg-paper"
            : "border-b border-transparent bg-paper"
        }`}
      >
        <div className="measure">
          <div className="flex h-14 items-center justify-between gap-6 md:h-16">
            <Link
              href="/"
              className="font-display shrink-0 text-[0.98rem] font-semibold tracking-tight transition hover:text-pine"
            >
              {t(PROFILE.shortName)}
            </Link>

            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary"
            >
              {LINKS.map((l) => {
                const id = l.href.slice(1);
                const on = active === id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    aria-current={on ? "true" : undefined}
                    className={`border-b pb-0.5 text-[0.82rem] transition ${
                      on
                        ? "border-pine text-pine"
                        : "border-transparent text-muted hover:text-ink"
                    }`}
                  >
                    {ui(l.key)}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-5">
              <ThemeToggle className="hidden sm:inline-block" />
              <LangToggle />
              <Link
                href="/cv"
                className="hidden border-b border-rule-firm pb-0.5 text-[0.82rem] font-medium transition hover:border-pine hover:text-pine md:inline-block"
              >
                {ui("navCv")}
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={ui("menu")}
                className="text-muted transition hover:text-ink lg:hidden"
              >
                <IconMenu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-paper transition-opacity duration-250 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col px-6 py-5 transition-opacity duration-250 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-rule pb-4">
            <span className="font-display text-[0.98rem] font-semibold">
              {t(PROFILE.shortName)}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={ui("close")}
              className="text-muted"
            >
              <IconX className="size-5" />
            </button>
          </div>

          <nav className="mt-2 flex flex-col" aria-label="Mobile">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-rule py-5"
              >
                <span className="numeral text-xs font-semibold text-pine">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight">
                  {ui(l.key)}
                </span>
              </a>
            ))}
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-rule py-5"
            >
              <span className="numeral text-xs font-semibold text-pine">07</span>
              <span className="font-display text-xl font-semibold tracking-tight">
                {ui("navCv")}
              </span>
            </Link>
          </nav>

          <div className="mt-auto pt-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
