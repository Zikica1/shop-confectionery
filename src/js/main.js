export function render() {
  const menuBtn = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation-primary');
  const closeBtn = document.querySelector('.close-button');
  const shopBasket = document.querySelector('.shopping-basket');
  const shopCart = document.querySelector('.shopping-cart');
  const shopBtnClos = document.querySelector('.shopping-cart-btn');
  let menuClick = false;

  function handleActions() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      shopCart.classList.toggle('action');
    }

    menuClick = true;
  }

  function toggleAction() {
    menuBtn.classList.add('open');
    nav.classList.toggle('show');
    shopCart.classList.remove('action');
  }

  menuBtn.addEventListener('click', toggleAction);

  shopBasket.addEventListener('click', () => {
    handleActions();
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
    menuBtn.classList.remove('open');
  });

  //shop button

  shopBtnClos.addEventListener('click', () => {
    if (menuClick) {
      shopCart.classList.remove('action');
    }

    menuClick = false;
  });
}
