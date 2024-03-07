async function load() {
  const pages = await import('./main.js');

  pages.render();
}

load();

//header

//header-animation

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

//Hero-animation
const tl2 = gsap.timeline();

tl2
  .from('.hero-title', {
    opacity: 0,
    y: -100,
    duration: 1.5,
  })
  .from(
    '.iamgeLanding2',
    {
      opacity: 0,
      y: -50,
      duration: 1.5,
    },
    '-=0.5'
  )
  .from(
    '.imageLanding1',
    {
      opacity: 0,
      y: -50,
      duration: 1.5,
    },
    '-=0.9'
  );

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-content-desc',
    start: 'top 75%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
});

tl3
  .from('.hero-content-desc', {
    opacity: 0,
    y: 50,
    duration: 1.5,
  })
  .from(
    '.imageLanding3',
    {
      opacity: 0,
      x: -100,
      duration: 1.5,
    },
    '-=0.5'
  );

const buttons = gsap.utils.toArray('.btn');

buttons.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: '.buttons',
      start: 'top 60%',
      end: 'bottom 50%',
      markers: false,
      scrub: false,
      onEnter: () => {
        item.style.willChange = 'transform,opacity';
      },
      onLeave: () => {
        item.style.willChange = 'auto';
      },
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
  });
});

const landingImg4 = document.querySelector('.imageLanding4');

gsap.from(landingImg4, {
  scrollTrigger: {
    trigger: '.landing-img-4',
    start: 'top 55%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
    onEnter: () => {
      landingImg4.style.willChange = 'transform,opacity';
    },
    onLeave: () => {
      landingImg4.style.willChange = 'auto';
    },
  },
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
});

const ImagesLanding = gsap.utils.toArray('.imageLanding5');

ImagesLanding.forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: '.landing-img-6',
      start: 'top 70%',
      end: '+=50 40%',
      markers: false,
      scrub: false,
      onEnter: () => {
        img.style.willChange = 'transform,opacity';
      },
      onLeave: () => {
        img.style.willChange = 'auto';
      },
    },
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
  });
});
