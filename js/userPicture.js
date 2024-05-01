import { photos } from "./data.js";

const picturesSection = document.querySelector(".pictures");
const userPictureTemplate = document.querySelector("#picture").content;

const userPhotos = photos;

// console.log(userPhotos);
const userPhotosListFragment = document.createDocumentFragment();

userPhotos.forEach(({ url, likes, comments }) => {
  const pictureElement = userPictureTemplate.cloneNode(true);
  console.log(pictureElement);
  pictureElement.querySelector(".picture__img").src = url;
  pictureElement.querySelector(".picture__comments").textContent = comments.message;
  pictureElement.querySelector(".picture__likes").textContent = likes;

  userPhotosListFragment.appendChild(pictureElement);
});

picturesSection.appendChild(userPhotosListFragment);

export { userPhotos };
