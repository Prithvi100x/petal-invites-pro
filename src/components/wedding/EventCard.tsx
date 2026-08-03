import { MapPin } from "lucide-react";
import type { WeddingEvent } from "@/config/wedding";
import { wedding } from "@/config/wedding";
import { CornerOrnament, DecorativeBorder } from "./DecorativeBorder";
import { Reveal } from "./Reveal";

export function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const alignRight = index % 2 === 1;

  return (
    <Reveal
      as="li"
      delay={index * 120}
      className={`relative border-y border-gold/40 px-6 py-10 text-center sm:px-10 ${
        alignRight ? "sm:text-right" : "sm:text-left"
      }`}
    >
      <CornerOrnament
        className={`absolute top-2 ${alignRight ? "right-2 -scale-x-100" : "left-2"} opacity-70`}
      />

      <p className="font-sans text-[0.58rem] tracking-[0.4em] text-olive uppercase">
        Ceremony {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-script text-5xl text-burgundy">{event.name}</h3>

      <DecorativeBorder
        className={`mt-4 max-w-[150px] ${alignRight ? "sm:ml-auto sm:mr-0" : "sm:mr-auto sm:ml-0"} mx-auto`}
      />

      <dl className="mt-5 space-y-1 font-serif text-base text-foreground/85">
        <div>
          <dt className="sr-only">Date</dt>
          <dd className="tracking-[0.1em]">{event.date}</dd>
        </div>
        <div>
          <dt className="sr-only">Time</dt>
          <dd className="tracking-[0.1em]">{event.time}</dd>
        </div>
        <div>
          <dt className="sr-only">Venue</dt>
          <dd className="text-burgundy/90 italic">{event.venue}</dd>
        </div>
      </dl>

      <p className="mx-auto mt-4 max-w-sm font-serif text-sm leading-relaxed text-foreground/70 sm:mx-0">
        {event.description}
      </p>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get directions to ${event.name} at ${event.venue}`}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-burgundy/50 px-6 py-3 font-sans text-[0.62rem] tracking-[0.28em] text-burgundy uppercase transition-colors hover:bg-burgundy hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none"
      >
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        {wedding.events.directionLabel}
      </a>
    </Reveal>
  );
}