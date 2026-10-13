// Café menu. The categories (milkshakes, slushies, toasties, pizza) come from
// the park's opening coverage; the individual items and every price are
// placeholders until the park sends its real menu. `price: null` renders as
// nothing, so leave it null rather than guessing.

export type MenuItem = { name: string; desc?: string; price: string | null };
export type MenuSection = { id: string; title: string; accentWord: string; note?: string; items: MenuItem[] };

export const menuIsPlaceholder = true;

export const menu: MenuSection[] = [
  {
    id: 'shakes',
    title: 'Thick shakes',
    accentWord: 'shakes',
    note: 'Blended to order, with whipped cream on request.',
    items: [
      { name: 'Vanilla', desc: 'The classic, done properly.', price: null },
      { name: 'Chocolate', desc: 'Rich, cold, very chocolate.', price: null },
      { name: 'Strawberry', desc: 'Pink and proud of it.', price: null },
      { name: 'Cookies & cream', desc: 'Crushed cookies blended right through.', price: null },
    ],
  },
  {
    id: 'slushies',
    title: 'Slushies',
    accentWord: '',
    note: 'Ice-cold and very bright. Ask what’s on the machine today.',
    items: [
      { name: 'Small slushie', price: null },
      { name: 'Large slushie', price: null },
    ],
  },
  {
    id: 'toasties',
    title: 'Toasties',
    accentWord: '',
    items: [
      { name: 'Cheese', desc: 'Golden, melty, simple.', price: null },
      { name: 'Ham & cheese', price: null },
      { name: 'Cheese & tomato', price: null },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    accentWord: '',
    note: 'Whole pizzas or by the slice — perfect for sharing between jumps.',
    items: [
      { name: 'Margherita', price: null },
      { name: 'Pepperoni', price: null },
      { name: 'Hawaiian', price: null },
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee & hot drinks',
    accentWord: 'Coffee',
    note: 'For the grown-ups doing the watching.',
    items: [
      { name: 'Americano', price: null },
      { name: 'Cappuccino', price: null },
      { name: 'Hot chocolate', price: null },
      { name: 'Tea', price: null },
    ],
  },
];
