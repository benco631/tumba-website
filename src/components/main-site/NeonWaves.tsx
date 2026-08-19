import styles from "./main.module.css";

type Strand = { id: string; height: number; delay: number; d: string; grad: string; width: number; opacity: number };

const LEFT_STRANDS: Strand[] = [
  { id: "tWL1", height: 214, delay: 0.0, d: "M4,0 C6.5,26.8 6.5,80.3 4,107.0 C1.5,133.8 1.5,187.3 4,214", grad: "tWLg1", width: 1, opacity: 0.42 },
  { id: "tWL2", height: 268, delay: 0.8, d: "M10,0 C7.0,33.5 7.0,100.5 10,134.0 C13.0,167.5 13.0,234.5 10,268", grad: "tWLg2", width: 1, opacity: 0.38 },
  { id: "tWL3", height: 326, delay: 1.6, d: "M16,0 C18.2,40.8 18.2,122.3 16,163.0 C13.8,203.8 13.8,285.3 16,326", grad: "tWLg3", width: 1.8, opacity: 0.55 },
  { id: "tWL4", height: 241, delay: 2.4, d: "M23,0 C19.2,30.1 19.2,90.4 23,120.5 C26.8,150.6 26.8,210.9 23,241", grad: "tWLg4", width: 1, opacity: 0.4 },
  { id: "tWL5", height: 373, delay: 3.2, d: "M29,0 C31.8,46.6 31.8,139.9 29,186.5 C26.2,233.1 26.2,326.4 29,373", grad: "tWLg5", width: 1, opacity: 0.36 },
  { id: "tWL6", height: 296, delay: 4.0, d: "M35,0 C38.4,37.0 38.4,111.0 35,148.0 C31.6,185.0 31.6,259.0 35,296", grad: "tWLg1", width: 1, opacity: 0.44 },
  { id: "tWL7", height: 352, delay: 4.8, d: "M41,0 C38.6,44.0 38.6,132.0 41,176.0 C43.4,220.0 43.4,308.0 41,352", grad: "tWLg2", width: 1, opacity: 0.38 },
  { id: "tWL8", height: 229, delay: 5.6, d: "M47,0 C51.0,28.6 51.0,85.9 47,114.5 C43.0,143.1 43.0,200.4 47,229", grad: "tWLg3", width: 1, opacity: 0.4 },
  { id: "tWL9", height: 408, delay: 6.4, d: "M54,0 C51.0,51.0 51.0,153.0 54,204.0 C57.0,255.0 57.0,357.0 54,408", grad: "tWLg4", width: 1.8, opacity: 0.58 },
  { id: "tWL10", height: 283, delay: 7.2, d: "M60,0 C57.4,35.4 57.4,106.1 60,141.5 C62.6,176.9 62.6,247.6 60,283", grad: "tWLg5", width: 1, opacity: 0.4 },
  { id: "tWL11", height: 247, delay: 8.0, d: "M66,0 C69.6,30.9 69.6,92.6 66,123.5 C62.4,154.4 62.4,216.1 66,247", grad: "tWLg1", width: 1, opacity: 0.36 },
  { id: "tWL12", height: 317, delay: 8.8, d: "M72,0 C69.8,39.6 69.8,118.9 72,158.5 C74.2,198.1 74.2,277.4 72,317", grad: "tWLg2", width: 1, opacity: 0.42 },
];

const RIGHT_STRANDS: Strand[] = [
  { id: "tWR1", height: 252, delay: 0.0, d: "M4,0 C1.0,31.5 1.0,94.5 4,126.0 C7.0,157.5 7.0,220.5 4,252", grad: "tWRg3", width: 1, opacity: 0.4 },
  { id: "tWR2", height: 301, delay: 0.8, d: "M10,0 C12.4,37.6 12.4,112.9 10,150.5 C7.6,188.1 7.6,263.4 10,301", grad: "tWRg4", width: 1, opacity: 0.38 },
  { id: "tWR3", height: 224, delay: 1.6, d: "M16,0 C12.4,28.0 12.4,84.0 16,112.0 C19.6,140.0 19.6,196.0 16,224", grad: "tWRg5", width: 1, opacity: 0.42 },
  { id: "tWR4", height: 356, delay: 2.4, d: "M23,0 C25.8,44.5 25.8,133.5 23,178.0 C20.2,222.5 20.2,311.5 23,356", grad: "tWRg1", width: 1, opacity: 0.36 },
  { id: "tWR5", height: 269, delay: 3.2, d: "M29,0 C25.0,33.6 25.0,100.9 29,134.5 C33.0,168.1 33.0,235.4 29,269", grad: "tWRg2", width: 1.8, opacity: 0.58 },
  { id: "tWR6", height: 398, delay: 4.0, d: "M35,0 C32.8,49.8 32.8,149.3 35,199.0 C37.2,248.8 37.2,348.3 35,398", grad: "tWRg3", width: 1, opacity: 0.4 },
  { id: "tWR7", height: 235, delay: 4.8, d: "M41,0 C44.4,29.4 44.4,88.1 41,117.5 C37.6,146.9 37.6,205.6 41,235", grad: "tWRg4", width: 1, opacity: 0.38 },
  { id: "tWR8", height: 317, delay: 5.6, d: "M47,0 C44.4,39.6 44.4,118.9 47,158.5 C49.6,198.1 49.6,277.4 47,317", grad: "tWRg5", width: 1, opacity: 0.44 },
  { id: "tWR9", height: 284, delay: 6.4, d: "M54,0 C57.8,35.5 57.8,106.5 54,142.0 C50.2,177.5 50.2,248.5 54,284", grad: "tWRg1", width: 1, opacity: 0.4 },
  { id: "tWR10", height: 246, delay: 7.2, d: "M60,0 C63.0,30.8 63.0,92.3 60,123.0 C57.0,153.8 57.0,215.3 60,246", grad: "tWRg2", width: 1.8, opacity: 0.56 },
  { id: "tWR11", height: 372, delay: 8.0, d: "M66,0 C63.6,46.5 63.6,139.5 66,186.0 C68.4,232.5 68.4,325.5 66,372", grad: "tWRg3", width: 1, opacity: 0.36 },
  { id: "tWR12", height: 209, delay: 8.8, d: "M72,0 C75.2,26.1 75.2,78.4 72,104.5 C68.8,130.6 68.8,182.9 72,209", grad: "tWRg4", width: 1, opacity: 0.42 },
];

const GRAD_STOPS: Record<string, { offset: string; color: string }[]> = {
  g1: [
    { offset: "0%", color: "#6D28D9" },
    { offset: "45%", color: "#8B5CF6" },
    { offset: "75%", color: "#A855F7" },
    { offset: "100%", color: "#6D28D9" },
  ],
  g2: [
    { offset: "0%", color: "#7C3AED" },
    { offset: "45%", color: "#A855F7" },
    { offset: "75%", color: "#C084FC" },
    { offset: "100%", color: "#7C3AED" },
  ],
  g3: [
    { offset: "0%", color: "#8B5CF6" },
    { offset: "40%", color: "#60A5FA" },
    { offset: "75%", color: "#A855F7" },
    { offset: "100%", color: "#8B5CF6" },
  ],
  g4: [
    { offset: "0%", color: "#A855F7" },
    { offset: "45%", color: "#C084FC" },
    { offset: "75%", color: "#8B5CF6" },
    { offset: "100%", color: "#A855F7" },
  ],
  g5: [
    { offset: "0%", color: "#6D28D9" },
    { offset: "30%", color: "#7C3AED" },
    { offset: "55%", color: "#38BDF8" },
    { offset: "80%", color: "#7C3AED" },
    { offset: "100%", color: "#6D28D9" },
  ],
};

function Side({ side, strands }: { side: "left" | "right"; strands: Strand[] }) {
  const prefix = side === "left" ? "tWLg" : "tWRg";
  return (
    <div
      className={styles.neonWave}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: "clamp(58px,5.5vw,84px)",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <svg width="100%" height="100%" style={{ display: "block" }} aria-hidden="true">
        <defs>
          {(["g1", "g2", "g3", "g4", "g5"] as const).map((g) => (
            <linearGradient key={g} id={`${prefix}${g.slice(1)}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="300">
              {GRAD_STOPS[g].map((s, i) => (
                <stop key={i} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
          ))}
          {strands.map((s) => (
            <pattern key={s.id} id={s.id} patternUnits="userSpaceOnUse" width={76} height={s.height}>
              <path
                className={styles.waveLine}
                style={{ animationDelay: `${s.delay}s` }}
                d={s.d}
                fill="none"
                stroke={`url(#${s.grad})`}
                strokeWidth={s.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={s.opacity}
                vectorEffect="non-scaling-stroke"
              />
            </pattern>
          ))}
        </defs>
        {strands.map((s) => (
          <rect key={s.id} width="100%" height="100%" fill={`url(#${s.id})`} />
        ))}
      </svg>
    </div>
  );
}

/** Decorative wavy neon strands along both page margins. Purely ornamental. */
export function NeonWaves() {
  return (
    <>
      <Side side="left" strands={LEFT_STRANDS} />
      <Side side="right" strands={RIGHT_STRANDS} />
    </>
  );
}
