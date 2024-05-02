import { photos } from "./data.js";
import { showBigPicture } from "./bigPicture.js";

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (picture) => {
  const photoPreview = pictureTemplate.cloneNode(true);
  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;

  photoPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  });

  return photoPreview;
}

const renderPhotos = () => {
  let userPhotosListFragment = document.createDocumentFragment();

  photos.forEach((photo) =>{
    userPhotosListFragment.appendChild(renderPhoto(photo));
  });

  picturesList.appendChild(userPhotosListFragment);
}

export { renderPhotos };
