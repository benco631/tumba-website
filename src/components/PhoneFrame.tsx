import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  rotate?: number;
  size?: number;
  className?: string;
};

export function PhoneFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  rotate = 0,
  size = 260,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        maxWidth: "100%",
        borderRadius: 34,
        padding: 10,
        background: "linear-gradient(160deg,#3B3363,#1E1733)",
        border: "1px solid rgba(255,255,255,.14)",
        boxShadow: "0 22px 50px rgba(109,40,217,.20)",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 640px) 60vw, 300px"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: 26,
          border: "1px solid rgba(255,255,255,.06)",
        }}
      />
    </div>
  );
}
