import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// [data-reveal] starts hidden via `.js [data-reveal]` in global.css. With
// reduced motion we just show everything at once.
const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');

if (reduce) {
  gsap.set(reveals, { opacity: 1, y: 0 });
} else {
  ScrollTrigger.batch(reveals, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
        overwrite: true,
      }),
  });
}

// The signature "spring" move: hero headline words drop in and bounce, like
// a jumper landing on a bed. [data-bounce] headings are split word by word
// at runtime (accent-word spans are kept whole).
document.querySelectorAll<HTMLElement>('[data-bounce]').forEach((el) => {
  const words: HTMLElement[] = [];
  const wrapText = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (child.textContent ?? '').split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.append(part);
            return;
          }
          const outer = document.createElement('span');
          outer.className = 'bounce-word';
          const inner = document.createElement('span');
          inner.textContent = part;
          outer.append(inner);
          words.push(inner);
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child instanceof HTMLElement) {
        const outer = document.createElement('span');
        outer.className = 'bounce-word';
        child.replaceWith(outer);
        outer.append(child);
        words.push(child);
      }
    });
  };
  wrapText(el);
  if (reduce) return;
  gsap.fromTo(
    words,
    { yPercent: 115, rotate: 4 },
    { yPercent: 0, rotate: 0, duration: 1.1, ease: 'back.out(2.2)', stagger: 0.08, delay: 0.15 },
  );
});

// Scrapbook polaroids (About Us): drop in from above and land with a bounce.
// Only y/opacity are animated, so each card keeps its CSS tilt.
const drops = gsap.utils.toArray<HTMLElement>('[data-drop]');
if (drops.length && !reduce) {
  gsap.from(drops, {
    y: -140,
    opacity: 0,
    duration: 1.1,
    ease: 'bounce.out',
    stagger: 0.12,
    delay: 0.25,
    clearProps: 'opacity',
  });
}

// Gentle parallax on hero photos.
if (!reduce) {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: 0, scale: 1.08 },
      {
        yPercent: 10,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: { trigger: img.parentElement, start: 'top top', end: 'bottom top', scrub: true },
      },
    );
  });
}
