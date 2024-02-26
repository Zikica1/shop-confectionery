export function render() {
  const menuBtn = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation-primary');
  const closeBtn = document.querySelector('.close-button');

  function toggleAction() {
    menuBtn.classList.add('open');
    nav.classList.toggle('show');
  }

  menuBtn.addEventListener('click', toggleAction);

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
    menuBtn.classList.remove('open');
  });
}
