'use strict';

/**
 *
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
 */
const getRandomRange = function(min, max) {
  if (min < 0 || max < 0) return;

  if (max < min) {
    [min, max] = [max, min];
  };

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomRange(1, 15));

/**
 *
 * @param {String} str The string to check
 * @param {Number} length Max length of the string
 * @returns {Boolean} true or false
*/
const checkStrLength = function(str, length) {
  return str.length <= length;
}

console.log(checkStrLength('Mynamedisdf', 12));

console.log(NaN === NaN);
console.log(typeof NaN);

const obj = {
  a: 1,
  b: 'какая-то строка'
};

console.log(obj.a);
console.log(obj['b']);

const house = {
  squareMeters: 145,
  floorCount: 2,
  numberOfBedroom: 2
}

console.log(house.floorCount);
console.log(house['floorCount']);
console.log((+'5') + (+'3'));

console.log(0 && '');

console.log(0 || 4);
