async function loader() {
  const pages = await import('./main.js');

  pages.render();
}

loader();

const catTabs = document.querySelectorAll('.categ-item');
const catLi = document.querySelectorAll('.category ul li');
const catGrou = document.querySelectorAll('.grup-product');

// function handleCategory(index) {
//   if (index >= 0 && index < catTabs.length) {
//     catTabs.forEach((tab) => {
//       tab.classList.remove('action');

//       catLi.forEach((item) => {
//         item.classList.remove('current');
//       });

//       catGrou.forEach((grup) => {
//         grup.classList.remove('current-cate');
//       });

//       catTabs[index].classList.add('action');
//       catLi[index].classList.add('current');
//       catGrou[index].classList.add('current-cate');
//     });
//   }
// }

function handleCategory(index) {
  console.log(index);

  catTabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('action');
    } else {
      tab.classList.remove('action');
    }
  });

  catLi.forEach((item) => {
    item.classList.remove('current');
  });

  catGrou.forEach((grup) => {
    grup.classList.remove('current-cate');
  });

  catLi[index].classList.add('current');
  catGrou[index].classList.add('current-cate');
}

catTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => handleCategory(i));
});
