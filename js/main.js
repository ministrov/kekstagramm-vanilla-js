

/**
 * The function get any string message
 * @returns {String} Return random string with index from 0 to 6
*/

const getAnyMessages = function () {
  const MESSAGES = [
    'В целом всё неплохо. Но не всё.',
    'Всё отлично!',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
  ];

  return MESSAGES[getRandomRange(0, MESSAGES.length - 1)];
}

/**
 * The function have to get a random description out from an array of string
 * @returns {String} a random string
 */
const getRandomDescription = function () {
  const DESCRIPTION = [
    "The photo shows a user with a bright smile.",
    "In the photo, the user is standing in front of a beautiful landscape.",
    "The user's photo is a selfie taken in a room with soft lighting.",
    "The photo depicts the user holding a cute pet.",
    "In the user's photo, they are seen enjoying a meal at a restaurant.",
    "The user's photo is a group picture with friends at a party.",
    "The photo shows the user during a hiking trip, with a mountainous backdrop.",
    "In the photo, the user is seen at a beach during sunset.",
    "The user's photo is a professional headshot with a neutral background.",
    "The photo depicts the user in a candid moment, laughing at something off-camera."
  ];

  return DESCRIPTION[getRandomRange(0, DESCRIPTION.length - 1)];
}

/**
 * This function generate a classic object of some photos creating by user
 * @returns {Object} Object with data to use
*/
const generateObject = function () {
  return {
    id: getRandomRange(1, 25),
    url: `photos/${getRandomRange(1, 25)}.jpg`,
    description: `${getRandomDescription()}`,
    likes: getRandomRange(15, 200),
    comments: [
      {
        id: 135,
        avatar: `img/avatar-${getRandomRange(1, 6)}.svg`,
        message: getAnyMessages(),
        name: 'Артем',
      },
      {
        id: 136,
        avatar: `img/avatar-${getRandomRange(1, 6)}.svg`,
        message: getAnyMessages(),
        name: 'Артем',
      },
      {
        id: 137,
        avatar: `img/avatar-${getRandomRange(1, 6)}.svg`,
        message: getAnyMessages(),
        name: 'Артем',
      },
      {
        id: 138,
        avatar: `img/avatar-${getRandomRange(1, 6)}.svg`,
        message: getAnyMessages(),
        name: 'Артем',
      }
    ]
  }
}

/**
 *Function need to return an array with 25 object of user's photos
 * @returns {Array} Array of 25 generated objects
*/
const generateArrayOfPhotos = function () {
  let photos = [];

  for (let i = 0; i < 25; i++) {
    photos.push(generateObject());
  }

  return photos;
}

console.log(generateArrayOfPhotos());

// const photos = generateArrayOfPhotos();

// const comments = photos.map(item => [...item.comments]);

// console.log(comments);


