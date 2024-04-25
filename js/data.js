import { getNumerInRange, getRandomArrayElement } from './utils.js';

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

const Comments = {
  MIN: 1,
  MAX: 5
}

let photos = [];

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
 * This function generate a classic object of some photos creating by user
 * @returns {Object} Object with data to use
*/
const addComments = function() {
  let comments = [];

  for (let i = 0; i < getNumerInRange(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: getNumerInRange(0, 999),
      avatar: 'img/avatar-' + getNumerInRange(1, 6) + '.svg',
      message: getNumerInRange(MESSAGES),
      name: getRandomArrayElement(names)
    });
  }

  return comments;
}

/**
 *Function need to return an array with 25 object of user's photos
 * @returns {Array} Array of 25 generated objects
*/
const addPhotos = function () {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(DESCRIPTION),
      likes: getNumerInRange(LIKES.MIN, LIKES.MAX),
      comments: addComments(),
    })
  }
}

export {
  photos,
  addPhotos
}
