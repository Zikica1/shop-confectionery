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

const buttons = gsap.utils.toArray('.btn-anim');

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

const mm3 = gsap.matchMedia();

mm3.add('(min-width: 1024px)', () => {
  gsap.to('.image-landing-4-anim', {
    scale: 1.1,
    duration: 1,
    scrollTrigger: {
      trigger: '.landing-img-4',
      start: 'top 60%',
      end: 'bottom 30%',
      markers: false,
      scrub: 1,
    },
  });

  gsap.to('.image-landing-5-anim', {
    y: -70,
    duration: 0.1,
    scrollTrigger: {
      trigger: '.imageLanding5',
      start: 'top 70%',
      end: '+=50 50%',
      markers: false,
      scrub: 1,
    },
  });

  gsap.from('.image-landing-6-anim', {
    rotate: '-25deg',
    duration: 0.2,
    scrollTrigger: {
      trigger: '.imageLanding5',
      start: 'top 70%',
      end: '+=100 50%',
      markers: false,
      scrub: 1,
    },
  });
});

//shop-card--ani

gsap.from('.shop-title', {
  scale: '1.5',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.shop-category',
    start: 'top 70%',
    end: '+=100 60%',
    markers: false,
    scrub: false,
  },
});

const shopCards = document.querySelectorAll('.shop-card');

const shopObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) shopObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25,
    rootMargin: '0px 0px -100px 0px',
  }
);
shopCards.forEach((card) => {
  shopObserver.observe(card);
});

const mm2 = gsap.matchMedia();

mm2.add('(min-width: 1024px)', () => {
  gsap.from('.card-img-anim', {
    scale: 1.3,
    // duration: 0.5,
    scrollTrigger: {
      trigger: '.shop-card-2',
      start: 'top 65%',
      end: 'bottom 10%',
      markers: false,
      scrub: 1,
    },
  });
});
