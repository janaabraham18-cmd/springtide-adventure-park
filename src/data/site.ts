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

// Opening hours, Monday-first. `null` = closed. From the park's own price
// board (Oct 2026): Mon closed, Tue–Thu 10–6, Fri–Sat 10–8, Sun 10–3.
// Public holidays follow Sunday hours (`holidayNote`).
export const hours: { day: string; short: string; open: string | null; close: string | null }[] = [
  { day: 'Monday', short: 'Mon', open: null, close: null },
  { day: 'Tuesday', short: 'Tue', open: '10:00', close: '18:00' },
  { day: 'Wednesday', short: 'Wed', open: '10:00', close: '18:00' },
  { day: 'Thursday', short: 'Thu', open: '10:00', close: '18:00' },
  { day: 'Friday', short: 'Fri', open: '10:00', close: '20:00' },
  { day: 'Saturday', short: 'Sat', open: '10:00', close: '20:00' },
  { day: 'Sunday', short: 'Sun', open: '10:00', close: '15:00' },
];
export const hoursArePlaceholder = false;
export const holidayNote = 'Public holidays: 10:00 – 15:00, same as Sundays.';

// Jump rates, from the park's price board (Oct 2026). Weekday rates apply
// Tue–Thu, weekend rates Fri–Sun. `minutes` drives the booking form (a
// 2-hour jump must start at least two hours before closing).
export type Rate = { id: string; name: string; minutes: number; weekday: number; weekend: number; note?: string };
export const rates: Rate[] = [
  { id: '1h', name: '1 hour', minutes: 60, weekday: 100, weekend: 120 },
  { id: '2h', name: '2 hours', minutes: 120, weekday: 180, weekend: 200 },
  { id: 'toddler', name: 'Adult & toddler (1 hour)', minutes: 60, weekday: 150, weekend: 180, note: 'One grown-up jumping with their little one' },
];
export const gripSocksPrice = 45;
export const isWeekendRate = (dayIndexMondayFirst: number) => dayIndexMondayFirst >= 4; // Fri, Sat, Sun
export const money = (n: number) => `N$${n}`;

// Session start times offered in the booking form (hourly). The form only
// enables the ones that fit that day's hours for the chosen jump length.
export const sessionTimes = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/cafe', label: 'Café' },
  { href: '/party-rooms', label: 'Party Rooms' },
  { href: '/contact', label: 'Contact' },
];
