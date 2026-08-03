import { useId, useState } from "react";
import { Heart } from "lucide-react";
import { z } from "zod";
import { wedding } from "@/config/wedding";
import { submitRsvp } from "@/lib/rsvp";
import { CornerOrnament, DecorativeBorder } from "./DecorativeBorder";
import { Reveal } from "./Reveal";

const fields = wedding.rsvp.fields;

const schema = z.object({
  fullName: z.string().trim().min(1, "Please tell us your name").max(100, "That name is a little too long"),
  attending: z.string().min(1, "Please let us know if you can join"),
  guestCount: z
    .number({ invalid_type_error: "Please enter a number" })
    .int("Whole guests only, please")
    .min(0, "That cannot be negative")
    .max(50, "Please contact the family for larger groups"),
  guestType: z.string().optional(),
  mood: z.string().min(1, "Pick the part you are here for"),
  jaimala: z.string().min(1, "Place your bet"),
  team: z.string().min(1, "Pick your side"),
  message: z.string().max(fields.message.maxLength, "Message is too long").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function OptionGroup({
  label,
  options,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (next: string) => void;
  error?: string;
  required?: boolean;
}) {
  const errorId = useId();
  return (
    <fieldset>
      <legend className="font-sans text-[0.62rem] tracking-[0.26em] text-burgundy uppercase">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </legend>
      <div
        className="mt-3 flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={label}
        aria-describedby={error ? errorId : undefined}
      >
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option)}
              className={`min-h-11 rounded-full border px-4 py-2.5 font-sans text-[0.62rem] tracking-[0.16em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none ${
                selected
                  ? "border-burgundy bg-burgundy text-primary-foreground"
                  : "border-gold/60 bg-ivory text-burgundy/80 hover:border-burgundy/60"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 font-serif text-sm text-destructive italic">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export function RSVPForm() {
  const nameId = useId();
  const guestsId = useId();
  const messageId = useId();

  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [guestType, setGuestType] = useState("");
  const [mood, setMood] = useState("");
  const [jaimala, setJaimala] = useState("");
  const [team, setTeam] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse({
      fullName,
      attending,
      guestCount: Number(guestCount),
      guestType,
      mood,
      jaimala,
      team,
      message,
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    await submitRsvp({
      full_name: parsed.data.fullName,
      attending: parsed.data.attending,
      guest_count: parsed.data.guestCount,
      guest_type: parsed.data.guestType || null,
      wedding_mood: parsed.data.mood,
      jaimala_prediction: parsed.data.jaimala,
      team: parsed.data.team,
      message: parsed.data.message?.trim() ? parsed.data.message.trim() : null,
    });
    setSubmitting(false);
    setDone(true);
  }

  return (
    <section id="rsvp" className="paper w-full bg-beige px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <Heart className="mx-auto h-8 w-8 text-burgundy" fill="currentColor" aria-hidden="true" />
        <h2 className="mt-5 font-serif text-5xl tracking-[0.2em] text-burgundy uppercase">
          {wedding.rsvp.heading}
        </h2>
        <p className="mt-4 font-sans text-[0.62rem] tracking-[0.36em] text-olive uppercase">
          {wedding.rsvp.eyebrow}
        </p>
        <div className="mt-5 space-y-1 font-serif text-base text-foreground/80 italic">
          {wedding.rsvp.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <DecorativeBorder className="mt-8 max-w-[180px]" />
      </Reveal>

      <Reveal className="mx-auto mt-10 w-full max-w-xl">
        <div className="relative rounded-2xl border border-gold/70 bg-ivory p-1 shadow-[0_18px_40px_-28px_oklch(0.36_0.10_18/0.55)]">
          <div className="paper relative rounded-xl border border-burgundy/30 px-5 py-10 sm:px-9">
            <CornerOrnament className="absolute top-2 left-2" />
            <CornerOrnament className="absolute top-2 right-2 -scale-x-100" />
            <CornerOrnament className="absolute bottom-2 left-2 -scale-y-100" />
            <CornerOrnament className="absolute right-2 bottom-2 -scale-100" />

            {done ? (
              <div className="relative z-10 py-10 text-center" role="status" aria-live="polite">
                <Heart className="mx-auto h-7 w-7 text-burgundy" fill="currentColor" aria-hidden="true" />
                <h3 className="mt-5 font-script text-4xl text-burgundy">
                  {wedding.rsvp.success.title}
                </h3>
                <DecorativeBorder className="mt-5 max-w-[150px]" />
                <p className="mx-auto mt-5 max-w-sm font-serif text-base leading-relaxed text-foreground/80 italic">
                  {wedding.rsvp.success.body}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-8">
                <div>
                  <label
                    htmlFor={nameId}
                    className="font-sans text-[0.62rem] tracking-[0.26em] text-burgundy uppercase"
                  >
                    {fields.name.label} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={nameId}
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    maxLength={100}
                    placeholder={fields.name.placeholder}
                    aria-invalid={Boolean(errors.fullName)}
                    className="mt-3 min-h-11 w-full border-b border-gold/70 bg-transparent pb-2 font-serif text-lg text-foreground placeholder:text-foreground/35 focus:border-burgundy focus:outline-none"
                  />
                  {errors.fullName ? (
                    <p role="alert" className="mt-2 font-serif text-sm text-destructive italic">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <OptionGroup
                  required
                  label={fields.attending.label}
                  options={fields.attending.options}
                  value={attending}
                  onChange={setAttending}
                  error={errors.attending}
                />

                <div>
                  <label
                    htmlFor={guestsId}
                    className="font-sans text-[0.62rem] tracking-[0.26em] text-burgundy uppercase"
                  >
                    {fields.guests.label} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={guestsId}
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={50}
                    value={guestCount}
                    onChange={(event) => setGuestCount(event.target.value)}
                    aria-invalid={Boolean(errors.guestCount)}
                    className="mt-3 min-h-11 w-28 border-b border-gold/70 bg-transparent pb-2 font-serif text-lg text-foreground focus:border-burgundy focus:outline-none"
                  />
                  {errors.guestCount ? (
                    <p role="alert" className="mt-2 font-serif text-sm text-destructive italic">
                      {errors.guestCount}
                    </p>
                  ) : null}
                </div>

                <OptionGroup
                  label={fields.guestType.label}
                  options={fields.guestType.options}
                  value={guestType}
                  onChange={setGuestType}
                />

                <OptionGroup
                  required
                  label={fields.mood.label}
                  options={fields.mood.options}
                  value={mood}
                  onChange={setMood}
                  error={errors.mood}
                />

                <OptionGroup
                  required
                  label={fields.jaimala.label}
                  options={fields.jaimala.options}
                  value={jaimala}
                  onChange={setJaimala}
                  error={errors.jaimala}
                />

                <OptionGroup
                  required
                  label={fields.team.label}
                  options={fields.team.options}
                  value={team}
                  onChange={setTeam}
                  error={errors.team}
                />

                <div>
                  <label
                    htmlFor={messageId}
                    className="font-sans text-[0.62rem] tracking-[0.26em] text-burgundy uppercase"
                  >
                    {fields.message.label}
                  </label>
                  <textarea
                    id={messageId}
                    value={message}
                    maxLength={fields.message.maxLength}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    placeholder={fields.message.placeholder}
                    className="mt-3 w-full resize-none rounded-md border border-gold/70 bg-transparent p-3 font-serif text-base text-foreground placeholder:text-foreground/35 focus:border-burgundy focus:outline-none"
                  />
                  <p className="mt-1 text-right font-sans text-[0.6rem] tracking-[0.2em] text-foreground/50">
                    {message.length} / {fields.message.maxLength}
                  </p>
                </div>

                <DecorativeBorder className="max-w-[150px]" />

                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-12 w-full rounded-full bg-burgundy px-8 py-4 font-sans text-[0.66rem] tracking-[0.34em] text-primary-foreground uppercase transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none disabled:opacity-60"
                >
                  {submitting ? "Sending…" : wedding.rsvp.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}