import { isEscKey } from "./utils.js";

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

// Just hide
const commentsCount = bigPicture.querySelector('.social__comment-count');
// const commentsLoader = bigPicture.querySelector('.social__comments-loader');
// commentsCount.classList.add('hidden');
// commentsLoader.classList.add('hidden');

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentsList.innerHTML = '';
}

const onBigPictureEscClose = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      onBigPictureCloseClick();
    }
  });
  document.removeEventListener('keydown', onBigPictureEscClose);
}

// The function for inputing comments

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');

const renderComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
}

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => commentsListFragment.appendChild(renderComment(comment)));

  commentsList.appendChild(commentsListFragment);
}

const showBigPicture = (picture) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  commentsCount.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  onBigPictureEscClose();

  bigPicture.classList.remove('hidden');
  renderComments(picture.comments);
}

export { showBigPicture }
