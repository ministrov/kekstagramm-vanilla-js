/**
 * This is a basic closure function
 * @returns {Number} count it is number
*/
function createCounter() {
  let count = 0; // Приватная переменная, доступная только внутри createCounter
  console.log(count);
  return function() {
    count += 1;
    console.log(count);
    return count;
  };
}

const counter = createCounter(); // counter — это функция, замыкающая в себе переменную count

export {
  counter
}
