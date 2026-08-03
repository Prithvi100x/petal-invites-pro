import floralLeft from "@/assets/floral-left.png";
import floralRight from "@/assets/floral-right.png";
import { wedding } from "@/config/wedding";
import { DecorativeBorder } from "./DecorativeBorder";
import { EventCard } from "./EventCard";
import { Reveal } from "./Reveal";

export function Events() {
  return (
    <section id="events" className="paper relative w-full overflow-hidden bg-ivory py-20">
      <img
        src={floralRight}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute top-[-6%] right-[-22%] h-[38%] w-auto opacity-25 sm:right-[-8%]"
      />
      <img
        src={floralLeft}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute bottom-[-4%] left-[-22%] h-[38%] w-auto opacity-25 sm:left-[-8%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-xl">
        <Reveal className="px-6 text-center">
          <p className="font-sans text-[0.6rem] tracking-[0.42em] text-olive uppercase">
            {wedding.events.subheading}
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-[0.12em] text-burgundy uppercase">
            {wedding.events.heading}
          </h2>
          <DecorativeBorder className="mt-6 max-w-[200px]" />
        </Reveal>

        <ul className="mt-10 space-y-8">
          {wedding.events.list.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}