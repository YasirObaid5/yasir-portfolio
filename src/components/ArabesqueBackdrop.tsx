"use client";

import { ArabesqueField, type Motif } from "./Arabesque";

/**
 * The page-wide watermark.
 *
 * Two stacked copies of the same lattice, fixed to the viewport so the
 * ornament behaves like the paper the page is printed on rather than
 * something that scrolls past:
 *
 *   base — always present, strongest at the top-start corner and easing off
 *          along the diagonal, which is what keeps the field asymmetric.
 *   wave — the same lattice at higher strength, revealed only through a
 *          narrow diagonal band that sweeps from the top-start corner to the
 *          bottom-end corner. Where the band passes, the geometry comes up;
 *          behind it, it settles back to the base.
 *
 * The two never sum to more than a watermark, so nothing ever competes with
 * the text; the effect is that the paper catches the light.
 */
export default function ArabesqueBackdrop({
  motif,
  /** The CV is read closely, so its watermark sits lower than the site's. */
  subtle = false,
}: {
  motif: Motif;
  subtle?: boolean;
}) {
  return (
    <div
      className={`arabesque-backdrop ${subtle ? "arabesque-subtle" : ""}`}
      aria-hidden="true"
    >
      <ArabesqueField
        id={`arabesque-base-${motif}`}
        motif={motif}
        className="arabesque-base inset-0"
      />
      <ArabesqueField
        id={`arabesque-wave-${motif}`}
        motif={motif}
        className="arabesque-wave inset-0"
      />
    </div>
  );
}
