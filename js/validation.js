import { onEscapeDown } from "./utils.js";

const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_COMMENTS_LENGTH = 140;

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');
  let inputCommentText = inputComment.value;

  if (inputCommentText.length > MAX_COMMENTS_LENGTH) {
    inputComment.setCustomValidity('Максимум 140 символов');
  }
});

inputHashtag.addEventListener('input', () => {
  inputHashtag.setCustomValidity('');

  let inputText = inputHashtag.value.toLowerCase().trim();

  if (!inputText) {
    return;
  }

  let inputArray = inputText.split(/\s+/);

  // let inputArrayNum = inputText.split(/\d/);

  // console.log(inputArray);

  // console.log(inputArrayNum);

  if (inputArray.length === 0) {
    return;
  };

  // const isStartWithNumbers = inputArray.every((item) => {
  //   return item === parseInt(item);
  // });

  // if (isStartWithNumbers) {
  //   inputHashtag.setCustomValidity('Хэш-тег не должен начинаться с цифр');
  // }

  const isStartNotHashTag = inputArray.some((item) => {
    return item[0] !== '#';
  });

  if (isStartNotHashTag) {
    inputHashtag.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
  }

  const isOnlyLatticeHashTag = inputArray.some((item) => {
    return item === '#';
  });

  if (isOnlyLatticeHashTag) {
    inputHashtag.setCustomValidity('Хэш-тег не может состоять только из решетки');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });

  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги разделяются пробелами');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });

  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться');
  }

  const isLongHashtag = inputArray.some((item) => {
    return item.length > MAX_SYMBOLS;
  });

  if (isLongHashtag) {
    inputHashtag.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решетку');
  }

  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимум 5 хэш-тегов');
  }
});

inputHashtag.addEventListener('keydown', onEscapeDown);
inputComment.addEventListener('keydown', onEscapeDown);
