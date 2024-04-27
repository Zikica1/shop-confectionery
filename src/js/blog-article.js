async function Load() {
  const pages = await import('./main.js');

  pages.render();
}

Load();

const shareIconsFir = document.querySelector('.share-icon-1');
const shareIconsSec = document.querySelector('.share-icon-2');
const socialCont = document.querySelector('.social-networks');
let isClicked = false;

shareIconsFir.addEventListener('click', () => {
  if (!isClicked) {
    socialCont.style.display = 'block';
    setTimeout(() => {
      socialCont.style.opacity = 1;
    }, 50);
    isClicked = true;
  } else {
    socialCont.style.display = 'none';
    setTimeout(() => {
      socialCont.style.opacity = 0;
    }, 50);
    isClicked = false;
  }
});

shareIconsSec.addEventListener('click', () => {
  shareIconsSec.classList.toggle('action');
});
