/**
 *
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
 */
const getNumerInRange = function(min, max) {
  if (min < 0 || max < 0) return;

  if (max < min) {
    [min, max] = [max, min];
  };

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {String} str The string to check
 * @param {Number} sign Max length of the string
 * @returns {Boolean} true or false
*/
const checkStrLength = function(str, sign) {
  return str.length <= sign ? true : false;
}

/**
 * The function get a random array's element
 * @param {Array} array of element to get
 * @returns Random array element
 */
const getRandomArrayElement = function(array) {
  return array[getNumerInRange(0, array.length - 1)];
}

export {
  getNumerInRange,
  checkStrLength,
  getRandomArrayElement
}
