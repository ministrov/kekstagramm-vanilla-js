const getSameParity = (/** @type {string | any[]} */ array) => {
  let result = [];
  if (array.length === 0) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    if (array[0] % array[i] === 0) {
      result.push(array[i]);
    }
  }

  return result;
}

export default getSameParity;
