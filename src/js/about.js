async function Load() {
  const pages = await import('./main.js');

  pages.render();
}

Load();

gsap.from('.col-1-img-anim', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.col-1-img-anim',
    start: 'top 60%',
    end: 'bottom 40%',
    markers: false,
    scrub: false,
  },
});

const years = gsap.utils.toArray('.col-year-anim');

years.forEach((item) => {
  gsap.from(item, {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: 'top 70%',
      end: 'bottom 55%',
      markers: false,
      scrub: false,
    },
  });
});

const descriptions = gsap.utils.toArray('.col-description-anim');

descriptions.forEach((description) => {
  gsap.from(description, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: description,
      start: 'top 70%',
      end: 'bottom 60%',
      markers: false,
      scrub: false,
    },
  });
});

gsap.from('.col-2-img-anim', {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.col-2-img-anim',
    start: 'top 70%',
    end: 'bottom 55%',
    markers: false,
    scrub: false,
  },
});
