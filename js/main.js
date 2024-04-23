/**
 *
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
 */
const getRandomRange = function(min, max) {
  if (min < 0 && max < 0) return;

  if (max < min) return;

  return Math.floor(Math.random() * (min - max + 1)) + min;
}

/**
 *
 * @param {String} str The string to check
 * @param {Number} length Max length of the string
 * @returns {Boolean} true or false
*/
const checkStrLength = function(str, length = 50) {
  let total;
  if (str.length < length) {
    total = false;
  } else {
    total = true;
  }

  return total;
}

/**
 *
 * @param {String} first The first name
 * @param {String} last  The last name
 * @param {Object} [params={}] Additional parameters
 * @param {Number} [params.age] Optional age
 * @param {String} [params.city] Optional city
 */
const textFunction = (first, last, params = {}) => {
  const { age = 22, city = 'Medelin' } = params;

  console.log(`The name is ${first} ${last}`);
  console.log(`The age is ${age} and the city ${city}`)
}

console.log(textFunction('Anton', 'Zhilin'));

const weathers = ['Солнечно', 'Ветрено', 'Дождливо', 'Морозно'];

/**
 *
 * @param {Array} weather
 * @returns checks to do
 */

const getСlothing = function (weather) {
  if (weather === 'Солнечно') {
    return 'Майку';
  } else if (weather === 'Ветрено') {
    return 'Куртку';
  } else if (weather === 'Дождливо') {
    return 'Дождевик';
  } else {
    return 'Пуховик';
  }
}

for (let i = 0; i < weathers.length; i++) {
  console.log('Что надеть, если сейчас ' + weathers[i] + '? --> ' + getСlothing(weathers[i]));
};

/**
 * Refactoring getСlothing2 function
 * @param {Array} weather
 * @returns checks
 */

const getСlothing2 = function (weather) {
  switch (weather) {
    case 'Солнечно':
      return 'Майку';
    case 'Ветрено':
      return 'Куртку';
    case 'Дождливо':
      return 'Дождевик';
    case 'Морозно':
      return 'Пуховик';
    case 'Пасмурно':
      return 'Плащ';
    default:
      return 'Непонятно!';
  }
}


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
