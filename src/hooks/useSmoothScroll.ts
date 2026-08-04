import { useEffect } from "react";

/** Inertial smooth scrolling (disabled for reduced-motion users). */
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroyed = false;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      lenis = new Lenis({
        duration: 1.35,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.6,
      }) as never;
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [enabled]);
}
