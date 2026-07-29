import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const IconX = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconPrint = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 9V3.5h10V9" />
    <rect x="3.5" y="9" width="17" height="7.5" rx="1.5" />
    <path d="M7 14.5h10V21H7z" />
  </svg>
);

export const IconChevronLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
);
