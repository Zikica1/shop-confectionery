export function render() {
  const menuBtn = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation-primary');
  const closeBtn = document.querySelector('.close-button');
  const shopBasket = document.querySelector('.shopping-basket');
  const shopCart = document.querySelector('.shopping-cart');
  const shopBtnClos = document.querySelector('.shopping-cart-btn');

  function toggleAction() {
    menuBtn.classList.add('open');
    nav.classList.toggle('show');
    shopCart.classList.remove('action');
  }

  menuBtn.addEventListener('click', toggleAction);

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
    menuBtn.classList.remove('open');
  });

  shopBasket.addEventListener('click', () => {
    shopCart.classList.toggle('action');
  });

  shopBtnClos.addEventListener('click', () => {
    shopCart.classList.remove('action');
  });
}
