import { renderPhotos } from "./userPicture.js";
import { generateMockPhotos } from "./mocks.js";
import { shuffleArray } from "./utils.js";
// import { lastComments } from "./hexlet-Bom.js";
import { getTotalAmount } from "./hexlet-array.js";
import './editor.js';
import './effects.js';
import './validation.js';
import './fetch.js';
import './alerts.js';
import './load-image.js';


const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const filter = document.querySelector('.img-filters');
filter.classList.remove('img-filters--inactive');

let photos = [];

generateMockPhotos(photos);

renderPhotos(photos);

const removeActiveClass = () => {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
}

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
}

const filters = {
  'filter-default': () => {
    renderPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD));
  },
  'filter-random': () => {
    renderPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));
  },
  'filter-discussed': () => {
    renderPhotos(photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    }));
  }
};

const onFilterClick = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
};

filter.addEventListener('click', onFilterClick);

// getData((wizards) => {
//   renderSimilarList(wizards);
//   setEyesClick(() => renderSimilarList(wizards));
//   setCoatClick(() => renderSimilarList(wizards));
// });

// setUserFormSubmit(closeUserModal);

// console.log(moveToURL('https://google.com'));

// Пытаюсь вместо страницы фоток , по нажатию на ссылку табов, показать страницу табов

// const html = document.querySelector('html');
// const tabsContent = document.querySelector('#tabs').content;
// const tabLink = document.querySelector('[data-tabs="data-tabs"]');

// document.addEventListener('click', (evt) => {
//   if (evt.target === tabLink) {
//     html.innerHTML = '';
//     html.innerHTML = tabsContent.innerHTML;
//   }
// });
// console.log(tabsContent);
// console.log(html);
// console.log(getSameParity([2, 5, 6, 8]));
// console.log(getSameParity([1, 3, 4, 6, 7, 9]));
console.log(getTotalAmount(['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'], 'usd'));

// Adding user photo to an array of photos
document.addEventListener('submit', (evt) => {
  evt.preventDefault();

  console.log('submitted');
});

