import { renderPhotos } from "./userPicture.js";
import { generateMockPhotos, photos } from "./mocks.js";
// import { makeItFunny } from "./helpers.js";
// import { sumNumbersFromRange, reverseString } from "./functions.js";
// import { request } from "./fetch.js";
// import { showError } from "./alerts.js";
// import { DESCRIPTION } from './mocks.js';
import { Colors, shuffleArray } from "./utils.js";
import './editor.js';
import './effects.js';
import './validation.js';
import './fetch.js';
import './alerts.js';

// renderPhotos(photos);

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const filter = document.querySelector('.img-filters');
filter.classList.remove('img-filters--inactive');

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

console.log(shuffleArray(Colors.FIREBALL));

generateMockPhotos();

renderPhotos();
