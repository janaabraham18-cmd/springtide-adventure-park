// The park's zones, in the order they appear on the Court Layout page.
//
// The attractions come from the park's opening coverage and the park's own
// photos (Oct 2026), which also showed the interactive game trampolines and
// the two themed party rooms. Their POSITIONS on the plan are a first draft — we haven't
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
      'The heart of the park: a big grid of linked trampoline beds running right up to the foam pit. Bounce from bed to bed, practise flips, or just see how high you can get.',
    details: ['One jumper per bed', 'Flips only once you’ve shown a marshal', 'Little ones jump in their own time slots'],
    image: '/images/court-main.jpg',
    imageAlt: 'The main trampoline court at Springtide, with blue padded frames and a foam pit',
    plan: { rects: [{ x: 260, y: 140, w: 300, h: 320 }], label: { x: 410, y: 300 } },
  },
  {
    id: 'game-trampolines',
    name: 'Interactive Game Zone',
    accentWord: 'Game',
    kind: 'play',
    blurb:
      'Trampolines wired up to big screens, so every bounce plays the game. Dance, dodge and hit the targets for a high score, then race the lights on the Tap Tap Fun cube.',
    details: ['Scores show up on the screen', 'Take turns, then try to beat your friends'],
    image: '/images/game-screens.jpg',
    imageAlt: 'Interactive trampoline game screens beside a trampoline',
    plan: { rects: [{ x: 570, y: 140, w: 130, h: 320 }], label: { x: 635, y: 300 } },
  },
  {
    id: 'slam-dunk',
    name: 'Slam Dunk Lanes',
    accentWord: 'Dunk',
    kind: 'play',
    blurb:
      'Run, bounce, fly, dunk. Each lane launches you at a hoop set just out of normal reach — it turns everyone into a highlight reel.',
    details: ['Soft balls only', 'One jumper per lane', 'Land on your feet, not on the rim'],
    image: '/images/slam-dunk.jpg',
    imageAlt: 'A trampoline lane leading up to a basketball hoop',
    plan: { rects: [{ x: 260, y: 20, w: 440, h: 110 }], label: { x: 480, y: 75 } },
  },
  {
    id: 'dodgeball',
    name: 'Dodgeball Court',
    accentWord: 'Court',
    kind: 'play',
    blurb:
      'Dodgeball, but every dodge is a bounce. Team up against your friends inside the netted cage, where the angled trampoline walls send the ball (and you) flying.',
    details: ['Games run by a marshal', 'Soft foam balls', 'Throws below the shoulders'],
    image: '/images/dodgeball-cage.jpg',
    imageAlt: 'The netted dodgeball cage with angled purple trampoline walls',
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
    image: '/images/battle-beam.jpg',
    imageAlt: 'The yellow battle beam running across a foam pit full of purple, teal and yellow blocks',
    plan: { rects: [{ x: 720, y: 260, w: 260, h: 200 }], label: { x: 850, y: 360 } },
  },
  {
    id: 'climbing-wall',
    name: 'Climbing Wall',
    accentWord: 'Wall',
    kind: 'play',
    blurb:
      'A bright, chunky wall to climb and traverse. Pick a route, see how far you get, and try to beat it next time.',
    details: ['One climber per route', 'Ask a marshal before you start'],
    image: '/images/climbing-wall.jpg',
    imageAlt: 'The colourful climbing wall at the far end of the park',
    plan: { rects: [{ x: 20, y: 20, w: 220, h: 180 }], label: { x: 130, y: 110 } },
  },
  {
    id: 'bumper-balls',
    name: 'Bumper Ball Arena',
    accentWord: 'Bumper',
    kind: 'play',
    blurb:
      'Step inside a giant see-through bumper ball and go head to head in the cage. It’s sumo, it’s football, it’s mostly falling over laughing.',
    details: ['Matched by size', 'Helmets not needed — the ball is the helmet', 'Short rounds, plenty of turns'],
    image: '/images/bumper-balls.jpg',
    imageAlt: 'Clear bumper balls waiting inside the netted cage',
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
      'Two private party rooms right beside the courts — one with a starburst wall, one with a jungle wall — each with a long wooden table for the whole crew.',
    details: ['A private room for your group', 'Jump time included in every party'],
    image: '/images/party-starburst.jpg',
    imageAlt: 'The starburst party room with a long wooden table and benches',
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
    details: ['Grip socks required on every court', 'Numbered lockers for shoes and bags', 'Beanbags for whoever’s waiting'],
    image: '/images/lockers.jpg',
    imageAlt: 'Colourful numbered lockers and beanbags',
    plan: { rects: [{ x: 380, y: 480, w: 230, h: 140 }], label: { x: 495, y: 550 } },
  },
];

export const playZones = zones.filter((z) => z.kind === 'play');
