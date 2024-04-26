import { addPhotos, photos } from './data.js';
import { makeUniqueRandomIntegerGenerator, createSecretStorage } from './counter.js';

addPhotos();

console.log(photos);

// const getUniqueRandomInteger = makeUniqueRandomIntegerGenerator(1, 5);

// console.log(getUniqueRandomInteger());
// console.log(getUniqueRandomInteger());
// console.log(getUniqueRandomInteger());

// console.log('-----------------------');

// const getAnotherUniqueRandomInteger = makeUniqueRandomIntegerGenerator(2, 4);

// console.log(getAnotherUniqueRandomInteger());
// console.log(getAnotherUniqueRandomInteger());
// console.log(getAnotherUniqueRandomInteger());

const saveSecret = createSecretStorage();
saveSecret('Совы не то, чем кажутся');

console.log(secrets[0]);



