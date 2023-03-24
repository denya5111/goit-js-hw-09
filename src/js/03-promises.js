import Notiflix, { Notify } from 'notiflix';

const firstDelayInput = document.querySelector('input[name = "delay"]');

const delayStepInput = document.querySelector('input[name = "step"]');

const amountInput = document.querySelector('input[name = "amount"]');

const createPromiseButton = document.querySelector('button[type = "submit"]');

createPromiseButton.addEventListener('click', handleClickButton);

function handleClickButton(e) {
  e.preventDefault();

  const delayStep = Number(delayStepInput.value);

  let delaySum = Number(firstDelayInput.value);

  for (let index = 1; index <= amountInput.value; index += 1) {
    createPromise(index, delaySum)
      .then(message => Notify.success(message))
      .catch(message => Notify.failure(message));

    delaySum += delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
