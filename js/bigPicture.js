import { isEscKey } from "./utils.js";

const COMMENTS_LOAD_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

let commentsLoaded = [];

// Just hide
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

let commentsCount = COMMENTS_LOAD_STEP;

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
  commentsLoaded = comments;

  const onCommentsLoaderClick = () => {
    renderComments(comments);
  };

  commentsCount = (comments.length < COMMENTS_LOAD_STEP) ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  console.log(commentsCount);

  commentsList.innerHTML = '';

  commentCount.textContent = `${commentsLoaded.length} из ${comments.length} комментариев`;

  console.log(commentsLoaded);
  let commentsListFragment = document.createDocumentFragment();

  commentsLoaded.forEach((comment) => {
    commentsListFragment.appendChild(renderComment(comment))
  });

  commentsList.appendChild(commentsListFragment);

  if (comments.length > COMMENTS_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, { once: true });
  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENTS_LOAD_STEP;
}

const showBigPicture = (picture) => {
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  // commentCount.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  onBigPictureEscClose();

  bigPicture.classList.remove('hidden');
  renderComments(picture.comments.slice());
}

export { showBigPicture }
