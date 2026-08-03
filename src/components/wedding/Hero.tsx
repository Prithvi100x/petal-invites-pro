import floralLeft from "@/assets/floral-left.png";
import floralRight from "@/assets/floral-right.png";
import peacock from "@/assets/peacock.png";
import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";
import { Petals } from "./Petals";

export function Hero() {
  const { first, connector, second } = wedding.couple;

  return (
    <section
      id="invitation"
      className="paper relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-blush px-6 py-20"
    >
      <img
        src={floralLeft}
        alt=""
        width={640}
        height={1280}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[-26%] h-[48%] w-auto opacity-45 sm:left-[-10%] lg:h-[66%]"
      />
      <img
        src={floralRight}
        alt=""
        width={640}
        height={1280}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-28%] bottom-[10%] h-[44%] w-auto opacity-45 sm:right-[-10%] lg:h-[62%]"
      />
      <Petals />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        <p className="font-sans text-[0.6rem] tracking-[0.42em] text-burgundy/70 uppercase">
          Together with their families
        </p>
        <DecorativeBorder className="mt-6 max-w-[200px]" />

        <h1 className="mt-8 flex flex-col items-center gap-1">
          <span className="font-script text-6xl leading-[1.05] text-burgundy sm:text-7xl">
            {first.name}
          </span>
          <span className="my-2 font-serif text-lg tracking-[0.35em] text-olive lowercase">
            {connector}
          </span>
          <span className="font-script text-6xl leading-[1.05] text-burgundy sm:text-7xl">
            {second.name}
          </span>
        </h1>

        <div className="mt-8 space-y-3 font-serif text-sm leading-relaxed text-foreground/80 italic">
          <p>{first.parents}</p>
          <p>{second.parents}</p>
        </div>

        <DecorativeBorder className="mt-8 max-w-[180px]" tone="burgundy" />

        <p className="mt-6 font-serif text-2xl tracking-[0.16em] text-burgundy uppercase">
          {wedding.date.line}
        </p>
        <p className="mt-2 font-sans text-[0.62rem] tracking-[0.36em] text-olive uppercase">
          {wedding.date.place}
        </p>
      </div>

      <img
        src={peacock}
        alt=""
        width={1024}
        height={768}
        aria-hidden="true"
        className="pointer-events-none relative z-10 mt-10 w-[78%] max-w-sm opacity-90"
      />
    </section>
  );
}