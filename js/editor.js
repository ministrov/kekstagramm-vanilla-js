import { isEscKey } from "./utils.js";
import { showError, showSuccess } from "./alerts.js";
import { effectLevel, lastClass } from "./effects.js";

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
}

const body = document.querySelector('body');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('.img-upload__cancel');

// Open uploadModal after uploading file with picture
uploadInput.addEventListener('change', () => {
  resetSettings();
  uploadModal.classList.remove('hidden');
  body.classList.remove('modal-open');
});

// Closing uploadModal
const closeModal = () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('.modal-open');
  uploadInput.value = '';
}

uploadModalClose.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (isEscKey(evt)) {
    closeModal();
  }
});

// Zooming uploaded picture
const buttonPlus = uploadModal.querySelector('.scale__control--bigger');
const buttonMinus = uploadModal.querySelector('.scale__control--smaller');
const scaleValue = uploadModal.querySelector('.scale__control--value');
const imagePreview = uploadModal.querySelector('.img-upload__preview > img');

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  imagePreview.style.filter = '';
  if (lastClass) {
    imagePreview.classList.remove(lastClass);
  }

  scaleValue.value = '100%';
  effectLevel.classList.add('visually-hidden');
}

const getScaleValue = (scale) => {
  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
}

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  getScaleValue(scale);
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }

  getScaleValue(scale);
});

// Send data to server from form
const uploadForm = document.querySelector('.img-upload__form');

const onSuccess = () => {
  showSuccess('Awesome, the form was sent!!!');
  closeModal();
  uploadForm.reset();
}

const onError = () => {
  showError('OOps, there was going wrong!!!');
}

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(uploadForm);
  const formDataAsObject = Object.fromEntries(formData);

  for (const data of formData) {
    console.log(data);
  }

  console.log(formData);
  console.log(typeof formData);
  console.log(formData.get('name'));
  console.log(formDataAsObject);

  // Реализовать возможность добавления фотки в массив

  try {
    onSuccess();
  } catch (e) {
    console.log(e);
    onError();
  }
  // console.log('Form has been submitted');

  // request(onSuccess, onError, 'POST', new FormData(evt.target));
});
