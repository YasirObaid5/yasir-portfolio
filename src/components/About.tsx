"use client";

import Image from "next/image";
import { INTERESTS, LANGUAGES, PROFILE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import { StarMark } from "./Arabesque";

export default function About() {
  const { t, tl, ui } = useLang();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-rule py-16 md:py-24"
    >
      <span className="fleuron start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
        <StarMark />
      </span>

      <div className="measure">
        <Reveal>
          <div className="grid gap-x-12 gap-y-4 md:grid-cols-12">
            <div className="md:col-span-3 lg:col-span-2">
              <p className="flex items-baseline gap-3">
                <span className="numeral text-sm font-semibold text-pine">01</span>
                <span className="label">{ui("aboutEyebrow")}</span>
              </p>
            </div>
            <div className="md:col-span-9 lg:col-span-10">
              <h2 className="font-display max-w-3xl text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.015em] text-balance sm:text-[2.35rem]">
                {ui("aboutTitle")}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-12 md:mt-14 md:grid-cols-12">
          {/* body copy ------------------------------------------------- */}
          <div className="md:col-span-9 lg:col-start-3 lg:col-span-6">
            <Reveal>
              <p className="text-[1.05rem] leading-[1.85] text-muted text-pretty">
                {t(PROFILE.summary)}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-12">
                <h3 className="label border-b border-ink pb-2">
                  {ui("aboutLanguages")}
                </h3>
                <dl className="divide-y divide-rule">
                  {LANGUAGES.map((l) => (
                    <div
                      key={l.name.en}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
                    >
                      <dt className="text-[0.95rem] font-semibold">
                        {t(l.name)}
                      </dt>
                      <dd className="text-[0.85rem] text-muted">{t(l.level)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10">
                <h3 className="label border-b border-ink pb-2">
                  {ui("aboutInterests")}
                </h3>
                <p className="pt-3.5 text-[0.92rem] text-muted">
                  {tl(INTERESTS).join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* plates ---------------------------------------------------- */}
          <Reveal delay={60} className="md:col-span-3 lg:col-span-4">
            <figure>
              <div className="plate overflow-hidden">
                <Image
                  src="/images/portrait-office.jpg"
                  alt={t(PROFILE.name)}
                  width={671}
                  height={1451}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="aspect-3/4 w-full object-cover object-[center_38%]"
                />
              </div>
              <figcaption className="mt-3 border-t border-rule pt-2.5 text-[0.78rem] leading-snug text-faint">
                {t({
                  en: "Livestock Production Research Centre, Muscat.",
                  ar: "مركز بحوث الإنتاج الحيواني، مسقط.",
                })}
              </figcaption>
            </figure>

            <figure className="mt-10">
              <div className="plate overflow-hidden">
                <Image
                  src="/images/field-singosari.jpg"
                  alt={t({
                    en: "At the IsDB Artificial Insemination Management Workshop, Singosari, Indonesia, 2025",
                    ar: "خلال ورشة إدارة التلقيح الاصطناعي، البنك الإسلامي للتنمية، سينجوساري، إندونيسيا ٢٠٢٥",
                  })}
                  width={2000}
                  height={1500}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 border-t border-rule pt-2.5 text-[0.78rem] leading-snug text-faint">
                {t({
                  en: "IsDB Artificial Insemination Management Workshop — Singosari, Indonesia, 2025.",
                  ar: "ورشة إدارة التلقيح الاصطناعي — البنك الإسلامي للتنمية، إندونيسيا ٢٠٢٥.",
                })}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
