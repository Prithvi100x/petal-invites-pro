type DividerProps = {
  className?: string;
  tone?: "gold" | "burgundy";
};

/** Thin ornamental rule with a central lotus diamond. */
export function DecorativeBorder({ className = "", tone = "gold" }: DividerProps) {
  const stroke = tone === "gold" ? "var(--gold)" : "var(--burgundy)";
  return (
    <div className={`flex w-full items-center justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 320 24"
        className="h-6 w-full max-w-[320px]"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      >
        <path d="M4 12h108" />
        <path d="M208 12h108" />
        <path d="M120 12c8-6 14-6 22 0-8 6-14 6-22 0z" />
        <path d="M198 12c-8-6-14-6-22 0 8 6 14 6 22 0z" />
        <path d="M160 3c6 5 9 7 9 9s-3 4-9 9c-6-5-9-7-9-9s3-4 9-9z" />
        <circle cx="160" cy="12" r="1.6" fill={stroke} stroke="none" />
        <circle cx="118" cy="12" r="1.2" fill={stroke} stroke="none" />
        <circle cx="202" cy="12" r="1.2" fill={stroke} stroke="none" />
      </svg>
    </div>
  );
}

/** Small filigree used in the four corners of the invitation paper panel. */
export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`h-8 w-8 text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M2 18C2 9 9 2 18 2" />
      <path d="M8 22c0-8 6-14 14-14" />
      <path d="M14 26c6 0 10-4 10-10" />
      <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}