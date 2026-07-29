"use client";

import { useState } from "react";
import { CONTACT, PROFILE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

function CopyLink({ value }: { value: string }) {
  const { ui } = useLang();
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* clipboard blocked — the value is selectable on screen anyway */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="label shrink-0 border-b border-transparent pb-0.5 transition hover:border-rule-firm hover:text-ink"
    >
      {done ? ui("contactCopied") : ui("contactCopy")}
    </button>
  );
}

export default function Contact() {
  const { t, ui } = useLang();

  const rows = [
    {
      label: ui("contactEmailPersonal"),
      value: CONTACT.emailPersonal,
      href: `mailto:${CONTACT.emailPersonal}`,
      copy: true,
    },
    {
      label: ui("contactEmailOfficial"),
      value: CONTACT.emailOfficial,
      href: `mailto:${CONTACT.emailOfficial}`,
      copy: true,
    },
    {
      label: ui("contactPhone"),
      value: CONTACT.phone,
      href: `tel:${CONTACT.phoneHref}`,
      copy: true,
    },
    { label: ui("contactAddress"), value: t(CONTACT.address), copy: false },
  ];

  return (
    <Section
      id="contact"
      index="07"
      eyebrow={ui("contactEyebrow")}
      title={ui("contactTitle")}
      lead={ui("contactLead")}
    >
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-7 lg:col-start-3 lg:col-span-6">
          <dl className="border-t border-ink">
            {rows.map((r) => (
              <Reveal
                key={r.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4"
              >
                <dt className="label w-full sm:w-32 sm:shrink-0">{r.label}</dt>
                <dd className="min-w-0 flex-1">
                  {r.href ? (
                    <a
                      href={r.href}
                      dir="ltr"
                      className="link block truncate text-[0.95rem] ltr:text-start rtl:text-end"
                    >
                      {r.value}
                    </a>
                  ) : (
                    <span className="text-[0.95rem] text-muted">{r.value}</span>
                  )}
                </dd>
                {r.copy && <CopyLink value={r.value} />}
              </Reveal>
            ))}
          </dl>

          <Reveal delay={80}>
            <a
              href={`mailto:${CONTACT.emailPersonal}`}
              className="mt-8 inline-block border border-ink bg-ink px-6 py-3 text-[0.85rem] font-semibold text-paper transition hover:bg-transparent hover:text-ink"
            >
              {ui("heroCtaSecondary")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={60} className="md:col-span-5 lg:col-span-4">
          <p className="label border-b border-ink pb-2">
            {t({ en: "Currently", ar: "الوضع الحالي" })}
          </p>
          <p className="pt-4 text-[0.95rem] leading-[1.75] text-muted text-pretty">
            {t(PROFILE.availability)}.{" "}
            {t({
              en: "Based in Muscat and working across the Gulf and beyond — reproductive technology programmes, laboratory set-up, technical training and peer review.",
              ar: "مقيم في مسقط وأعمل في الخليج وخارجه — برامج تقنيات التكاثر، وتأسيس المختبرات، والتدريب الفني، والمراجعة العلمية.",
            })}
          </p>

          <ul className="mt-8 border-t border-rule">
            {[
              { href: CONTACT.linkedin, label: "LinkedIn" },
              { href: CONTACT.researchgate, label: "ResearchGate" },
              { href: CONTACT.github, label: "GitHub" },
            ].map((s) => (
              <li key={s.label} className="border-b border-rule">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 text-[0.9rem] transition hover:text-pine"
                >
                  {s.label}
                  <span aria-hidden className="text-faint rtl:-scale-x-100">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
