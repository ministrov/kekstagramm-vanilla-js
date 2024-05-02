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

export {
  isInfant,
  isCastle,
  isEven,
  isFirstLetterInUpperCase,
  isInternationalPhone,
  isLeapYear,
  getLetter,
  normalizeUrl,
  isAbsNumber
}
