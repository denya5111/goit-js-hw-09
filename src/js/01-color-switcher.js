const startButton = document.querySelector('button[data-start]');

const stopButton = document.querySelector('button[data-stop]');

let isActive = false;

let changeColorIntervalId = null;

startButton.addEventListener('click', handlerClickStartButton);

stopButton.addEventListener('click', handlerClickStopButton);

stopButton.setAttribute('disabled', true);

function handlerClickStartButton() {
  if (isActive === true) {
    return;
  }

  isActive = true;

  startButton.setAttribute('disabled', true);

  stopButton.removeAttribute('disabled');

  changeColorIntervalId = setInterval(() => {
    const color = getRandomHexColor();

    document.body.style.backgroundColor = color;
  }, 1000);
}

function handlerClickStopButton() {
  clearInterval(changeColorIntervalId);

  stopButton.setAttribute('disabled', true);

  startButton.removeAttribute('disabled');

  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
