import { renderPhotos } from "./userPicture.js";
import { request } from "./fetch.js";
import { showError } from "./alerts.js";
import './editor.js';
import './effects.js';
import './validation.js';
import './fetch.js';
import './alerts.js';

const onSuccess = (data) => {
  console.log(data);
  renderPhotos(data.map(item => {
    console.log(item);
  }));
};

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
};

request(onSuccess, onError, 'GET');
