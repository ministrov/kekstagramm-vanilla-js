const getSameParity = (/** @type {string | any[]} */ array) => {
  let result = [];
  const remainder = Math.abs(array[0] % 2);

  if (array.length === 0) {
    return [];
  }

  for (let item of array) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
}

const getTotalAmount = (currencies, currency) => {
  // let total = 0;

  // for (const item of currencies) {
  //   if (item.slice(0, currencies.length) === currency) {
  //     total += Number(currency);
  //   }
  // }

  // return total;
};

export {
  getSameParity,
  getTotalAmount
}
