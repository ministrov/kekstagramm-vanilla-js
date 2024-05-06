import { isEscKey } from "./utils";

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
