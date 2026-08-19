"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./main.module.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span";
  [key: `aria-${string}`]: unknown;
  [key: `data-${string}`]: unknown;
};

/**
 * Scroll-triggered fade+rise, matching the static site's `data-reveal`
 * behaviour: content is visible by default (no flash-of-hidden-content),
 * and plays a one-shot rise animation the first time it enters the viewport.
 */
export function Reveal({ children, className = "", style, as = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh - 20 && rect.bottom > 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={`${className} ${play ? styles.reveal : ""}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}
