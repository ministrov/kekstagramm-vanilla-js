/**
 * This is a basic closure function
 * @returns {Number} count is number
*/
function createCounter() {
  let count = 0; // Приватная переменная, доступная только внутри createCounter
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter(); // counter — это функция, замыкающая в себе переменную count

export {
  counter
}
