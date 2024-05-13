import { geRandomNumberInRange, getRandomArrayElement } from './utils.js';

const PHOTO_COUNT = 25;
const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];

const DESCRIPTION = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const LIKES = {
  MIN: 15,
  MAX: 200
}

// const Comments = {
//   MIN: 1,
//   MAX: 5
// }

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
];

/**
 * The function creates an array of objects that contains user comments
 * @returns {Array} Array of comments
*/

const addComments = () => {
  const commentsArr = [];

  for (let i = 0; i < geRandomNumberInRange(3, 10); i++) {
    commentsArr.push({
      id: geRandomNumberInRange(0, 999),
      avatar: 'img/avatar-' + geRandomNumberInRange(1, 6) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(names)
    });
  }

  return commentsArr;
}


/**
 *  The function creates an array with 25 objects of user's photos
 * @param {Array} of photos
 * @returns {Array} Array of 25 generated objects
*/

const generateMockPhotos = (photos) => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(DESCRIPTION),
      likes: geRandomNumberInRange(LIKES.MIN, LIKES.MAX),
      comments: addComments(),
    })
  }
}

// const createPhotos = () => new Array(PHOTO_COUNT).fill(null).map(() => addPhotos());

export {
  generateMockPhotos,
  DESCRIPTION
}
