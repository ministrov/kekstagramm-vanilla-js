import { renderPhotos } from "./userPicture.js";
import { request } from "./fetch.js";
import { showError } from "./alerts.js";
import { DESCRIPTION } from './mocks.js';
import { getRandomArrayElement, getNumberInRange } from "./utils.js";
import './editor.js';
import './effects.js';
import './validation.js';
import './fetch.js';
import './alerts.js';

const onSuccess = (data) => {
  // console.log(data);
  const newData = data.map(item => {
    return {
      ...item,
      likes: getNumberInRange(0, 999),
      comments: [getRandomArrayElement(DESCRIPTION)]
    }
  });
  console.log(newData);
  renderPhotos(newData);
};

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
};

request(onSuccess, onError, 'GET');
