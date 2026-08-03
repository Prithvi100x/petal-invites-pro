import ganesh from "@/assets/ganesh.png";
import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";

export function GaneshLoader() {
  return (
    <div
      className="paper fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-blush px-8 text-center"
      style={{ animation: "veil-fade 600ms ease-out both" }}
      role="status"
      aria-live="polite"
    >
      <img
        src={ganesh}
        alt="Ganesh emblem"
        width={768}
        height={768}
        className="h-40 w-40 object-contain opacity-90"
        style={{ animation: "soft-pulse 2.6s ease-in-out infinite" }}
      />
      <p className="font-serif text-4xl leading-tight text-burgundy">
        {wedding.blessing.hindi}
        <span className="block">{wedding.blessing.hindiSecondLine}</span>
      </p>
      <DecorativeBorder tone="burgundy" className="max-w-[220px]" />
      <p className="font-sans text-[0.62rem] tracking-[0.34em] text-burgundy/70 uppercase">
        {wedding.blessing.english}
      </p>
    </div>
  );
}