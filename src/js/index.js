async function load() {
  const pages = await import('./main.js');

  pages.render();
}

load();

//header

const tl1 = gsap.timeline();

tl1
  .from('.logo', {
    y: -50,
    opacity: 0,
    duration: 1,
  })
  .from(
    '.shopping-basket',
    {
      y: -10,
      x: 5,
      opacity: 0,
      duration: 1,
    },
    '-=0.4'
  )
  .from(
    '.hamburger',
    {
      y: -10,
      x: 10,
      opacity: 0,
      duration: 1,
    },
    '-=0.5'
  );

//navigation
const mm1 = gsap.matchMedia();

mm1.add('(min-width: 910px)', () => {
  gsap.from('.anim1', {
    opacity: 0,
    x: 100,
    y: -20,
    duration: 1.5,
  });
});
