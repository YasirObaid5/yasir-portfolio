"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  EXPERTISE,
  LANGUAGES,
  MILESTONES,
  PROFILE,
  PUBLICATIONS,
} from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArabesqueField, StarMark } from "./Arabesque";
import { IconChevronLeft, IconPrint } from "./Icons";
import { LangToggle, ThemeToggle } from "./Toggles";

function Rubric({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="label mb-4 border-b border-ink pb-1.5 text-ink print:mb-3 print:text-[8pt]">
      {children}
    </h2>
  );
}

export default function CvDocument() {
  const { t, tl, ui, lang } = useLang();

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <ArabesqueField
        id="arabesque-cv"
        motif="octagon"
        className="arabesque arabesque-corner anchor-top-end inset-x-0 top-0 -z-10 h-[44rem]"
      />

      {/* toolbar — never printed ------------------------------------- */}
      <div className="no-print sticky top-0 z-50 border-b border-rule bg-paper">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.82rem] text-muted transition hover:text-pine"
          >
            <IconChevronLeft className="size-4 rtl:-scale-x-100" />
            {ui("cvBack")}
          </Link>

          <div className="flex items-center gap-5">
            <ThemeToggle className="hidden sm:inline-block" />
            <LangToggle />
            <a
              href={
                lang === "ar"
                  ? "/cv/Yasir-Al-Shukaili-CV-AR.pdf"
                  : "/cv/Yasir-Al-Shukaili-CV-EN.pdf"
              }
              download
              className="label border-b border-rule-firm pb-0.5 text-ink transition hover:border-pine hover:text-pine"
            >
              {ui("cvDownload")}
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-[0.8rem] font-semibold text-paper transition hover:bg-transparent hover:text-ink"
            >
              <IconPrint className="size-4" />
              <span className="hidden sm:inline">{ui("cvPrint")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* the document ------------------------------------------------- */}
      <article className="mx-auto max-w-3xl px-6 py-14 print:max-w-none print:px-0 print:py-0">
        {/* masthead line */}
        <div className="mb-6 flex items-center gap-3 print:mb-4">
          <StarMark className="size-3 shrink-0" />
          <span className="h-px flex-1 bg-rule" />
          <span className="label shrink-0">{ui("cvTitle")}</span>
        </div>

        {/* letterhead */}
        <header className="print-avoid-break grid grid-cols-[1fr_auto] items-end gap-8 border-b-2 border-ink pb-5">
          <div className="min-w-0">
            <h1 className="font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.022em] print:text-[21pt]">
              {t(PROFILE.name)}
            </h1>
            <p className="mt-3 text-[0.98rem] font-semibold print:text-[10.5pt]">
              {t(PROFILE.title)}
            </p>
            <p className="mt-1.5 max-w-xl text-[0.82rem] leading-[1.55] text-faint print:text-[8pt]">
              {t(PROFILE.org)}
            </p>
          </div>

          <Image
            src="/images/avatar.png"
            alt={t(PROFILE.name)}
            width={400}
            height={400}
            className="plate size-24 shrink-0 object-cover object-top print:size-[20mm]"
          />
        </header>

        {/* particulars */}
        <section className="print-avoid-break grid grid-cols-1 gap-x-10 border-b border-rule py-4 sm:grid-cols-2">
          {[
            [ui("contactEmailPersonal"), CONTACT.emailPersonal, true],
            [ui("contactPhone"), CONTACT.phone, true],
            [ui("contactEmailOfficial"), CONTACT.emailOfficial, true],
            [ui("contactAddress"), t(CONTACT.address), false],
            [ui("cvDob"), ui("cvDobValue"), false],
            [ui("cvNationality"), ui("cvNationalityValue"), false],
            ["LinkedIn", CONTACT.linkedin.replace("https://www.", ""), true],
            [
              "ResearchGate",
              "researchgate.net/profile/Yasir-Obaid-Thani-Al-Shukaili",
              true,
            ],
          ].map(([label, value, ltr]) => (
            <p
              key={String(label)}
              className="flex gap-2 py-1 text-[0.82rem] print:py-0.5 print:text-[8pt]"
            >
              <span className="label shrink-0">{label}</span>
              <span
                dir={ltr ? "ltr" : undefined}
                className="min-w-0 break-words text-muted"
              >
                {value}
              </span>
            </p>
          ))}
        </section>

        {/* profile */}
        <section className="print-avoid-break pt-7">
          <Rubric>{ui("cvProfile")}</Rubric>
          <p className="text-[0.9rem] leading-[1.72] text-muted text-pretty print:text-[9pt] print:leading-[1.5]">
            {t(PROFILE.summary)}
          </p>
        </section>

        {/* competencies */}
        <section className="print-avoid-break pt-8">
          <Rubric>{ui("cvKeySkills")}</Rubric>
          <dl className="divide-y divide-rule">
            {EXPERTISE.map((e) => (
              <div
                key={e.icon}
                className="grid gap-x-6 py-2 sm:grid-cols-[13rem_1fr] print:py-1"
              >
                <dt className="text-[0.86rem] font-semibold print:text-[8.8pt]">
                  {t(e.title)}
                </dt>
                <dd className="text-[0.82rem] leading-snug text-faint print:text-[8.2pt]">
                  {tl(e.tags).join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* experience */}
        <section className="pt-8">
          <Rubric>{ui("experienceEyebrow")}</Rubric>
          <div className="space-y-6">
            {EXPERIENCE.map((r) => (
              <div key={r.title.en} className="print-avoid-break">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h3 className="text-[0.98rem] font-bold print:text-[10pt]">
                    {t(r.title)}
                  </h3>
                  <span className="numeral text-[0.82rem] font-semibold print:text-[8.5pt]">
                    {t(r.period)}
                  </span>
                </div>
                <p className="mt-1 text-[0.8rem] leading-[1.5] text-faint print:text-[8pt]">
                  {t(r.org)}
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {tl(r.points).map((p) => (
                    <li
                      key={p}
                      className="grid grid-cols-[0.8rem_1fr] text-[0.86rem] leading-[1.6] text-muted print:text-[8.8pt] print:leading-[1.45]"
                    >
                      <span aria-hidden className="text-faint">
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* education */}
        <section className="print-avoid-break pt-8">
          <Rubric>{ui("educationEyebrow")}</Rubric>
          <div className="space-y-4">
            {EDUCATION.map((e) => (
              <div key={e.year}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h3 className="text-[0.92rem] font-bold print:text-[9.5pt]">
                    {t(e.degree)}
                  </h3>
                  <span className="numeral text-[0.82rem] font-semibold print:text-[8.5pt]">
                    {e.year}
                  </span>
                </div>
                <p className="mt-0.5 text-[0.85rem] text-muted print:text-[8.8pt]">
                  {t(e.school)}
                </p>
                {e.note && (
                  <p className="mt-0.5 text-[0.8rem] italic text-faint print:text-[8.2pt]">
                    {t(e.note)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* publications */}
        <section className="print-page-break pt-8">
          <Rubric>{ui("pubTitle")}</Rubric>
          <ol className="space-y-3">
            {PUBLICATIONS.map((p, i) => (
              <li
                key={`${p.year}-${p.title.en}`}
                className="print-avoid-break grid grid-cols-[1.6rem_1fr] text-[0.84rem] leading-[1.6] print:text-[8.5pt] print:leading-[1.42]"
              >
                <span className="numeral text-[0.78rem] font-semibold text-faint print:text-[8pt]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="text-faint">{p.authors} </span>
                  <span className="font-semibold">{t(p.title)}. </span>
                  <span className="italic text-muted">{t(p.venue)}</span>
                  <span className="text-muted">, {p.year}.</span>
                  {p.doi && (
                    <span className="text-faint" dir="ltr">
                      {" "}
                      doi.org/{p.doi}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* development */}
        <section className="pt-8">
          <Rubric>{ui("milestonesTitle")}</Rubric>
          <ul className="space-y-2">
            {MILESTONES.map((m) => (
              <li
                key={`${m.year}-${m.title.en}`}
                className="print-avoid-break grid grid-cols-[2.6rem_1fr] gap-x-2 text-[0.84rem] leading-[1.6] print:text-[8.5pt] print:leading-[1.42]"
              >
                <span className="numeral text-[0.8rem] font-semibold text-faint print:text-[8pt]">
                  {m.year}
                </span>
                <span>
                  <span className="font-semibold">{t(m.title)}</span>
                  <span className="text-muted">
                    {" "}
                    — {t(m.host)}, {t(m.place)}
                  </span>
                  <span className="text-faint"> ({t(m.date)})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* languages */}
        <section className="print-avoid-break pt-8">
          <Rubric>{ui("aboutLanguages")}</Rubric>
          <dl className="divide-y divide-rule">
            {LANGUAGES.map((l) => (
              <div
                key={l.name.en}
                className="flex flex-wrap items-baseline justify-between gap-x-6 py-2 text-[0.86rem] print:py-1 print:text-[8.8pt]"
              >
                <dt className="font-semibold">{t(l.name)}</dt>
                <dd className="text-muted">{t(l.level)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-10 border-t border-rule pt-3 text-[0.75rem] text-faint print:text-[7.5pt]">
          {lang === "en"
            ? "References available on request."
            : "التزكيات متاحة عند الطلب."}
        </p>
      </article>
    </div>
  );
}
