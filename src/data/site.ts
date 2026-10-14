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

// Opening hours, Monday-first. `null` = closed. Confirmed by the client
// (Oct 2026): Mon closed, Tue–Thu 9–6, Fri–Sat 9–8, Sun 9–3.
export const hours: { day: string; short: string; open: string | null; close: string | null }[] = [
  { day: 'Monday', short: 'Mon', open: null, close: null },
  { day: 'Tuesday', short: 'Tue', open: '09:00', close: '18:00' },
  { day: 'Wednesday', short: 'Wed', open: '09:00', close: '18:00' },
  { day: 'Thursday', short: 'Thu', open: '09:00', close: '18:00' },
  { day: 'Friday', short: 'Fri', open: '09:00', close: '20:00' },
  { day: 'Saturday', short: 'Sat', open: '09:00', close: '20:00' },
  { day: 'Sunday', short: 'Sun', open: '09:00', close: '15:00' },
];
export const hoursArePlaceholder = false;

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

// Session start times offered in the booking form (hourly). The form only
// enables the ones that start at least an hour before that day's closing time.
// TODO: confirm session length/start times with the park.
export const sessionTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/court-layout', label: 'Court Layout' },
  { href: '/cafe', label: 'Café' },
  { href: '/party-rooms', label: 'Party Rooms' },
  { href: '/contact', label: 'Contact' },
];
