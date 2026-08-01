/**
 * Islamic geometry, used as watermarked paper rather than as decoration.
 *
 * Three genuine constructions, one per surface, so no two pages carry the
 * same ornament:
 *
 *   khatim   — the eight-pointed star made by overlaying a square on the same
 *              square turned through 45°, repeated on a square lattice.
 *   octagon  — the truncated-square (octagon-and-cross) tiling: regular
 *              octagons on a square lattice with rotated squares in the gaps.
 *   rosette12 — the twelve-pointed star produced by stepping three squares
 *              through 30°, on a square lattice.
 *
 * Each field is anchored to one corner and falls away diagonally, so the
 * ornament breaks the grid instead of reinforcing it.
 */

export type Motif = "khatim" | "octagon" | "rosette12";

type Tile = { size: [number, number]; paths: string[] };

const poly = (pts: [number, number][]) =>
  `M ${pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(" L ")} Z`;

const ring = (cx: number, cy: number, r: number, n: number, offsetDeg: number) =>
  Array.from({ length: n }, (_, i): [number, number] => {
    const a = ((offsetDeg + (360 / n) * i) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });

/* --- khatim: two squares, 45° apart ------------------------------- */

function khatim(): Tile {
  const T = 120;
  const R = 40;
  const at = (cx: number, cy: number) => [
    poly(ring(cx, cy, R, 4, -90)), // diamond
    poly(ring(cx, cy, R, 4, -45)), // upright square
  ];
  return {
    size: [T, T],
    paths: [
      [0, 0],
      [T, 0],
      [0, T],
      [T, T],
      [T / 2, T / 2],
    ].flatMap(([x, y]) => at(x, y)),
  };
}

/* --- octagon and cross: the truncated-square tiling ---------------- */

function octagon(): Tile {
  const P = 100;
  // Flat-to-flat width of the octagon equals the lattice pitch.
  const r = P / (2 * Math.cos(Math.PI / 8));
  // The rotated square filling the gap reaches the octagons' 45° vertices.
  const half = Math.SQRT2 * (P / 2 - r * Math.cos(Math.PI / 4));

  const octagons = [
    [0, 0],
    [P, 0],
    [0, P],
    [P, P],
  ].map(([x, y]) => poly(ring(x, y, r, 8, 22.5)));

  return {
    size: [P, P],
    paths: [...octagons, poly(ring(P / 2, P / 2, half, 4, -90))],
  };
}

/* --- twelve-pointed star: three squares, 30° apart ------------------ */

function rosette12(): Tile {
  const T = 132;
  const R = 43;
  // Three squares stepped by 30° give twelve points spaced evenly at 30°.
  const at = (cx: number, cy: number) =>
    [-90, -60, -30].map((deg) => poly(ring(cx, cy, R, 4, deg)));
  return {
    size: [T, T],
    paths: [
      [0, 0],
      [T, 0],
      [0, T],
      [T, T],
      [T / 2, T / 2],
    ].flatMap(([x, y]) => at(x, y)),
  };
}

const TILES: Record<Motif, Tile> = {
  khatim: khatim(),
  octagon: octagon(),
  rosette12: rosette12(),
};

/* ------------------------------------------------------------------ */

type FieldProps = {
  /** Unique in the document — SVG pattern ids are global. */
  id: string;
  motif: Motif;
  /** Placement, sizing and corner mask come from here. */
  className?: string;
};

export function ArabesqueField({ id, motif, className = "" }: FieldProps) {
  const { size, paths } = TILES[motif];

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute text-pine ${className}`}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={id}
          width={size[0]}
          height={size[1]}
          patternUnits="userSpaceOnUse"
        >
          <g
            className={motif === "khatim" ? "arabesque-turning-squares" : undefined}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {paths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * A single khatim, used as a fleuron on section rules — the typographic role
 * of a dinkus, and the reason the rules do not feel mechanical.
 */
export function StarMark({ className = "" }: { className?: string }) {
  const d = [poly(ring(12, 12, 11, 4, -90)), poly(ring(12, 12, 11, 4, -45))];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`size-3.5 text-pine ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <g className="star-mark-orbit">
        {d.map((p, i) => (
          <path key={i} d={p} />
        ))}
      </g>
      <circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
