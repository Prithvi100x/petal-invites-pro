import leafTile from "@/assets/leaf-tile.png";
import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";
import { Reveal } from "./Reveal";

export function PhotoMosaic() {
  return (
    <section className="paper relative w-full overflow-hidden bg-blush-deep py-16">
      <div className="grid auto-rows-[92px] grid-cols-4 gap-1.5 px-1.5 sm:auto-rows-[130px] lg:auto-rows-[160px]">
        {wedding.mosaic.tiles.map((tile, index) =>
          tile.kind === "photo" ? (
            <Reveal
              key={index}
              delay={index * 70}
              className={`${tile.span} group relative overflow-hidden`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.06]"
              />
              <span
                className="absolute inset-0 bg-blush/45 mix-blend-lighten"
                aria-hidden="true"
              />
            </Reveal>
          ) : (
            <Reveal
              key={index}
              delay={index * 70}
              className={`${tile.span} flex items-center justify-center bg-ivory/80`}
            >
              <img
                src={leafTile}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-4/5 w-4/5 object-contain opacity-80"
              />
            </Reveal>
          ),
        )}
      </div>

      <Reveal className="mx-auto mt-14 max-w-md px-8 text-center">
        <DecorativeBorder className="max-w-[160px]" />
        <p className="mt-8 font-serif text-xl leading-[2] text-burgundy italic sm:text-2xl">
          {wedding.mosaic.verse.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <DecorativeBorder className="mt-8 max-w-[160px]" />
      </Reveal>
    </section>
  );
}