import { addPhotos, photos } from './data.js';
import { counter } from './counter.js';

const STOP_NUMBER = 23;

addPhotos();

console.log(photos);

for (let i = 0; i < STOP_NUMBER; i++) {
  console.log(counter());
}

