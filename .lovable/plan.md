# Luxury Indian Wedding Invitation Site

A mobile-first, single-page digital wedding invitation that feels like a premium printed card — envelope cover, Ganesh blessing transition, then a tall scrolling invitation. All names, dates, venues, photos, map links and RSVP copy live in one editable config file.

## Opening experience

1. Full-screen illustrated cover with an ornate gold heart and "Press the heart to open the invitation".
2. Tapping/pressing Enter on the heart plays a page-opening transition (works on touch and mouse, keyboard-accessible).
3. Pale blush loading screen with a burgundy Ganesh symbol and "श्री गणेशाय".
4. Main invitation reveals with a graceful fade + scale.

## Sections

- **Hero** — pale blush, florals entering from both edges, calligraphic "Arnesh / with / Nimrit", parents' names, wedding date, peacock illustration low in the frame, slow floating floral particles.
- **Photo mosaic** — irregular masonry of wedding photos under a soft blush overlay, floral line-art tiles interspersed, centered "A little bit of us…" verse, fade-up reveals on scroll.
- **Events** — ivory parchment ground with painted florals; Mehndi, Sangeet and Wedding in alternating stacked blocks, each with name, date, time, venue, description and a rounded "GET DIRECTION" pin button opening a configurable Google Maps link in a new tab.
- **RSVP** — warm beige ground, burgundy heart above "RSVP", the three lines of copy, then an ivory invitation-paper panel with gold+burgundy double border, ornamental corners and soft shadow. All fields exactly as specified: name, attending, guest count, guest type, wedding mood, jaimala prediction, team, optional 1000-char message with counter, burgundy "SEND RSVP".
- **Footer** — ornamental divider, "SEALED WITH LOVE", "WITH LOVE · ARNESH & NIMRIT", configurable credit line, no Lovable badge in production.

## RSVP behaviour

Selected states are clearly marked, required fields validated inline, submission is async with no page reload and an elegant confirmation panel replaces the form.

Storage: **Lovable Cloud** (recommended and used here) — an `rsvps` table with row-level security so anyone can submit but nobody can read submissions publicly. Guest data stays private. The submit call sits behind a single function so the storage layer can be swapped later.

## Design system

- Palette: blush, ivory, muted beige, deep burgundy, olive-gold, antique gold — defined as semantic tokens.
- Type: Cormorant Garamond for editorial serif, a calligraphic script for the couple's names, a fine letter-spaced sans for labels and buttons.
- Texture: subtle paper grain, ornamental rules, hand-painted motif borders. No shadow-heavy cards, gradients, or SaaS styling.

## Imagery

AI-generated to match the palette: cover artwork with the gold heart, floral border panels (left/right), peacock illustration, Ganesh emblem, floral line-art tiles, and a set of soft faded wedding photographs for the mosaic.

## Responsive & accessibility

Mobile portrait first with the tall invitation composition preserved; on desktop content is constrained to a refined column while decorative art bleeds to the viewport edges. Touch-friendly controls, no horizontal scroll, readable contrast over photos, semantic HTML, ARIA labels, visible focus rings, and `prefers-reduced-motion` disabling all nonessential motion.

## Technical notes

- React + TanStack Start, Tailwind v4 tokens in `src/styles.css`, fonts loaded via `<link>` in `__root.tsx`.
- Components: `Cover`, `GaneshLoader`, `Hero`, `PhotoMosaic`, `EventCard`, `RSVPForm`, `DecorativeBorder`, `Footer`.
- `src/config/wedding.ts` holds every piece of content: names, parents, date, events with map URLs, mosaic captions, RSVP question copy and options, footer credit.
- Page lives at `/` with route-level SEO metadata.
