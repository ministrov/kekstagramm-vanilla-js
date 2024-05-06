import { isEscKey } from "./utils.js";

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
}

const body = document.documentElement;
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('.img-upload__cancel');

// Open uploadModal after uploading file with picture
uploadInput.addEventListener('change', (evt) => {
  // resetSettings();
  console.log(evt.target);
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

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Step.MIN) {
    scale = Step.MIN;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});
