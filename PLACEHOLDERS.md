# Still to confirm with Springtide

Everything below is a stand-in we used to lay the pages out. Confirm or replace each item
before launch. Once real details are in, flip the matching flag in `src/data/` so the
dashed "Draft —" notes disappear.

## Business details: `src/data/site.ts`
- [ ] Street address and a Google Maps pin (`contact.street`, `contact.mapQuery`)
- [ ] Phone, WhatsApp number, email (`contact.*`), then set `contact.placeholder: false`
- [ ] Instagram / Facebook / TikTok links (`social.*`)
- [x] Opening hours (Tue–Thu 9–6, Fri–Sat 9–8, Sun 9–3, Mon closed)
- [x] Confirmed: "weekends" = Friday + Saturday, Monday closed
- [ ] Pass names, lengths, age rules and prices (`passes`)
- [ ] Bookable session start times (`sessionTimes`)
- [ ] Domain (`astro.config.mjs` `site`, `public/robots.txt`)

## Forms
- [ ] Create a Formspree form for the park's inbox and paste its id into `site.formspreeId`.
      Until then, the booking and contact forms show but don't deliver.

## Court layout: `src/data/zones.ts`
- [ ] The real floor plan. Zone positions (`plan.rects`) are our draft.
- [ ] Rules and age limits per zone (`details`)
- [ ] Is there a toddler area, a ninja course or anything else not listed?

## Café: `src/data/cafe.ts`
- [ ] Real menu items and prices, then set `menuIsPlaceholder = false`

## Parties: `src/data/parties.ts`
- [ ] Package names, guest numbers, timings, what's included and prices
- [ ] How many party rooms, and the answers on the party page FAQ

## Brand and photos
- [x] Logo: in. We vector-traced it from the WhatsApp group icon (`public/brand/`) and the
      site palette now comes from it.
- [ ] The designer's original logo file (SVG/AI/PDF), if there is one. Our trace is clean,
      but the original would match exactly.
- [x] Real park photos (Oct 2026, via WhatsApp) are in for the hero, every play zone,
      reception/lockers, both party rooms and the court-layout/booking/404 heroes.
- [ ] Original-resolution photos. The WhatsApp copies are 1080px, so the full-screen heroes
      (`park-hall`, `court-foam`, `court-wide`, `party-jungle-wide`) are upscaled and a bit
      soft on big screens.
- [ ] Still stock: café/food (`shake-*`, `pizza`, `coffee`) and the Swakopmund shots
      (`swakop-*`). We still need café counter/seating and building-front photos.
- [x] Party rooms: boys' room (blue starburst wall) and girls' room (purple jungle wall),
      confirmed.
- [ ] Interactive Game Zone: we added it from the photos (game screens + Tap Tap Fun cube).
      Confirm the name and the rules.
