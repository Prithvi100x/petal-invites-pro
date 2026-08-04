import { useRef, useState } from "react";
import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";

export function Cover({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  const frame = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 10, y: px * 12 });
  };

  return (
    <div
      ref={frame}
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className="fixed inset-0 z-50 overflow-hidden bg-blush"
      style={{ perspective: "1600px", perspectiveOrigin: "50% 50%" }}
    >
      <div
        className="paper absolute inset-0 origin-left overflow-hidden bg-blush"
        style={{
          transformStyle: "preserve-3d",
          transform: opening
            ? undefined
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
          transition: "transform 700ms cubic-bezier(0.22,0.61,0.36,1)",
          animation: opening
            ? "cover-open 1300ms cubic-bezier(0.6,0.02,0.3,1) forwards"
            : undefined,
          boxShadow: "inset 0 0 140px oklch(0.99 0.02 88 / 0.55)",
        }}
      >
      <img
        src={wedding.cover.image}
        alt={wedding.cover.imageAlt}
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover saturate-[1.15] brightness-[1.12]"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 20%, oklch(0.99 0.02 88 / 0.72), oklch(0.955 0.03 22 / 0.5) 55%, oklch(0.93 0.05 20 / 0.35))",
        }}
      />

      <div
        className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-12 text-center"
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
      >
        <p className="font-sans text-[0.62rem] tracking-[0.42em] text-burgundy uppercase">
          {wedding.cover.eyebrow}
        </p>

        <button
          type="button"
          onClick={onOpen}
          aria-label={wedding.cover.instruction}
          className="group rounded-full p-6 outline-none transition-transform duration-500 hover:scale-105 focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-blush"
          style={{ transform: "translateZ(90px)" }}
        >
          <span
            className="block"
            style={{ animation: "heart-float 4.2s ease-in-out infinite" }}
          >
            <svg
              viewBox="0 0 120 110"
              className="h-40 w-40 text-gold drop-shadow-[0_10px_26px_oklch(0.688_0.079_79/0.55)] sm:h-48 sm:w-48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path
                d="M60 100C34 82 8 62 8 38 8 22 20 10 34 10c10 0 19 6 26 16 7-10 16-16 26-16 14 0 26 12 26 28 0 24-26 44-52 62z"
                fill="oklch(0.72 0.11 60 / 0.28)"
              />
              <path d="M60 92C38 76 16 59 16 39c0-12 9-21 19-21 9 0 17 7 25 19 8-12 16-19 25-19 10 0 19 9 19 21 0 20-22 37-44 53z" />
              <path d="M60 80c-14-11-28-23-28-37 0-7 5-13 12-13 6 0 12 5 16 13 4-8 10-13 16-13 7 0 12 6 12 13 0 14-14 26-28 37z" />
              <circle cx="60" cy="45" r="4" />
              <path d="M60 30c4 5 6 8 6 11s-2 6-6 11c-4-5-6-8-6-11s2-6 6-11z" />
            </svg>
          </span>
        </button>

        <div className="w-full max-w-xs" style={{ transform: "translateZ(40px)" }}>
          <DecorativeBorder tone="burgundy" />
          <p className="mt-4 font-sans text-[0.68rem] tracking-[0.3em] text-burgundy uppercase">
            {wedding.cover.instruction}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}