const countChar = (text, char) => {
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

export {
  countChar
}
