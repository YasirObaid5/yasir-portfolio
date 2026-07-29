"use client";

import { CONTACT, PROJECTS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  const { t, ui } = useLang();

  return (
    <Section
      id="projects"
      index="06"
      eyebrow={ui("projectsEyebrow")}
      title={ui("projectsTitle")}
      lead={ui("projectsLead")}
    >
      <ol className="border-t border-ink">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.name.en}
            delay={Math.min(i, 4) * 45}
            as="li"
            className="grid gap-x-12 gap-y-4 border-b border-rule py-9 md:grid-cols-12"
          >
            <div className="flex items-baseline gap-3 md:col-span-4 lg:col-span-3">
              <span className="numeral shrink-0 text-[0.7rem] font-semibold text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[1.15rem] font-semibold leading-snug tracking-tight">
                  {t(p.name)}
                </h3>
                {p.featured && (
                  <p className="label mt-1.5 text-pine">
                    {t({ en: "Flagship", ar: "المشروع الأبرز" })}
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-7">
              <p className="text-[0.94rem] leading-[1.72] text-muted text-pretty">
                {t(p.body)}
              </p>
              <p className="mt-3 text-[0.8rem] text-faint">
                {p.stack.join(" · ")}
              </p>

              {/* Internal systems carry neither link; skip the row entirely. */}
              {(p.live || p.repo) && (
                <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label border-b border-rule-firm pb-0.5 text-ink transition hover:border-pine hover:text-pine"
                    >
                      {ui("projectLive")} →
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label border-b border-transparent pb-0.5 transition hover:border-rule-firm hover:text-ink"
                    >
                      {ui("projectCode")}
                    </a>
                  )}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-8 inline-block border-b border-rule-firm pb-0.5 text-ink transition hover:border-pine hover:text-pine"
        >
          {ui("projectsMore")} →
        </a>
      </Reveal>
    </Section>
  );
}
