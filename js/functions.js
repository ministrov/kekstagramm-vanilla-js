const isInfant = (age) => age < 1;

const isCastle = (type) => type === 'Castle';

const isEven = (number) => number % 2 === 0 ? true : false;

const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];

  return firstLetter.toUpperCase() === firstLetter;
}

const isInternationalPhone = (phone) => phone[0] === '+';

export {
  isInfant,
  isCastle,
  isEven,
  isFirstLetterInUpperCase,
  isInternationalPhone
}
