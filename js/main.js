import { addPhotos, photos } from './data.js';
// import { counter } from './counter.js';
import { isCastle, isInfant, isEven, isFirstLetterInUpperCase, isInternationalPhone } from './functions.js';

// const STOP_NUMBER = 23;

addPhotos();

console.log(photos);

// for (let i = 0; i < STOP_NUMBER; i++) {
//   console.log(counter());
// }

console.log(isInfant(4));

console.log(isCastle('Myname'));

console.log(isEven(5));

console.log(isFirstLetterInUpperCase('dkfdf'));
console.log(isFirstLetterInUpperCase('My JS'));

console.log(isInternationalPhone('+74569850009'));
console.log(isInternationalPhone('74569850009'));

