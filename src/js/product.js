async function loader() {
  const pages = await import('./main.js');
  pages.render();
}
loader();

const inputCount = document.querySelector('#input-count');
const btnCount = document.querySelectorAll('.quantity-btn');

function stepper() {
  let id = this.getAttribute('id');
  let min = parseInt(inputCount.getAttribute('min'));
  let max = parseInt(inputCount.getAttribute('max'));
  let step = parseInt(inputCount.getAttribute('step'));
  let value = parseInt(inputCount.value);
  let calStep = id === 'increment' ? step : -step;

  let newValue = value + calStep;

  if (newValue >= min && newValue <= max) {
    inputCount.value = newValue;
  }
}

btnCount.forEach((btn) => {
  btn.addEventListener('click', stepper);
});

//product-header - tab-title
const tabs = document.querySelectorAll('.tab-title');

function handleChangeTitle(index) {
  tabs.forEach((tab) => tab.classList.remove('active'));

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    }
  });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => handleChangeTitle(i));
});
