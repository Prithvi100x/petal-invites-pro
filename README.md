# Digital Keepsake Invitation

Build a mobile-first luxury Indian wedding invitation website inspired by this reference:

https://arnesh-weds-nimrit.lovable.app/

Recreate the same overall visual experience, layout, spacing, animations, typography, colors, and interaction flow, but make all names, dates, venues, images, links, and RSVP content editable.

Design direction:

- Elegant traditional Indian wedding aesthetic.

- Soft blush pink, ivory, muted beige, deep burgundy, olive-gold, and antique-gold palette.

- Use Cormorant Garamond or a similar romantic editorial serif font.

- Use a beautiful calligraphic/script font for the couple’s names.

- Add floral botanical borders, hand-painted Indian motifs, peacock artwork, subtle paper texture, faded photography, and ornamental line details.

- The page should feel like a premium printed wedding invitation brought to life digitally.

- Avoid modern SaaS styling, cards with heavy shadows, gradients, neon colors, or generic templates.

Opening experience:

1. Start with a full-screen illustrated invitation cover.

2. Show an ornate gold heart/royal invitation graphic in the center.

3. Add the instruction “Press the heart to open the invitation”.

4. When the heart is clicked:

   - Play a smooth page-opening transition.

   - Show a pale blush loading screen with a burgundy Ganesh symbol and Hindi text such as “श्री गणेशाय”.

   - Then reveal the main invitation with a graceful fade/scale animation.

5. Make the opening interaction work on both mobile and desktop.

Main invitation structure:

1. Hero invitation section

- Full-screen pale blush background.

- Decorative floral illustrations entering from the left and right edges.

- Centered calligraphic couple names:

  “Arnesh”

  “with”

  “Nimrit”

- Add parents’ names beneath each person.

- Include the wedding date prominently.

- Add a peacock illustration near the lower portion.

- Use subtle floating particles or tiny floral accents.

2. Photo mosaic section

- Create a full-width collage made from multiple wedding photographs.

- Use an irregular masonry/grid layout with varied rectangular tiles.

- Apply a soft blush translucent overlay so the images remain muted and romantic.

- Add occasional floral/leaf line-art tiles between photographs.

- Center the text:

  “A little bit of us,

  Surrounded by love,

  Let the celebrations begin—

  with all of you we love.”

- Add gentle reveal animations as the section enters the viewport.

3. Events section

- Use a warm ivory/parchment background with painted floral decoration.

- Show three wedding events in elegant stacked or alternating layouts:

  - Mehndi

  - Sangeet

  - Wedding

- Each event should include:

  - Event name

  - Date

  - Time

  - Venue

  - Short description

  - Rounded “GET DIRECTION” button with a location-pin icon

- Buttons should open configurable Google Maps links in a new tab.

- Use floral borders and Indian decorative motifs around the section.

4. RSVP section

- Use a warm beige background.

- Center a burgundy heart icon above the heading “RSVP”.

- Add:

  “YOUR PRESENCE IS OUR BLESSING”

  “Good food, great music & unforgettable moments await ✨”

  “Let us know your plans below — we can’t wait to have you with us.”

- Place the form inside a large ivory invitation-paper panel with:

  - Thin gold and burgundy double border

  - Small ornamental corner decorations

  - Rounded corners

  - Soft shadow

Form fields:

- Full Name — required text input

- Will you be attending? — required segmented buttons:

  - YES, CAN’T WAIT! 💃

  - NO, WILL MISS IT 💔

- Number of guests — required numeric input

- Names of guests joining you? — segmented buttons:

  - FAMILY

  - PLUS ONE

  - ALWAYS A LONER

- Wedding mood — required selectable buttons:

  - THE FOOD (OBVIOUSLY) 🍽️

  - THE MUSIC & DANCE FLOOR 💃

  - ALL THE LOVE & CELEBRATIONS 💛

  - DRINKS & GOOD VIBES 🥂

- Jaimala prediction — required buttons:

  - NIMRIT

  - ARNESH

- Team selection — required buttons:

  - LADKIWALE AAGYE OYEEE 💛

  - LADKEWALE AAGYE OYEEE 💙

  - JUST HERE FOR THE FOOD 😌

- Optional message textarea with a 1000-character limit and visible character counter.

- Burgundy “SEND RSVP” button.

RSVP behavior:

- Clearly show selected states on all option buttons.

- Validate required fields.

- Display an elegant success message after submission.

- Do not reload the page.

- Store submissions in a simple backend/database if available; otherwise implement a clean local fallback and make the storage layer easy to replace.

- Never expose private RSVP data publicly.

Footer:

- Add an ornamental divider.

- Show:

  “SEALED WITH LOVE”

  “WITH LOVE · [COUPLE NAMES]”

- Include a small credit line, but make it configurable and do not include the Lovable editing badge in the final production version.

Responsive behavior:

- Optimize primarily for mobile portrait screens.

- Preserve the tall invitation-like composition on mobile.

- On desktop, constrain the main content to a refined readable width while allowing decorative backgrounds to span the viewport.

- Ensure buttons and form controls are touch-friendly.

- Prevent horizontal scrolling.

- Keep all text readable over photographs with sufficient contrast.

Animation details:

- Smooth heart-opening animation.

- Blush Ganesh loading transition.

- Gentle fade-up reveals on sections.

- Slow floating floral particles.

- Subtle image zoom/parallax effects.

- Respect prefers-reduced-motion and disable nonessential animation when requested.

Technical requirements:

- Use React with clean reusable components.

- Use Tailwind CSS or well-structured CSS.

- Create reusable components for Hero, PhotoMosaic, EventCard, RSVPForm, DecorativeBorder, and Footer.

- Keep all wedding content in one editable configuration object.

- Use semantic HTML, keyboard-accessible controls, visible focus states, ARIA labels, and good contrast.

- Do not use placeholder lorem ipsum.

- Make the final result feel extremely close to the reference site in visual rhythm, typography, color palette, section spacing, decorative styling, and interaction flow.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://petal-invites-pro.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1d66d25-6898-4716-b820-0d2685dd3295).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
