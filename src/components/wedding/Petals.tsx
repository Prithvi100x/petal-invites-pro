const petals = [
  { left: "6%", delay: 0, duration: 26, size: 10 },
  { left: "18%", delay: 6, duration: 32, size: 7 },
  { left: "34%", delay: 12, duration: 29, size: 12 },
  { left: "52%", delay: 3, duration: 35, size: 8 },
  { left: "68%", delay: 15, duration: 27, size: 11 },
  { left: "82%", delay: 9, duration: 33, size: 7 },
  { left: "93%", delay: 18, duration: 30, size: 9 },
];

/** Slow floating floral accents drifting up the hero. */
export function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={index}
          className="absolute bottom-[-10%] block text-gold/60"
          style={{
            left: petal.left,
            animation: `petal-drift ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          <svg
            width={petal.size * 2}
            height={petal.size * 2}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M10 2c4 4 6 6 6 8s-2 4-6 8c-4-4-6-6-6-8s2-4 6-8z" />
          </svg>
        </span>
      ))}
    </div>
  );
}