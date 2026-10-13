// Every business detail the site displays lives here, so the client only has
// to correct one file. Anything marked `placeholder: true` (or commented TODO)
// is a stand-in we invented to lay the page out — it has NOT been confirmed by
// Springtide and must be replaced before launch. See PLACEHOLDERS.md.

export const site = {
  name: 'Springtide',
  fullName: 'Springtide Adventure Park',
  town: 'Swakopmund',
  tagline: 'Jump higher than the tide.',
  description:
    'Springtide Adventure Park is a trampoline and adventure park in Swakopmund, Namibia — open courts, dodgeball, slam dunk lanes, a battle beam, bumper balls, a climbing wall, a café and party rooms.',

  // TODO: confirm every contact detail below.
  contact: {
    placeholder: true,
    street: 'Street address to be confirmed',
    area: 'Swakopmund, Namibia',
    phone: '+264 00 000 0000',
    phoneHref: 'tel:+264000000000',
    whatsapp: 'https://wa.me/264000000000',
    email: 'hello@springtide.com.na',
    mapQuery: 'Swakopmund, Namibia',
  },

  social: {
    placeholder: true,
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
  },

  // Formspree form id — create a form at formspree.io with the park's inbox
  // and paste its id here. Until then the forms render but won't deliver.
  formspreeId: 'REPLACE_ME',
} as const;

// Opening hours, Monday-first. `null` = closed.
// TODO: placeholder hours — confirm with the park.
export const hours: { day: string; short: string; open: string | null; close: string | null }[] = [
  { day: 'Monday', short: 'Mon', open: null, close: null },
  { day: 'Tuesday', short: 'Tue', open: '14:00', close: '19:00' },
  { day: 'Wednesday', short: 'Wed', open: '14:00', close: '19:00' },
  { day: 'Thursday', short: 'Thu', open: '14:00', close: '19:00' },
  { day: 'Friday', short: 'Fri', open: '14:00', close: '21:00' },
  { day: 'Saturday', short: 'Sat', open: '09:00', close: '21:00' },
  { day: 'Sunday', short: 'Sun', open: '10:00', close: '18:00' },
];
export const hoursArePlaceholder = true;

// Jump passes. Prices are deliberately left blank (`price: null`) until the
// park confirms them — the UI shows "Price on request" instead of inventing one.
export const passes: {
  name: string;
  accentWord: string;
  length: string;
  who: string;
  price: string | null;
  note?: string;
}[] = [
  { name: 'Quick Bounce', accentWord: 'Bounce', length: '60 min', who: 'Ages 5 and up', price: null },
  { name: 'Full Tide', accentWord: 'Tide', length: '90 min', who: 'Ages 5 and up', price: null, note: 'Most popular' },
  { name: 'Little Waves', accentWord: 'Waves', length: '45 min', who: 'Under 5s with a grown-up', price: null },
];

// Session start times offered in the booking form. TODO: confirm.
export const sessionTimes = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/court-layout', label: 'Court Layout' },
  { href: '/cafe', label: 'Café' },
  { href: '/party-rooms', label: 'Party Rooms' },
  { href: '/contact', label: 'Contact' },
];
