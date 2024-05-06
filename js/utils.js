const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape'
}

/**
 * The function that get number in range from min to max
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
*/

const getNumerInRange = (min, max) => {
  if (min < 0 || max < 0) return;

  if (max < min) {
    [min, max] = [max, min];
  };

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * The function checks the string length
 * @param {String} str The string to check
 * @param {Number} sign Max length of the string
 * @returns {Boolean} true or false
*/

const checkStrLength = (str, sign) => {
  return str.length <= sign ? true : false;
}

/**
 * The function hides first four digit of the card
 * @param {String} cardNumber
 * @param {Number} starsCount
 * @returns {String} string with the hidden numbers
*/

const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigitsLine = cardNumber.slice(12);
  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
};

/**
 *  The function cutting the first character of the word and return in capitalize
 * @param {String} text
 * @returns {String}
*/

const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

/**
 * The function get a random array's element
 * @param {Array} array of element to get
 * @returns Random array element
*/

const getRandomArrayElement = (array) => {
  return array[getNumerInRange(0, array.length - 1)];
}

/**
 * The function checks whether ESCAPE button have been clicked or not
 * @param {Object} evt
 * @returns {Boolean} true || false
*/

const isEscKey = (evt) => {
  return evt.key === Keys.ESCAPE || evt.key === Keys.ESC;
}

export {
  getNumerInRange,
  checkStrLength,
  getRandomArrayElement,
  getHiddenCard,
  capitalize,
  isEscKey
}
