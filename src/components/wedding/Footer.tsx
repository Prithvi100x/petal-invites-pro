import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";

export function Footer() {
  return (
    <footer className="paper w-full bg-burgundy px-6 py-16 text-center">
      <DecorativeBorder className="max-w-[220px] opacity-90" />
      <p className="mt-8 font-sans text-[0.66rem] tracking-[0.44em] text-primary-foreground/90 uppercase">
        {wedding.footer.sealed}
      </p>
      <p className="mt-4 font-serif text-xl tracking-[0.22em] text-gold-soft">
        {wedding.footer.withLove}
      </p>
      <DecorativeBorder className="mt-8 max-w-[160px] opacity-80" />
      <p className="mt-8 font-sans text-[0.56rem] tracking-[0.24em] text-primary-foreground/55 uppercase">
        {wedding.footer.credit}
      </p>
    </footer>
  );
}