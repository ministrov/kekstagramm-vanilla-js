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
  logDOMNodes
}
