const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape'
}

const Colors = {
  FIREBALL: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ],
};

/**
 * The function that get number in range from min to max
 * @param {Number} min From minimun number
 * @param {Number} max To maximum number
 * @returns {Number} random number in range from min to max
*/

const getNumberInRange = (min, max) => {
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
 * The function get a random array's element
 * @param {Array} array of element to get
 * @returns Random array element
*/

const getRandomArrayElement = (array) => {
  return array[getNumberInRange(0, array.length - 1)];
}

/**
 * The function checks whether ESCAPE button have been clicked or not
 * @param {Object} evt
 * @returns {Boolean} true || false
*/

const isEscKey = (evt) => {
  return evt.key === Keys.ESCAPE || evt.key === Keys.ESC;
}

/**
 * The function predicat that check
 * @param {Object} evt
*/

const onEscapeDown = (evt) => {
  if (evt.key === (Keys.ESCAPE || Keys.ESC)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

export {
  getNumberInRange,
  checkStrLength,
  getRandomArrayElement,
  isEscKey,
  onEscapeDown,
  Colors
}
