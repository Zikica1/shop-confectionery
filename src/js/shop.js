async function loader() {
  const pages = await import('./main.js');

  pages.render();
}

loader();

const catTabs = document.querySelectorAll('.categ-item');
const catLi = document.querySelectorAll('.category ul li');

function handleCategory(index) {
  catTabs.forEach((item) => {
    item.classList.remove('action');

    catLi.forEach((item) => {
      item.classList.remove('current');
    });

    catTabs[index].classList.add('action');
    catLi[index].classList.add('current');
  });
}

catTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => handleCategory(i));
});
