import { photos } from "./data.js";

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = ({ url, comments, likes }) => {
  const photoPreview = pictureTemplate.cloneNode(true);
  photoPreview.querySelector('.picture__img').src = url;
  photoPreview.querySelector('.picture__likes').textContent = likes;
  photoPreview.querySelector('.picture__comments').textContent = comments.length;

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
