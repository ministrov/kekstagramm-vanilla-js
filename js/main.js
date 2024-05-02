import { addPhotos, photos } from "./data.js";
import { createSecretStorage } from "./counter.js";
import { getLetter } from "./functions.js";
import { renderPhotos } from "./userPicture.js";

addPhotos();

renderPhotos();

console.log(photos);

const saveSecret = createSecretStorage();
saveSecret("Совы не то, чем кажутся");

// console.log(secrets[0]);

// const mainDocument = document.documentElement;
// console.log(mainDocument);
// // console.log(mainDocument.children);

// for (let i = 0; i < mainDocument.children.length; i++) {
//   const child = mainDocument.children[i];
//   console.log(child.tagName.toLowerCase());

//   for (let j = 0; j < child.children.length; j++) {
//     const innerChild = child.children[j];
//     console.log('|---' + innerChild.tagName.toLowerCase());
//   }
// }

