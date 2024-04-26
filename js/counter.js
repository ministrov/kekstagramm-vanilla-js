import { getNumerInRange } from "./utils.js";

/**
 * This is a basic closure function
 * @returns {Number} count it is number
*/

const createCounter = () => {
  let count = 0; // Приватная переменная, доступная только внутри createCounter
  console.log(count);
  return function () {
    count += 1;
    console.log(count);
    return count;
  };
}

const counter = createCounter(); // counter — это функция, замыкающая в себе переменную count

/*
  ЗАДАЧА:
  Напишите функцию, каждый вызов который будет генерировать случайные числа
  в переданном диапазоне, но так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

/**
 * Напишите функцию, каждый вызов который будет генерировать случайные числа
  в переданном диапазоне, но так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
 * @param {Number} min
 * @param {Number} max
 * @returns {Function} return closure to store currentValue variable
*/

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getNumerInRange(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getNumerInRange(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

/**
 * The function that creates a secret storage
 * @returns
*/

const createSecretStorage = () => {
  const secrets = [];

  return (secret) => {
    secrets.push(secret);
  }
}

export {
  counter,
  makeUniqueRandomIntegerGenerator,
  createSecretStorage
}
