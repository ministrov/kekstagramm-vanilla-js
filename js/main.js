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

// /**
//  *
//  * @param {String} first The first name
//  * @param {String} last  The last name
//  * @param {Object} [params={}] Additional parameters
//  * @param {Number} [params.age] Optional age
//  * @param {String} [params.city] Optional city
//  */

// const textFunction = (first, last, params = {}) => {
//   const { age = 22, city = 'Medelin' } = params;

//   console.log(`The name is ${first} ${last}`);
//   console.log(`The age is ${age} and the city ${city}`)
// }

// console.log(textFunction('Anton', 'Zhilin'));

// const weathers = ['Солнечно', 'Ветрено', 'Дождливо', 'Морозно'];

// /**
//  *
//  * @param {Array} weather
//  * @returns checks to do
//  */

// const getСlothing = function (weather) {
//   if (weather === 'Солнечно') {
//     return 'Майку';
//   } else if (weather === 'Ветрено') {
//     return 'Куртку';
//   } else if (weather === 'Дождливо') {
//     return 'Дождевик';
//   } else {
//     return 'Пуховик';
//   }
// }

// for (let i = 0; i < weathers.length; i++) {
//   console.log('Что надеть, если сейчас ' + weathers[i] + '? --> ' + getСlothing(weathers[i]));
// };

// /**
//  * Refactoring getСlothing2 function
//  * @param {Array} weather
//  * @returns checks
//  */

// const getСlothing2 = function (weather) {
//   switch (weather) {
//     case 'Солнечно':
//       return 'Майку';
//     case 'Ветрено':
//       return 'Куртку';
//     case 'Дождливо':
//       return 'Дождевик';
//     case 'Морозно':
//       return 'Пуховик';
//     case 'Пасмурно':
//       return 'Плащ';
//     default:
//       return 'Непонятно!';
//   }
// }

// /**
//  * This function check whether the number is even or odd
//  * @param {Number} number
//  * @returns {String} 'Чётное' or 'Нечётное'
//  */

// const isEven = function (number) {
//   let result;
//   switch (number) {
//     case 0:
//       result = 'Чётное';
//       break;
//     case 1:
//       result = 'Нечётное';
//     case 2:
//       result = 'Чётное';
//     case 3:
//       result = 'Нечётное';
//     case 4:
//       result = 'Чётное';
//       break;
//     default:
//       result = 'Я умею считать только до 4 :(';
//   }
//   return result;
// }

// /**
//  *
//  * @param {Number} number
//  * @returns {String} 'Чётное' or 'Нечётное'
//  */
// const isEven2 = function (number) {
//   switch (number) {
//     case 0:
//     case 2:
//     case 4:
//       return 'Чётное'
//     case 1:
//     case 3:
//       return 'Нечётное'
//     default:
//       return 'Я умею считать только до 4 :('
//   }
// }
// isEven2(1); // 'Нечётное'


// const random = Math.floor(Math.random() * 11);

// console.log(random);

// console.log(getRandomRange(4, 9));

// const bookCount = 19;

// let result;

// result = (bookCount > 15) ? 'План на год выполнен!' : 'Читать и ещё раз читать';

// console.log(result);

// function toString(value) {
//   return '' + value;
// }

// console.log(toString(4));
// console.log(typeof toString(4));

// function toNumber(value) {
//   return +value;
// }

// const pow = function(base, exponent) {
//   let total = base;

//   for (let i = 1; i < exponent; i++) {
//     total *= base;
//   }

//   return total;
// }

// console.log(pow(2, 2));
