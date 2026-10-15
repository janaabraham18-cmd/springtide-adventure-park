// Café menu, from the park's own menu ("Spring Tide Menu December", Canva PDF,
// sent by the client in Oct 2026). Sizes are folded into one line per drink
// ("N$25 · Large N$35") to keep the board compact.

// `flavours` renders as coloured dots (one per flavour) instead of a plain list.
export type Flavour = { name: string; color: string };
export type MenuItem = { name: string; desc?: string; flavours?: Flavour[]; price: string | null };
export type MenuSection = {
  id: string;
  title: string;
  accentWord: string;
  note?: string;
  // Optional photo at the top of the section's card.
  image?: string;
  imageAlt?: string;
  items: MenuItem[];
};

// The "Favourites" row above the menu: big photo cards for the signature items.
// Prices must match the menu below. Photos are stock stand-ins until the café
// sends its own (see PLACEHOLDERS.md).
export type Favourite = {
  title: string;
  accentWord: string;
  blurb: string;
  price: string;
  image: string;
  imageAlt: string;
};

export const favourites: Favourite[] = [
  {
    title: 'Thick milkshakes',
    accentWord: 'milkshakes',
    blurb: 'Five flavours, regular or large. The one every jumper asks for.',
    price: 'from N$30',
    image: '/images/shake-strawberry.jpg',
    imageAlt: 'A strawberry milkshake in a tall glass with fresh strawberries',
  },
  {
    title: 'Four kinds of pizza',
    accentWord: 'pizza',
    blurb: 'Margarita, pepperoni, Hawaiian or the Namibiana. Made to share once the session’s done.',
    price: 'from N$110',
    image: '/images/pizza.jpg',
    imageAlt: 'Slices of pepperoni pizza on a bright orange background',
  },
  {
    title: 'Toastie & chips',
    accentWord: 'Toastie',
    blurb: 'Ham, cheese and tomato, toasted golden, with a side of chips.',
    price: 'N$65',
    image: '/images/toastie.jpg',
    imageAlt: 'A toasted sandwich cut in half on a wooden plate',
  },
  {
    title: 'Ice-cold slushies',
    accentWord: 'slushies',
    blurb: 'Bright, frosty and gone in about four sips. Perfect after dodgeball.',
    price: 'N$25',
    image: '/images/slushie.jpg',
    imageAlt: 'A purple slushie in a clear cup with a straw',
  },
];

export const menuIsPlaceholder = false;

export const menuFootnote = 'Party packages available — enquire at reception.';

export const menu: MenuSection[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    accentWord: '',
    image: '/images/coffee.jpg',
    imageAlt: 'Three cappuccinos with latte art on a small wooden table',
    items: [
      { name: 'Espresso', price: 'N$20 · Double N$25' },
      { name: 'Americano', price: 'N$25 · Large N$35' },
      { name: 'Café latte', price: 'N$35 · Large N$45' },
      { name: 'Cappuccino', price: 'N$35 · Large N$45' },
      { name: 'Chai tea', price: 'N$35 · Large N$45' },
      { name: 'Hot chocolate', price: 'N$40 · Large N$50' },
      { name: 'Moccaccino', price: 'N$40 · Large N$50' },
      { name: 'Red cappuccino', price: 'N$35 · Large N$45' },
      { name: 'Red latte', price: 'N$35 · Large N$45' },
      { name: 'Babyccino', price: 'N$15' },
      { name: 'Pot of tea', desc: 'Earl Grey, rooibos or green tea', price: 'N$30' },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    accentWord: '',
    items: [
      { name: 'Whipped cream', price: 'N$15' },
      { name: 'Almond milk', price: 'N$15' },
      { name: 'Vanilla shot', price: 'N$15' },
      { name: 'Hazelnut shot', price: 'N$15' },
    ],
  },
  {
    id: 'iced',
    title: 'Iced drinks & shakes',
    accentWord: 'shakes',
    image: '/images/slushies.jpg',
    imageAlt: 'Rows of blue, pink and yellow iced drinks in plastic cups',
    items: [
      { name: 'Iced latte', price: 'N$50' },
      { name: 'Iced mocha', price: 'N$55' },
      {
        name: 'Milkshake',
        flavours: [
          { name: 'Strawberry', color: '#f29bb8' },
          { name: 'Chocolate', color: '#6b3f2a' },
          { name: 'Vanilla', color: '#f6e7b4' },
          { name: 'Bubblegum', color: '#7acee8' },
          { name: 'Cookies & cream', color: 'cookies' },
        ],
        price: 'N$30 · Large N$45',
      },
      { name: 'Soda float', desc: 'Coke, Sparberry, Fanta or Creme Soda', price: 'N$45' },
      { name: 'Slushie', price: 'N$25' },
    ],
  },
  {
    id: 'toasties',
    title: 'Toasties',
    accentWord: '',
    image: '/images/toastie-plate.jpg',
    imageAlt: 'A golden toasted sandwich with melted cheese, cut in half',
    note: 'Every toastie comes with a small portion of chips.',
    items: [
      { name: 'Cheese', price: 'N$55' },
      { name: 'Cheese & tomato', price: 'N$60' },
      { name: 'Ham & cheese', price: 'N$60' },
      { name: 'Ham, cheese & tomato', price: 'N$65' },
    ],
  },
  {
    id: 'meals',
    title: 'Light meals',
    accentWord: 'meals',
    image: '/images/chicken-strips.jpg',
    imageAlt: 'Crispy chicken strips and chips on a plate',
    items: [
      { name: 'Portion of chips', price: 'N$35' },
      { name: 'Corndogs & chips', price: 'N$70' },
      { name: 'Chicken strips & chips', price: 'N$80' },
      { name: 'Margarita pizza', price: 'N$110' },
      { name: 'Pepperoni pizza', price: 'N$140' },
      { name: 'Hawaiian pizza', price: 'N$150' },
      { name: 'Namibiana pizza', price: 'N$170' },
      { name: 'Extra cheese or ham', price: 'N$15' },
    ],
  },
  {
    id: 'cold',
    title: 'Cold drinks',
    accentWord: 'drinks',
    items: [
      { name: 'Soft drinks', desc: 'Coke, Coke Zero, Creme Soda, Fanta, Sparberry or Sprite', price: 'N$25' },
      { name: 'Iced tea', desc: 'Lemon or peach', price: 'N$30' },
      { name: 'Liqui Fruit', desc: 'Apple, orange, mango & orange or red grape', price: 'N$30' },
      { name: 'Powerade', desc: 'Blue Mountain, Island Burst or Naartjie', price: 'N$35' },
      { name: 'Appletizer', price: 'N$35' },
      { name: 'Grapetizer', price: 'N$40' },
      { name: 'Sparkling or still water', price: 'N$20' },
    ],
  },
  {
    id: 'ice-cream',
    title: 'Ice cream',
    accentWord: 'cream',
    image: '/images/ice-cream.jpg',
    imageAlt: 'A strawberry and vanilla ice cream cone held up against a yellow wall',
    items: [
      { name: 'Zooty Pop Orange', price: 'N$20' },
      { name: 'Zooty Fruit', price: 'N$30' },
      { name: 'Mega Cookies', price: 'N$35' },
      { name: 'Rolo', price: 'N$35' },
      { name: 'Crunchie', price: 'N$45' },
      { name: 'Dairy Milk', price: 'N$45' },
      { name: 'Oreo', price: 'N$45' },
      { name: 'Oreo ice cream sandwich', price: 'N$45' },
      { name: 'Flake cone', price: 'N$50' },
      { name: 'King Cone Bar-One', price: 'N$50' },
    ],
  },
  {
    id: 'treats',
    title: 'Treats',
    accentWord: '',
    image: '/images/candy-floss.jpg',
    imageAlt: 'Pink candy floss on a stick held up against the sky',
    items: [
      { name: 'Lollipop', price: 'N$4' },
      { name: 'Amazon chew bar', price: 'N$4' },
      { name: 'Fizzer', price: 'N$5' },
      { name: 'Packet of chips', price: 'N$10' },
      { name: 'Kit Kat (20g)', price: 'N$10' },
      { name: 'Smarties (17g box)', price: 'N$12' },
      { name: 'Bar One (52g)', price: 'N$20' },
      { name: 'Skittles', price: 'N$25' },
      { name: 'Candy floss', price: 'N$30' },
      { name: 'Popcorn', price: 'N$20 · Medium N$25' },
    ],
  },
];
