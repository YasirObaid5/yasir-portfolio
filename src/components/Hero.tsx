"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, PROFILE, STATS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import { ArabesqueField } from "./Arabesque";

export default function Hero() {
  const { t, ui } = useLang();

  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-32">
      <ArabesqueField
        id="arabesque-hero"
        motif="khatim"
        className="arabesque arabesque-corner anchor-top-start inset-x-0 top-0 -z-10 h-[52rem]"
      />

      <div className="measure">
        {/* masthead rule ------------------------------------------------ */}
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink pb-3">
            <p className="label text-ink">{t(PROFILE.role)}</p>
            <p className="label">{ui("heroKicker")}</p>
          </div>
        </Reveal>

        {/* name + portrait ---------------------------------------------- */}
        <div className="grid gap-x-12 gap-y-10 pt-10 md:grid-cols-12 md:pt-14">
          <div className="md:col-span-7 lg:col-span-7">
            <Reveal>
              <h1 className="font-display text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.028em] sm:text-[4rem] lg:text-[4.75rem]">
                {t(PROFILE.shortName)}
              </h1>
            </Reveal>

            <Reveal delay={70}>
              <p className="mt-7 max-w-lg text-[1.02rem] font-medium leading-[1.55]">
                {t(PROFILE.title)}
              </p>
              <p className="mt-2 max-w-lg text-[0.88rem] leading-[1.65] text-faint">
                {t(PROFILE.org)}
              </p>
            </Reveal>

            <Reveal delay={130}>
              <div className="mt-8 border-t border-rule pt-8">
                <p className="max-w-xl text-[1.02rem] leading-[1.75] text-muted text-pretty">
                  {t(PROFILE.tagline)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/cv"
                  className="border border-ink bg-ink px-6 py-3 text-[0.85rem] font-semibold text-paper transition hover:bg-transparent hover:text-ink"
                >
                  {ui("heroCtaPrimary")}
                </Link>
                <a
                  href="#contact"
                  className="border border-rule-firm px-6 py-3 text-[0.85rem] font-semibold transition hover:border-ink"
                >
                  {ui("heroCtaSecondary")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
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
                      className="label border-b border-rule pb-0.5 transition hover:border-pine hover:text-pine"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* portrait plate --------------------------------------------- */}
          <Reveal delay={100} className="md:col-span-5 lg:col-start-9 lg:col-span-4">
            <figure>
              <div className="plate overflow-hidden">
                <Image
                  src="/images/portrait-about.png"
                  alt={t(PROFILE.name)}
                  width={896}
                  height={1152}
                  priority
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
                  className="aspect-4/5 w-full object-cover object-[center_22%]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-rule pt-2.5">
                <span className="text-[0.78rem] leading-snug text-muted">
                  {t(PROFILE.name)}
                </span>
                <span className="label shrink-0">
                  {t({ en: "MSc · RUDN", ar: "ماجستير · RUDN" })}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* key figures --------------------------------------------------- */}
        <Reveal delay={280}>
          <dl className="mt-16 grid grid-cols-2 border-t border-ink pt-6 md:mt-20 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.value}
                className={`py-3 md:py-1 ${
                  i > 0 ? "md:border-s md:border-rule md:ps-6" : ""
                } ${i % 2 === 1 ? "ps-6 border-s border-rule md:ps-6" : ""}`}
              >
                <dt className="sr-only">{t(s.label)}</dt>
                <dd>
                  <span className="numeral block text-[2.1rem] font-semibold leading-none tracking-tight">
                    {s.value}
                  </span>
                  <span className="mt-2.5 block max-w-[13rem] text-[0.8rem] leading-snug text-muted">
                    {t(s.label)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
