import { renderPhotos } from "./userPicture.js";
import { generateMockPhotos } from "./mocks.js";
// import { makeItFunny } from "./helpers.js";
// import { sumNumbersFromRange, reverseString } from "./functions.js";
// import { request } from "./fetch.js";
// import { showError } from "./alerts.js";
// import { DESCRIPTION } from './mocks.js';
import { Colors, getRandomArrayElement } from "./utils.js";
import './editor.js';
import './effects.js';
import './validation.js';
import './fetch.js';
import './alerts.js';
import './filter.js';

// getData((wizards) => {
//   renderSimilarList(wizards);
//   setEyesClick(() => renderSimilarList(wizards));
//   setCoatClick(() => renderSimilarList(wizards));
// });

// setUserFormSubmit(closeUserModal);

generateMockPhotos();

renderPhotos();

// console.log(countChar('dfdfdfdfdfD', 'D'));
// console.log(makeItFunny('dsfsdfdsfsdf', 3));
console.log(getRandomArrayElement(Colors.FIREBALL));

// console.log(sumNumbersFromRange(2, 4));
// console.log(reverseString('Anton'));

// const onSuccess = (data) => {
//   // console.log(data);
//   const newData = data.map(item => {
//     return {
//       ...item,
//       likes: getNumberInRange(0, 999),
//       comments: [getRandomArrayElement(DESCRIPTION)]
//     }
//   });
//   console.log(newData);
//   renderPhotos(newData);
// };

// const onError = () => {
//   showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
// };

// request(onSuccess, onError, 'GET');
