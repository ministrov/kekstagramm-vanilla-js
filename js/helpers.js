const countChar = (text, char) => {
  [text, char] = [text.toLowerCase(), char.toLowerCase()];

  let i = 0;
  let count = 0;

  while (i < text.length) {
    if (text[i] === char) {
      count += 1
    }

    i++;
  }

  return count;
}

// Second way of resolvin it
const countChars2 = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1; // eslint-disable-line operator-assignment
    }
    i = i + 1; // eslint-disable-line operator-assignment
  }

  return count;
};

const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
};

const encrypteText = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i += 2) {
    const nextSymbol = text[i + 1] || '';

    console.log(nextSymbol);

    result = `${result}${nextSymbol}${text[i]}`;
  }

  return result;
}

export {
  countChar,
  countChars2,
  makeItFunny,
  encrypteText
}
