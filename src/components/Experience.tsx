"use client";

import { EDUCATION, EXPERIENCE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  const { t, tl, ui } = useLang();

  return (
    <Section
      id="experience"
      index="03"
      eyebrow={ui("experienceEyebrow")}
      title={ui("experienceTitle")}
    >
      <ol className="border-t border-ink">
        {EXPERIENCE.map((role, i) => (
          <Reveal
            key={role.title.en}
            delay={i * 60}
            as="li"
            className="grid gap-x-12 gap-y-4 border-b border-rule py-9 md:grid-cols-12"
          >
            <div className="md:col-span-3 lg:col-span-2">
              <p className="numeral text-[0.92rem] font-semibold">
                {t(role.period)}
              </p>
              {role.current && (
                <p className="label mt-1.5 text-pine">{ui("current")}</p>
              )}
            </div>

            <div className="md:col-span-9 lg:col-span-8">
              <h3 className="font-display text-[1.3rem] font-semibold leading-snug tracking-tight sm:text-[1.45rem]">
                {t(role.title)}
              </h3>
              <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.6] text-faint">
                {t(role.org)}
              </p>
              <ul className="mt-5 max-w-2xl space-y-2.5">
                {tl(role.points).map((p) => (
                  <li
                    key={p}
                    className="grid grid-cols-[0.85rem_1fr] gap-x-1 text-[0.94rem] leading-[1.7] text-muted text-pretty"
                  >
                    <span aria-hidden className="text-faint">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Education ---------------------------------------------------- */}
      <div className="mt-16">
        <Reveal>
          <h3 className="label border-b border-ink pb-2">
            {ui("educationEyebrow")}
          </h3>
        </Reveal>

        <ol>
          {EDUCATION.map((e, i) => (
            <Reveal
              key={e.year}
              delay={i * 50}
              as="li"
              className="grid gap-x-12 gap-y-2 border-b border-rule py-6 md:grid-cols-12"
            >
              <p className="numeral text-[0.92rem] font-semibold md:col-span-3 lg:col-span-2">
                {e.year}
              </p>
              <div className="md:col-span-9 lg:col-span-8">
                <h4 className="text-[1rem] font-semibold leading-snug">
                  {t(e.degree)}
                </h4>
                <p className="mt-1 text-[0.88rem] text-muted">{t(e.school)}</p>
                {e.note && (
                  <p className="mt-2 text-[0.85rem] italic leading-relaxed text-faint">
                    {t(e.note)}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
