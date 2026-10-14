// Café menu, from the park's own menu ("Spring Tide Menu December", Canva PDF,
// sent by the client in Oct 2026). Sizes are folded into one line per drink
// ("N$25 · Large N$35") to keep the board compact.

export type MenuItem = { name: string; desc?: string; price: string | null };
export type MenuSection = { id: string; title: string; accentWord: string; note?: string; items: MenuItem[] };

export const menuIsPlaceholder = false;

export const menuFootnote = 'Party packages available — enquire at reception.';

export const menu: MenuSection[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    accentWord: '',
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
    items: [
      { name: 'Iced latte', price: 'N$50' },
      { name: 'Iced mocha', price: 'N$55' },
      {
        name: 'Milkshake',
        desc: 'Strawberry, chocolate, vanilla, bubblegum or cookies & cream',
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
