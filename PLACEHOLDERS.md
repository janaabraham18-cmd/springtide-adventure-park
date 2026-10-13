# Still to confirm with Springtide

Everything below is a stand-in we used to lay the pages out. Confirm or replace each item
before launch. Once real details are in, flip the matching flag in `src/data/` so the
dashed "Draft —" notes disappear.

## Business details: `src/data/site.ts`
- [ ] Street address and a Google Maps pin (`contact.street`, `contact.mapQuery`)
- [ ] Phone, WhatsApp number, email (`contact.*`), then set `contact.placeholder: false`
- [ ] Instagram / Facebook / TikTok links (`social.*`)
- [ ] Opening hours, then set `hoursArePlaceholder = false`
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
- [ ] Logo: the moon-and-wave mark in `Logo.astro` and `public/favicon.svg` is ours. Swap
      it in if the park has its own.
- [ ] Photos: every image in `public/images/` is an Unsplash stand-in. `park-ready.jpg` and
      `trampolines.jpg` show another park's branding on the mats and **must** be replaced.
      Ideal: real photos of each zone, the café, a party room and the building front.
