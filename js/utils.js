/**
 *
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
 */
const getRandomRange = function (min, max) {
  if (min < 0 || max < 0) return;

  if (max < min) {
    [min, max] = [max, min];
  };

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomRange(1, 15)

/**
 *
 * @param {String} str The string to check
 * @param {Number} length Max length of the string
 * @returns {Boolean} true or false
*/
const checkStrLength = function(str, sign) {
  return str.length <= sign ? true : false;
}

checkStrLength('Mynamedisdf', 12);

/**
 * The function get a random array's element
 * @param {Array} array of element to get
 * @returns Random array element
 */
const getRandomArrayElement = function(array) {
  return array[getRandomRange(0, array.length - 1)];
}

export {
  getRandomRange,
  checkStrLength,
  getRandomArrayElement
}

// /**
//  * This is a basic closure function
//  * @returns {Number} count is number
// */
// function createCounter() {
//   let count = 0; // Приватная переменная, доступная только внутри createCounter
//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const counter = createCounter(); // counter — это функция, замыкающая в себе переменную count
// console.log(counter()); // 1
// console.log(counter()); // 2
