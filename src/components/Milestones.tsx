"use client";

import { MILESTONES, type Milestone } from "@/lib/content";
import { useLang, type UI } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

const KIND_KEY: Record<Milestone["kind"], keyof typeof UI> = {
  training: "kindTraining",
  conference: "kindConference",
  workshop: "kindWorkshop",
  committee: "kindCommittee",
};

export default function Milestones() {
  const { t, ui } = useLang();

  return (
    <Section
      id="development"
      index="05"
      eyebrow={ui("milestonesEyebrow")}
      title={ui("milestonesTitle")}
    >
      {/* A record, set as a register rather than a grid of cards. */}
      <ol className="border-t border-ink">
        {MILESTONES.map((m, i) => (
          <Reveal
            key={`${m.year}-${m.title.en}`}
            delay={Math.min(i, 6) * 35}
            as="li"
            className="grid gap-x-12 gap-y-2 border-b border-rule py-6 md:grid-cols-12"
          >
            <div className="flex items-baseline gap-4 md:col-span-3 lg:col-span-2 md:block">
              <p className="numeral text-[1.05rem] font-semibold">{m.year}</p>
              <p className="label md:mt-1.5">{ui(KIND_KEY[m.kind])}</p>
            </div>

            <div className="md:col-span-9 lg:col-span-8">
              <h3 className="max-w-2xl text-[0.98rem] font-semibold leading-[1.5] text-pretty">
                {t(m.title)}
              </h3>
              <p className="mt-1.5 text-[0.86rem] leading-[1.6] text-muted">
                {t(m.host)}
              </p>
            </div>

            <p className="text-[0.8rem] leading-snug text-faint md:col-span-12 lg:col-span-2 lg:text-end">
              {t(m.place)}
              <span className="block">{t(m.date)}</span>
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
