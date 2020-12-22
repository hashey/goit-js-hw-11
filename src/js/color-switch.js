const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//====================================================================
const refs = {
  start: document.querySelector('[data-action=start]'),
  stop: document.querySelector('[data-action=stop]'),
  container: document.querySelector('.btn-container'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.container.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target === refs.start) {
    timerId = setInterval(changeBackground, 1000);
    refs.start.disabled = true;
    refs.stop.disabled = false;
  } else if (event.target === refs.stop) {
    clearInterval(timerId);
    refs.start.disabled = false;
    refs.stop.disabled = true;
  }
}

function changeBackground() {
  const colorNum = randomIntegerFromInterval(0, 5);
  refs.body.style.backgroundColor = `${colors[colorNum]}`;
}
