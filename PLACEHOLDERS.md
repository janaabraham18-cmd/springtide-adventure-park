# Still to confirm with Springtide

Everything below is a stand-in we used to lay the pages out. Confirm or replace each item
before launch. Once real details are in, flip the matching flag in `src/data/` so the
dashed "Draft —" notes disappear.

## Business details: `src/data/site.ts`
- [ ] Street address and a Google Maps pin (`contact.street`, `contact.mapQuery`)
- [ ] Phone, WhatsApp number, email (`contact.*`), then set `contact.placeholder: false`
- [ ] Instagram / Facebook / TikTok links (`social.*`)
- [x] Opening hours, from the park's price board: Tue–Thu 10–6, Fri–Sat 10–8, Sun + public
      holidays 10–3, Mon closed. (The client first said 9am; the board says 10:00. Confirm.)
- [x] Confirmed: "weekends" = Friday + Saturday, Monday closed
- [x] Jump rates from the price board (`rates`, `gripSocksPrice`)
- [ ] Any age rules for jumpers (e.g. the youngest age for a solo jump)
- [ ] Bookable session start times (`sessionTimes`)
- [ ] Domain (`astro.config.mjs` `site`, `public/robots.txt`)

## Forms
- [ ] Create a Formspree form for the park's inbox and paste its id into `site.formspreeId`.
      Until then, the booking and contact forms show but don't deliver.

## About Us: `src/data/about.ts`
- [x] The founders' first names: Anna & Milena
- [ ] Their real story, in their own words. The current text is a heartfelt placeholder
      draft written as "we"/"us" (two mothers, per the client); then set `aboutIsPlaceholder = false`
- [ ] A photo of the two founders (it would replace the lockers photo in the story)
- [ ] Is there a toddler area, a ninja course or any other zone not listed on the home page?

## Café: `src/data/cafe.ts`
- [x] Real menu and prices (from the park's Canva menu PDF)

## Parties: `src/data/parties.ts`
- [ ] Package names, guest numbers, timings, what's included and prices
- [x] Two party rooms (boys' and girls')
- [ ] The answers on the party page FAQ

## Brand and photos
- [x] Logo: in. We vector-traced it from the WhatsApp group icon (`public/brand/`) and the
      site palette now comes from it.
- [ ] The designer's original logo file (SVG/AI/PDF), if there is one. Our trace is clean,
      but the original would match exactly.
- [x] Real park photos (Oct 2026, via WhatsApp) are in for the hero, every play zone,
      reception/lockers, both party rooms and the about/booking/404 heroes.
- [ ] Original-resolution photos. The WhatsApp copies are 1080px, so the full-screen heroes
      (`park-hall`, `court-wide`) are upscaled and a bit
      soft on big screens.
- [ ] Still stock: the party-page hero (`party-candles`, children blowing out candles,
      chosen by the client; swap for a real Springtide party photo when there is one),
      café/food (`shake-*`, `pizza`, `coffee`) and the Swakopmund shots
      (`swakop-*`). We still need café counter/seating and building-front photos.
- [x] Party rooms: boys' room (blue starburst wall) and girls' room (purple jungle wall),
      confirmed.
- [ ] Interactive Game Zone: we added it from the photos (game screens + Tap Tap Fun cube).
      Confirm the name and the rules.
