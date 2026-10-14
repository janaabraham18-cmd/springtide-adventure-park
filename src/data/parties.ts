// Party packages. The park offers party rooms (confirmed by the client); the
// package names, what's included and the guest numbers below are a first draft
// for the client to correct. Prices stay null until confirmed.

export const partiesArePlaceholder = true;

export type Package = {
  name: string;
  accentWord: string;
  guests: string;
  jump: string;
  room: string;
  includes: string[];
  price: string | null;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: 'Ripple Party',
    accentWord: 'Party',
    guests: 'Up to 10 jumpers',
    jump: '60 min on the courts',
    room: '45 min in a party room',
    includes: ['Grip socks for every jumper', 'Slushie for every jumper', 'A party host to get things going'],
    price: null,
  },
  {
    name: 'Swell Party',
    accentWord: 'Party',
    guests: 'Up to 15 jumpers',
    jump: '90 min on the courts',
    room: '60 min in a party room',
    includes: [
      'Grip socks for every jumper',
      'Pizza and a slushie for every jumper',
      'A party host for the whole party',
      'A round of dodgeball just for your group',
    ],
    price: null,
    featured: true,
  },
  {
    name: 'Springtide Party',
    accentWord: 'Party',
    guests: 'Up to 25 jumpers',
    jump: '90 min on the courts',
    room: '75 min in a party room',
    includes: [
      'Grip socks for every jumper',
      'Pizza, a milkshake and a slushie for every jumper',
      'A party host for the whole party',
      'Battle beam and bumper ball tournament',
      'Coffee for the grown-ups',
    ],
    price: null,
  },
];

// The two party rooms, from the park's own photos (confirmed by the client):
// the boys' room has the blue starburst wall, the girls' room the purple
// jungle wall.
export const partyRooms = [
  {
    name: 'The Boys’ Party Room',
    accentWord: 'Boys’',
    tone: 1, // blue accent, matching the room's blue wall
    image: '/images/party-starburst.jpg',
    imageAlt: 'The boys’ party room: a long wooden table and benches in front of a bold blue starburst wall',
    body: 'A bold, electric starburst wall in blues and neons, and one long table for the whole squad.',
  },
  {
    name: 'The Girls’ Party Room',
    accentWord: 'Girls’',
    tone: 0, // purple accent, matching the room's purple wall
    image: '/images/party-jungle.jpg',
    imageAlt: 'The girls’ party room: a long wooden table and benches in front of a purple and pink tropical leaf wall',
    body: 'Purple and pink tropical leaves wall to wall, and one long table for the whole crew.',
  },
];

export const partySteps = [
  {
    title: 'Pick a date',
    accentWord: 'date',
    body: 'Send us the date, the time and roughly how many jumpers through the booking form. Weekends go fast — the earlier the better.',
  },
  {
    title: 'We confirm it',
    accentWord: 'confirm',
    body: 'We’ll come back to you to lock in the room and package, and to sort out any extras like cake or decorations.',
  },
  {
    title: 'Turn up and jump',
    accentWord: 'jump',
    body: 'Arrive 15 minutes early to check in. Your host takes it from there — you just bring the birthday person.',
  },
];
