const isInfant = (age) => age < 1;

const isCastle = (type) => type === 'Castle';

const isEven = (number) => number % 2 === 0 ? true : false;

const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];

  return firstLetter.toUpperCase() === firstLetter;
}

const isInternationalPhone = (phone) => phone[0] === '+';

const getLetter = (string, position) => string[position - 1] || '';

const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
};

const normalizeUrl = (site) => {
  let normalizedUrl;

  if (site.startsWith('https://')) {
    normalizedUrl = site;
  } else {
    normalizedUrl = `https://${site}`;
  }

  return normalizedUrl;
}

const isAbsNumber = (number) => (number >= 0 ? number : -number);

const convertText = (str) => {
  if (str === '') return '';

  const reversable = str[0] !== str[0].toUpperCase();

  return reversable ? str.split().reverse().join('') : str;
}

const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    default:
      return 'just a number';
  }
}

const logDOMNodes = () => {
  const mainDocument = document.documentElement;
  console.log(mainDocument);
  // console.log(mainDocument.children);

  for (let i = 0; i < mainDocument.children.length; i++) {
    const child = mainDocument.children[i];
    console.log(child.tagName.toLowerCase());

    for (let j = 0; j < child.children.length; j++) {
      const innerChild = child.children[j];
      console.log('|---' + innerChild.tagName.toLowerCase());
    }
  }
}

const sumNumbersFromRange = (start, finish) => {
  let i = start;
  let sum = 0;

  while (i <= finish) {
    sum += i;
    i++;
  }

  return sum;
}

const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = `${result}${i}`;
    i++;
  }

  return result;
};

const reverseString = (string) => {
  let i = 0;
  let result = '';

  while (i < string.length) {
    result = `${string[i]}${result}`;
    i++;
  }

  return result;
};

const mySubstr = (string, length) => {
  let resultString = '';
  let i = 0;
  while (i < length) {
    resultString += string[i];
    i += 1;
  }

  return resultString;
};

// My result
const mySubstr1 = (string, length) => {
  return string.substring(string, length);
}

export {
  isInfant,
  isCastle,
  isEven,
  isFirstLetterInUpperCase,
  isInternationalPhone,
  isLeapYear,
  getLetter,
  normalizeUrl,
  isAbsNumber,
  convertText,
  getNumberExplanation,
  logDOMNodes,
  sumNumbersFromRange,
  joinNumbersFromRange,
  reverseString,
  mySubstr,
  mySubstr1
}
