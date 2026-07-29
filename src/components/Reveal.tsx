"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades and lifts its children into view once.
 *
 * Content renders visible and is only hidden after mount, and only when it
 * starts below the fold. That ordering matters: hiding everything up front
 * meant the page painted as an empty sheet until React had hydrated and the
 * observers had fired, and left a blank page entirely if the bundle never
 * arrived. Anything already on screen at mount simply stays put — there is
 * nothing to reveal about content the reader is already looking at.
 *
 * The observer disconnects after firing, so long pages stay cheap.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  // "idle" is the server-rendered state: no classes, fully visible.
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    const startsOffscreen =
      el.getBoundingClientRect().top > window.innerHeight * 0.92;
    if (!startsOffscreen) return;

    setState("hidden");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion =
    state === "hidden" ? "reveal" : state === "shown" ? "reveal is-in" : "";

  return (
    <Tag
      ref={ref}
      className={`${motion} ${className}`.trim()}
      style={delay && state !== "idle" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
