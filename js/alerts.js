import { isEscKey } from "./utils.js";

const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const onAlertEscKeyDown = (evt) => {
  if (isEscKey(evt)) {
    removeAlert();
  }
};

const removeAlert = (type) => {
  document.querySelector(type).remove();
  document.removeEventListener('keydown', onAlertEscKeyDown);
};

const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');

  // document.addEventListener('click', (evt) => {
  //   let element = document.querySelector('.error__inner');
  //     console.log(element);
  //   if (!element.contains(evt.target)) {
  //     removeAlert('.error');
  //   }
  // });

  errorButton.addEventListener('click', () => {
    removeAlert('.error');
  });

  document.addEventListener('keydown', onAlertEscKeyDown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
};

const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;

  const successButton = successElement.querySelector('.success__button');

  // document.addEventListener('click', (evt) => {
  //   let element = document.querySelector('.success__inner');
  //   if (!element.contains(evt.target)) {
  //     removeAlert('.success');
  //   }
  // });

  successButton.addEventListener('click', () => {
    removeAlert('.success');
  })

  document.addEventListener('keydown', onAlertEscKeydown);

  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
};

export { showError, showSuccess }
