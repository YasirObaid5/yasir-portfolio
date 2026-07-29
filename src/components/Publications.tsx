"use client";

import { useMemo, useState } from "react";
import { CONTACT, PUBLICATIONS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Section from "./Section";

type Filter = "all" | "journal" | "conference";

export default function Publications() {
  const { t, ui } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () =>
      filter === "all"
        ? PUBLICATIONS
        : PUBLICATIONS.filter((p) => p.type === filter),
    [filter],
  );

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: ui("pubAll"), count: PUBLICATIONS.length },
    {
      key: "journal",
      label: ui("pubJournal"),
      count: PUBLICATIONS.filter((p) => p.type === "journal").length,
    },
    {
      key: "conference",
      label: ui("pubConference"),
      count: PUBLICATIONS.filter((p) => p.type === "conference").length,
    },
  ];

  return (
    <Section
      id="publications"
      index="04"
      eyebrow={ui("pubEyebrow")}
      title={ui("pubTitle")}
      lead={ui("pubLead")}
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 border-b border-ink pb-3">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`label border-b pb-0.5 transition ${
                filter === f.key
                  ? "border-pine text-pine"
                  : "border-transparent hover:text-ink"
              }`}
            >
              {f.label}{" "}
              <span className="numeral opacity-70">({f.count})</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Set as a numbered reference list, the way a paper lists its own. */}
      <ol>
        {shown.map((p, i) => {
          const body = (
            <div className="grid gap-x-12 gap-y-2.5 py-7 md:grid-cols-12">
              <div className="flex items-baseline gap-3 md:col-span-2 md:block">
                <p className="numeral text-[1.35rem] font-semibold leading-none">
                  {p.year}
                </p>
                <p className="label mt-0 md:mt-2">
                  {p.type === "journal" ? ui("pubJournal") : ui("pubConference")}
                </p>
              </div>

              <div className="md:col-span-10 lg:col-span-9">
                <h3 className="max-w-3xl text-[1.02rem] font-semibold leading-[1.5] text-pretty group-hover:text-pine">
                  {t(p.title)}
                </h3>
                <p className="mt-2 max-w-3xl text-[0.85rem] leading-[1.6] text-faint">
                  {p.authors}
                </p>
                <p className="mt-1 text-[0.88rem] italic text-muted">
                  {t(p.venue)}
                </p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="label">{t(p.topic)}</span>
                  {p.doi && (
                    <span
                      dir="ltr"
                      className="text-[0.78rem] text-pine underline decoration-1 underline-offset-[0.22em]"
                    >
                      doi:{p.doi}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );

          return (
            <Reveal
              key={`${p.year}-${p.title.en}`}
              delay={Math.min(i, 5) * 40}
              as="li"
              className="border-b border-rule"
            >
              {p.doi ? (
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {body}
                </a>
              ) : (
                <div className="group">{body}</div>
              )}
            </Reveal>
          );
        })}
      </ol>

      <Reveal>
        <a
          href={CONTACT.researchgate}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-8 inline-block border-b border-rule-firm pb-0.5 text-ink transition hover:border-pine hover:text-pine"
        >
          {ui("pubOnRg")} →
        </a>
      </Reveal>
    </Section>
  );
}
