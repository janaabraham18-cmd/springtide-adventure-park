# Working on this site

Springtide Adventure Park, a trampoline and adventure park in Swakopmund. The site is
Astro (static) + GSAP and is meant to be hosted on Vercel. Run it with `npm run dev`;
`npm run build` type-checks (`astro check`) before building.

## Where things live

- `src/data/site.ts` holds every business detail: contact, hours, passes, session times,
  nav and the Formspree id. `zones.ts`, `cafe.ts` and `parties.ts` hold the page content.
  Change content there, not in page markup.
- `PLACEHOLDERS.md` lists everything that's still a stand-in. When the client confirms
  something, update the data file, flip its `placeholder`/`...IsPlaceholder` flag, and
  tick it off in that file. The dashed "Draft —" notes on the pages read those flags.
- `src/components/CourtPlan.astro` is the floor plan. Zone positions come from
  `zones.ts` `plan.rects` in a 1000×640 viewBox; the line drawings inside each zone are
  derived from its rect, so redrawing the plan only means changing those numbers.

## Test the full device range, not just mobile + one desktop size

Check mobile (~375–430px), tablet (~768–900px), laptop (~1024–1440px) and a TV-size
viewport (~1920–2560px). Bugs hide in the middle of that range. Verify with Playwright at
a spread of widths (375, 768, 1024, 1280, 1440, 1920) and check
`document.documentElement.scrollWidth - innerWidth` is 0 on every page.

- Don't size something next to text with `vw` alone. Pair it with `clamp()`.
- In a flex/grid row pairing a fixed-aspect photo with a variable-height text column,
  align to the start (`align-items: start`), not `center`.
- The header's desktop nav needs ~855px (logo 156 + links/CTA 597 + gutters, measured
  with `getBoundingClientRect`). It switches from the hamburger at 960px. If links are
  added or the wordmark changes, re-measure rather than assuming 960px still clears it.
- Component `display` rules beat the `hidden` attribute, so global.css forces
  `[hidden] { display: none !important }`. Keep that rule.
- `html { scroll-behavior: smooth }` makes scripted `scrollTo` jumps animate. In
  Playwright, scroll with `mouse.wheel` (or set `scroll-behavior: auto` first), or the
  scroll reveals won't fire and sections screenshot blank.

## The one-accent-word-per-heading device

Every real heading (h1–h4, including data-driven ones) gets exactly one word in an accent
colour (`.accent-word`, whose tone rotates through the logo palette — see Visual language)
via `hl(text, word)` from `src/utils/text.ts`:

- Exactly 2 words → the last word.
- Otherwise → the most distinctive or evocative word, never a filler word.
- A single-word heading stays plain: pass `''`.
- `hl()` matches the first exact-case occurrence and is used with `set:html` (only ever on
  our own copy, never user input).

**The accent colours belong to that one word** (plus links, buttons and active states).
Eyebrow labels (`.eyebrow`) stay neutral: `--color-text-muted` on light,
`--color-sand-200` on navy or photo, white on royal blue.

## Never put a heading in a card/bubble over a photo

Banned as "a very AI generic thing": a semi-transparent dark rounded box behind
heading/eyebrow/body text on a photo. When text sits on a photo, use a separate
gradient-scrim sibling (`.page-hero__scrim`, `.hero__scrim`, `.duo__scrim`,
`.visit__scrim`) that darkens only the zone behind the text, plus `text-shadow`. Text at
the bottom of a photo → `0deg` gradient, dark at 0%, clearing by ~80%. Functional UI
cards (forms, pass/package tiles on plain backgrounds) are fine.

## Visual language

- Palette: taken from the Springtide logo (`public/brand/`), the park's real brand.
  Royal blue `#0171b9` (the badge) is the brand: the accent word on light backgrounds,
  links, and `.section--brand` blocks (home floor-plan teaser, party packages, footer).
  Sun yellow is the primary button (navy text) and the accent word on dark or photo
  backgrounds. Teal and wave blue are supporting details; ink is a deep shade of the brand
  blue for scrims and `.section--ink`. Light backgrounds are the warm concrete greys from
  the park photos. Everything is in `src/styles/global.css`.
- Accent words rotate purple → blue → yellow in page order. On light backgrounds: the
  park's purple `#7b4fa1`, royal blue, and yellow as a highlighter stroke behind ink text
  (yellow text would be unreadable there). On navy/photo: lilac, wave blue, yellow text.
  On royal blue: pale lilac, pale wave, yellow. Each context sets `--accent-1/2/3` and
  `--accent-3-mark`, and BaseLayout's inline script stamps `data-tone` = index % 3. A card
  whose background contrasts with its section must set all four back (see
  `.pkg--featured`, `.pass--featured`). New tones need ≥3:1 against their background.
- Contrast checks: the accent ≥3:1 (large text), links and body ≥4.5:1. Secondary text on
  royal blue stays full white, because dimmed white drops under 4.5:1.
- Logo: `public/brand/logo-badge.svg` (on its blue disc; header, icons) and `logo-art.svg`
  (artwork only; footer on blue). Both are vector traces of the WhatsApp logo image. Swap in
  the designer's original files if they turn up. Favicons/apple-touch icons are PNGs
  rendered from the badge.
- Type: Bricolage Grotesque (display, `font-stretch: 88%`) + Figtree (body), self-hosted
  via Fontsource. Load the Bricolage `standard.css` entry, which includes the width axis.
- The tide line (`TideLine.astro`) is the section-edge motif. Default places it in the
  bottom of a section with the next section's colour; `flip` is the top of a section
  rising into the previous one with its own colour; `hang` is the top of a photo section
  in the previous section's colour. The parent section needs `position: relative`.
- Motion (`src/scripts/motion.ts`): `[data-reveal]` fades and lifts on scroll;
  `[data-bounce]` headings drop in word by word with a springy overshoot (the brand's
  "landing on a trampoline" move); `[data-parallax]` on hero photos. Everything respects
  `prefers-reduced-motion`.
