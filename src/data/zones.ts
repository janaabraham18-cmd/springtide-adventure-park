// The park's play zones, in the order they're listed on the home page
// ("Seven ways to leave the ground"). The attractions come from the park's
// opening coverage and its own photos (Oct 2026).

export type Zone = {
  id: string;
  name: string;
  accentWord: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export const zones: Zone[] = [
  {
    id: 'open-court',
    name: 'Open Jump Court',
    accentWord: 'Jump',
    blurb:
      'The heart of the park: a big grid of linked trampoline beds running right up to the foam pit. Bounce from bed to bed, practise flips, or just see how high you can get.',
    image: '/images/court-main.jpg',
    imageAlt: 'The main trampoline court at Springtide Adventure Park, with blue padded frames and a foam pit',
  },
  {
    id: 'game-trampolines',
    name: 'Interactive Game Zone',
    accentWord: 'Game',
    blurb:
      'Trampolines wired up to big screens, so every bounce plays the game. Dance, dodge and hit the targets for a high score, then race the lights on the Tap Tap Fun cube.',
    image: '/images/game-zone.jpg',
    imageAlt: 'The Tap Tap Fun light-up cube beside an interactive trampoline game screen',
  },
  {
    id: 'slam-dunk',
    name: 'Slam Dunk Lanes',
    accentWord: 'Dunk',
    blurb:
      'Run, bounce, fly, dunk. Each lane launches you at a hoop set just out of normal reach — it turns everyone into a highlight reel.',
    image: '/images/slam-dunk.jpg',
    imageAlt: 'A trampoline lane leading up to a basketball hoop',
  },
  {
    id: 'dodgeball',
    name: 'Dodgeball Court',
    accentWord: 'Court',
    blurb:
      'Dodgeball, but every dodge is a bounce. Team up against your friends inside the netted cage, where the angled trampoline walls send the ball (and you) flying.',
    image: '/images/dodgeball-cage.jpg',
    imageAlt: 'Inside the dodgeball cage: angled purple trampoline walls, dodgeballs and bumper balls',
  },
  {
    id: 'battle-beam',
    name: 'Battle Beam & Foam Pit',
    accentWord: 'Beam',
    blurb:
      'Two challengers, one narrow beam, one padded pillow each. Last one standing wins — and whoever loses drops into a pit of soft foam blocks.',
    image: '/images/battle-beam.jpg',
    imageAlt: 'The yellow battle beam running across a foam pit full of purple, teal and yellow blocks',
  },
  {
    id: 'climbing-wall',
    name: 'Climbing Wall',
    accentWord: 'Wall',
    blurb:
      'A bright, chunky wall that rises straight out of the foam pit. Climb as high as you dare, then let go and drop into the soft foam blocks below.',
    image: '/images/climbing-wall.jpg',
    imageAlt: 'The blue, teal and yellow climbing wall rising out of the foam pit',
  },
  {
    id: 'bumper-balls',
    name: 'Bumper Ball Arena',
    accentWord: 'Bumper',
    blurb:
      'Step inside a giant see-through bumper ball and go head to head in the cage. It’s sumo, it’s football, it’s mostly falling over laughing.',
    image: '/images/bumper-balls.jpg',
    imageAlt: 'Clear bumper balls waiting inside the netted cage',
  },
];
