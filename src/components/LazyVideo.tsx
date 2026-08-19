"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  webm: string;
  mp4: string;
  poster: string;
  alt: string;
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
  objectFit?: React.CSSProperties["objectFit"];
};

/**
 * Mascot / map clips: muted+looping, hydrated with real <source> tags only
 * once in view (or immediately for `eager`, above-the-fold clips). Swaps to
 * the poster image under prefers-reduced-motion instead of loading video.
 */
export function LazyVideo({
  webm,
  mp4,
  poster,
  alt,
  eager = false,
  className = "",
  style,
  aspectRatio = "1 / 1",
  objectFit = "contain",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (eager || shouldLoad || reducedMotion) return;
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, shouldLoad, reducedMotion]);

  useEffect(() => {
    if (!shouldLoad || reducedMotion) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    const p = el.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [shouldLoad, reducedMotion]);

  if (reducedMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt={alt}
        className={className}
        style={{ ...style, aspectRatio, objectFit }}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div ref={wrapRef} className={className} style={style}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
        style={{ display: "block", width: "100%", height: "auto", aspectRatio, objectFit }}
      >
        {shouldLoad && (
          <>
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </>
        )}
      </video>
    </div>
  );
}
