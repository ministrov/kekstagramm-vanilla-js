// import random from "./helpers";

const getRandomRange = function(min, max) {
  return Math.floor(Math.random() * (min - max + 1)) + min;
}

const random = Math.floor(Math.random() * 11);

console.log(random);

console.log(getRandomRange(4, 9));
// let name = 'Anton';

// // console.log(name);

// // window.console.log(name);

// const age = 45;

// window.console.log(typeof (age + name));

// function sumNumers(first, second) {
//   return first + second;
// }

// const result = sumNumers(3, 6);

// console.log(result);

// console.log(sumNumers(2, 5));

// // const MY_GENDER = 'male';
// // const EARTH_ROUND = 40000;


