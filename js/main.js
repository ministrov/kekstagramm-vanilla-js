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

/**
 * This is a basic closure function
 * @returns {Number} count is number
 */
function createCounter() {
  let count = 0; // Приватная переменная, доступная только внутри createCounter
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter(); // counter — это функция, замыкающая в себе переменную count
console.log(counter()); // 1
console.log(counter()); // 2

const b = 2;

function getNumber(number) {
  return number * 10;
}

console.log(getNumber(b));

const obj = {
  name: 'Anton',
  date: '25/05/1983',
  job: 'Freelancer',
  isMaried: false,
  hasBrother: true
}


/**
 *The function generates 25 objects of user's photos
 * @returns {Array} Array of 25 generated objects
 */
const generateArrayOfPhotos = function() {
  return console.log(['1', '2', '3', 4, false])
}
/**
 * This function generate a classic objec of some photo creating by user
 * @param {Object} data
 * @returns {Object} Object with data to use
 */
const generateObject = function(data) {
  return {
    id: data.id,
    url: data.id,
    description: data.description,
    likes: data.likes,
    comments: [],
    avatar: `img/avatar-${getRandomRange(1, 6)}.svg`,
    message: ['Всё отлично!', 'В целом всё неплохо.Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !']
  }
}


