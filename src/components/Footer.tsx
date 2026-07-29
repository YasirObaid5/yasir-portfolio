"use client";

import Link from "next/link";
import { CONTACT, PROFILE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArabesqueField } from "./Arabesque";

export default function Footer() {
  const { t, ui } = useLang();
  const year = 2026;

  return (
    <footer className="relative isolate overflow-hidden border-t border-ink py-12">
      <ArabesqueField
        id="arabesque-footer"
        motif="rosette12"
        className="arabesque arabesque-corner arabesque-phase-b anchor-bottom-end inset-0 -z-10"
      />

      <div className="measure">
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="font-display text-[1.05rem] font-semibold tracking-tight">
              {t(PROFILE.name)}
            </p>
            <p className="mt-2 max-w-sm text-[0.85rem] leading-[1.6] text-muted">
              {t(PROFILE.title)}
            </p>
            <p className="mt-1 text-[0.82rem] text-faint">
              {t(PROFILE.location)}
            </p>
          </div>

          <nav
            className="md:col-span-3 lg:col-start-8 lg:col-span-2"
            aria-label="Footer"
          >
            <p className="label border-b border-rule pb-2">
              {t({ en: "Elsewhere", ar: "روابط" })}
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                { href: CONTACT.linkedin, label: "LinkedIn" },
                { href: CONTACT.researchgate, label: "ResearchGate" },
                { href: CONTACT.github, label: "GitHub" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.85rem] text-muted transition hover:text-pine"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 lg:col-span-3">
            <p className="label border-b border-rule pb-2">
              {t({ en: "Document", ar: "المستند" })}
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link
                  href="/cv"
                  className="text-[0.85rem] text-muted transition hover:text-pine"
                >
                  {ui("cvTitle")}
                </Link>
              </li>
              <li>
                <a
                  href="#top"
                  className="text-[0.85rem] text-muted transition hover:text-pine"
                >
                  {ui("backToTop")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1.5 border-t border-rule pt-5 text-[0.78rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t(PROFILE.shortName)}. {ui("footerRights")}
          </p>
          <p>{ui("footerBuilt")}</p>
        </div>
      </div>
    </footer>
  );
}
