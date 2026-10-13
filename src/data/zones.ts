// The park's zones, in the order they appear on the Court Layout page.
//
// The attractions themselves (battle beam, trampolines, bumper balls,
// dodgeball, climbing wall, slam dunk court, kiosk) come from the park's
// opening coverage. Their POSITIONS on the plan are a first draft — we haven't
// seen the real floor plan yet — so `plan` coordinates must be redrawn from
// the park's actual layout before launch (see PLACEHOLDERS.md). Coordinates
// are in the 1000 x 640 viewBox used by CourtPlan.astro.

export type Rect = { x: number; y: number; w: number; h: number };

export type Zone = {
  id: string;
  name: string;
  accentWord: string;
  kind: 'play' | 'facility';
  blurb: string;
  details: string[];
  image: string;
  imageAlt: string;
  link?: { href: string; label: string };
  plan: { rects: Rect[]; label: { x: number; y: number } };
};

export const zones: Zone[] = [
  {
    id: 'open-court',
    name: 'Open Jump Court',
    accentWord: 'Jump',
    kind: 'play',
    blurb:
      'The heart of the park: a wall-to-wall grid of linked trampoline beds, angled walls included. Bounce from bed to bed, practise flips, or just see how high you can get.',
    details: ['One jumper per bed', 'Flips only once you’ve shown a marshal', 'Little ones jump in their own time slots'],
    image: '/images/park-ready.jpg',
    imageAlt: 'Rows of trampoline beds with padded edges',
    plan: { rects: [{ x: 260, y: 140, w: 440, h: 320 }], label: { x: 480, y: 300 } },
  },
  {
    id: 'slam-dunk',
    name: 'Slam Dunk Lanes',
    accentWord: 'Dunk',
    kind: 'play',
    blurb:
      'Run, bounce, fly, dunk. Each lane launches you at a hoop set just out of normal reach — it turns everyone into a highlight reel.',
    details: ['Soft balls only', 'One jumper per lane', 'Land on your feet, not on the rim'],
    image: '/images/trampolines.jpg',
    imageAlt: 'Trampoline lanes leading towards a wall',
    plan: { rects: [{ x: 260, y: 20, w: 440, h: 110 }], label: { x: 480, y: 75 } },
  },
  {
    id: 'dodgeball',
    name: 'Dodgeball Court',
    accentWord: 'Court',
    kind: 'play',
    blurb:
      'Dodgeball, but every dodge is a bounce. Team up against your friends on a fenced-in trampoline court with a marshal calling the games.',
    details: ['Games run by a marshal', 'Soft foam balls', 'Throws below the shoulders'],
    image: '/images/park-wide.jpg',
    imageAlt: 'Wide view across an indoor trampoline park',
    plan: { rects: [{ x: 720, y: 20, w: 260, h: 230 }], label: { x: 850, y: 135 } },
  },
  {
    id: 'battle-beam',
    name: 'Battle Beam & Foam Pit',
    accentWord: 'Beam',
    kind: 'play',
    blurb:
      'Two challengers, one narrow beam, one padded pillow each. Last one standing wins — and whoever loses drops into a pit of soft foam blocks.',
    details: ['Two players at a time', 'Pillow hits only — no pushing', 'Climb out of the pit at the side'],
    image: '/images/foam-pit.jpg',
    imageAlt: 'A foam pit filled with blue foam blocks beside an obstacle course',
    plan: { rects: [{ x: 720, y: 260, w: 260, h: 200 }], label: { x: 850, y: 360 } },
  },
  {
    id: 'climbing-wall',
    name: 'Climbing Wall',
    accentWord: 'Wall',
    kind: 'play',
    blurb:
      'Colour-coded routes from easy-going to properly tricky. Clip in, pick a colour and race the clock — or a friend on the next route.',
    details: ['Auto-belay on every route', 'Closed shoes, no grip socks', 'A marshal checks every clip-in'],
    image: '/images/climb-kids.jpg',
    imageAlt: 'Two children climbing a tall indoor climbing wall',
    plan: { rects: [{ x: 20, y: 20, w: 220, h: 180 }], label: { x: 130, y: 110 } },
  },
  {
    id: 'bumper-balls',
    name: 'Bumper Ball Arena',
    accentWord: 'Bumper',
    kind: 'play',
    blurb:
      'Step inside a giant inflatable ball and go head to head. It’s sumo, it’s football, it’s mostly falling over laughing.',
    details: ['Matched by size', 'Helmets not needed — the ball is the helmet', 'Short rounds, plenty of turns'],
    image: '/images/park-wide.jpg',
    imageAlt: 'Open play space inside the park',
    plan: { rects: [{ x: 20, y: 210, w: 220, h: 250 }], label: { x: 130, y: 335 } },
  },
  {
    id: 'cafe',
    name: 'Café & Kiosk',
    accentWord: 'Kiosk',
    kind: 'facility',
    blurb:
      'Milkshakes, slushies, toasties and pizza — plus proper coffee for whoever’s driving. Grab a table between sessions and refuel.',
    details: ['Open whenever the park is', 'Seating for families and groups'],
    image: '/images/shake-strawberry.jpg',
    imageAlt: 'A strawberry milkshake with fresh strawberries',
    link: { href: '/cafe', label: 'See the menu' },
    plan: { rects: [{ x: 620, y: 480, w: 360, h: 140 }], label: { x: 800, y: 550 } },
  },
  {
    id: 'party-rooms',
    name: 'Party Rooms',
    accentWord: 'Rooms',
    kind: 'facility',
    blurb:
      'Private rooms just off the courts for the cake, the presents and the speeches — so the jumping never has to stop for long.',
    details: ['Private room for your group', 'Jump time included in every party'],
    image: '/images/party-candles.jpg',
    imageAlt: 'Children blowing out birthday candles on a cake',
    link: { href: '/party-rooms', label: 'Plan a party' },
    plan: {
      rects: [
        { x: 20, y: 480, w: 170, h: 140 },
        { x: 200, y: 480, w: 170, h: 140 },
      ],
      label: { x: 195, y: 550 },
    },
  },
  {
    id: 'reception',
    name: 'Reception & Sock Desk',
    accentWord: 'Sock',
    kind: 'facility',
    blurb:
      'Check in, sign the waiver, pick up your Springtide grip socks and a wristband. Then you’re free to jump.',
    details: ['Grip socks required on every court', 'Lockers for shoes and bags'],
    image: '/images/park-ready.jpg',
    imageAlt: 'Inside the park near the entrance',
    plan: { rects: [{ x: 380, y: 480, w: 230, h: 140 }], label: { x: 495, y: 550 } },
  },
];

export const playZones = zones.filter((z) => z.kind === 'play');
