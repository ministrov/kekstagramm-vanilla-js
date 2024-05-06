const MAX_SYMBOL = 20;
const MAX_HASHTAGS = 5;
const MAX_COMMENTS_LENGTH = 140;

const inputHashTag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');
  let inputCommentText = inputComment.value;

  if (inputCommentText.length > MAX_COMMENTS_LENGTH) {
    inputComment.setCustomValidity('Максимум 140 символов');
  }
});

inputHashTag.addEventListener('input', () => {
  inputHashTag.setCustomValidity('');

  let inputText = inputHashTag.value.toLowerCase().trim();

  if (!inputText) return;

  console.log(inputHashTag);
  console.log(inputText);
});
