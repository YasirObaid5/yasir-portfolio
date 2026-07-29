"use client";

import { EXPERTISE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Expertise() {
  const { t, tl, ui } = useLang();

  return (
    <Section
      id="expertise"
      index="02"
      eyebrow={ui("expertiseEyebrow")}
      title={ui("expertiseTitle")}
      lead={ui("expertiseLead")}
    >
      <dl className="border-t border-ink">
        {EXPERTISE.map((e, i) => (
          <Reveal
            key={e.icon}
            delay={Math.min(i, 4) * 45}
            className="grid gap-x-12 gap-y-3 border-b border-rule py-7 md:grid-cols-12"
          >
            <dt className="flex items-baseline gap-3 md:col-span-4 lg:col-span-3">
              <span className="numeral shrink-0 text-[0.7rem] font-semibold text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.08rem] font-semibold leading-snug tracking-tight">
                {t(e.title)}
              </span>
            </dt>

            <dd className="md:col-span-8 lg:col-span-7">
              <p className="text-[0.94rem] leading-[1.7] text-muted text-pretty">
                {t(e.body)}
              </p>
              <p className="mt-2.5 text-[0.8rem] text-faint">
                {tl(e.tags).join(" · ")}
              </p>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
