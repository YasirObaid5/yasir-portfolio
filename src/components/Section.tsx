"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { StarMark } from "./Arabesque";

type Props = {
  id: string;
  /** Two-digit index, printed in the margin like a contents page. */
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t border-rule py-16 md:py-24 ${className}`}
    >
      <span className="fleuron start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
        <StarMark />
      </span>

      <div className="measure">
        <Reveal>
          <div className="grid gap-x-12 gap-y-4 md:grid-cols-12">
            <div className="md:col-span-3 lg:col-span-2">
              <p className="flex items-baseline gap-3">
                <span className="numeral text-sm font-semibold text-pine">
                  {index}
                </span>
                <span className="label">{eyebrow}</span>
              </p>
            </div>

            <div className="md:col-span-9 lg:col-span-10">
              <h2 className="font-display max-w-3xl text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.015em] text-balance sm:text-[2.35rem]">
                {title}
              </h2>
              {lead && (
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-[1.7] text-muted text-pretty">
                  {lead}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
