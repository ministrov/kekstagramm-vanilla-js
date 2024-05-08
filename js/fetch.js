const Urls = {
  GET: 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20',
  POST: 'https://23.javascript.pages.academy/kekstagram'
}

const request = async (onSuccess, onError, method, data) => {
  await fetch(Urls[method], {
    method: method,
    body: data
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    onSuccess(response);
  })
  .catch(() => {
    onError();
  })
}

export { request }

// const json = JSON;

// console.log(json);

// const albumJSON = `{
//     "band": "Bon Jovi",
//     "title": "Slippery when wet",
//     "year": 1986,
//     "tracks": [
//         "Let it rock",
//         "You give love a bad name",
//         "Livin'on a prayer",
//         "Social Disease"
//     ]
// }`;

// const albumObject = json.parse(albumJSON);

// console.log(albumObject);

// for (let [key, value] of Object.entries(albumObject)) {
//   console.log(`${key} : ${value}`);
// }

// const user = {
//   firstName: 'Keks',
//   type: 'cat',
//   favorites: [
//     'milk',
//     'meat',
//   ],
// }

// // Получим JSON-строку
// const jsonText = JSON.stringify(user);

// // {"firstName":"Keks","type":"cat","favorites":["milk","meat"]}
// console.log(typeof jsonText);

// // const TIMEOUT = 1000;

// // const makeSoup = () => {
// //   console.log(`> Иду за продуктами`);
// //   const products = [`Капуста`, `Картофель`, `Мясо`];
// //   setTimeout(() => {
// //     console.log(`> Нарезаю продукты: ${products.join(`, `)}`);
// //     setTimeout(() => {
// //       console.log(`> Продукты нарезаны!`);
// //       setTimeout(() => {
// //         console.log(`> Начинаю варить суп из: ${products.join(`, `)}`);
// //         setTimeout(() => {
// //           return Math.random() > 0.5
// //             ? console.log(`> Суп готов!`)
// //             : console.log(`> Упс! Сломалась плита.`);
// //         }, TIMEOUT);
// //       }, TIMEOUT);
// //     }, TIMEOUT);
// //   }, TIMEOUT);
// // };

// // makeSoup();


// const TIMEOUT = 1000;

// const buyProducts = () => {
//   console.log(`> Иду за продуктами...`);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const products = [`Картофель`, `Капуста`, `Мясо`];
//       resolve(products);
//     }, TIMEOUT);
//   });
// };

// const prepareProducts = (products) => {
//   console.log(`> Нарезаю продукты: ${products.join(`, `)}`);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`> Продукты нарезаны!`);
//       resolve(products);
//     }, TIMEOUT);
//   });
// };

// const makeSoup = (prepareProducts) => {
//   console.log(`> Начинаю варить суп из: ${prepareProducts.join(`, `)}`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return Math.random() > 0.5
//         ? resolve(`> Суп готов!`)
//         : reject(`> Упс! Сломалась плита.`);
//     }, TIMEOUT);
//   });
// };

// buyProducts()
//   .then(prepareProducts)
//   .then(makeSoup)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
