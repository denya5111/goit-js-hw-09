import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector('#datetime-picker');

const startButton = document.querySelector('button[data-start]');

const timerDays = document.querySelector('span[data-days]');

const timerHours = document.querySelector('span[data-hours]');

const timerMinutes = document.querySelector('span[data-minutes]');

const timerSeconds = document.querySelector('span[data-seconds]');

let timerOver = false;

let selectDate = null;

const options = {
  clickOpens: true,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0];

    if (selectDate < new Date()) {
      alert('Please choose a date in the future');
      return;
    }
    startButton.disabled = false;
  },
};

startButton.disabled = true;

flatpickr(inputDate, options);

startButton.addEventListener('click', handlerClickStartButton);

function handlerClickStartButton() {
  startButton.disabled = true;

  const timerIntervalId = setInterval(() => {
    if (timerOver) {
      clearInterval(timerIntervalId);

      timerOver = false;

      options.clickOpens = true;

      flatpickr(inputDate, options);

      return;
    }
    updateTimer(convertMs(selectDate.getTime() - new Date().getTime()));

    options.clickOpens = false;

    flatpickr(inputDate, options);
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  timerDays.textContent = days;

  timerHours.textContent = hours;

  timerMinutes.textContent = minutes;

  timerSeconds.textContent = seconds;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    timerOver = true;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
