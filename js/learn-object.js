//    s     =

// const numbers = [...[1, 2, 3]];
// console.log(numbers);

// const tenps = [18, 2, 33, 44, 3, 7, 78];

// console.log(Math.max(...tenps)); // распление , это распаковка , втаскивает из масива

// const a = [1, 2, 3];

// const b = [...a];

// передача сложнх типов

// const a = [{ x: 1 }, { y: 2 }];

// const b = [...a];

// a[0].x = 1000;

// console.log(a);
// console.log(b);

// распление массивов

// const x = [1, 2, 3];
// const b = [1, 2, 3];
// const n = [1, 2, 3];

// const alltempt = [...x, ...b, ...n];

// распление объектов

// const a = { x: 1, y: 2 };
// const b = { x: 3, z: 2 };

// const c = {};
// Object.assign(c, a, b);

// console.log(c);
// {
//     x: 3,
//     y: 2,
//     z: 2,
// }

// const c = {
//   ...a,
//   x: 49,
//   ...b,
//   y: 74,
// };
// console.log(c);

// const setting = {
//   theme: "light",
//   howNotification: true,
//   hide: false,
// };

// const user = {
//   chowNotification: false,
//   hide: true,
// };

// const final = {
//   ...setting,
//   ...user,
// };

// console.log(final);

// ДЕСТРУКТУРИЗАЦИЯ   {} , []  до =

// const playList = {
//   name: "Мой плейлист",
//   rating: 7,
//   track: ["трек-1", "трек-2"],
//   trackCount: 3,
// };

// const { rating, name, track, autor = "user" } = playList;

// track.push("new track");

// console.log(rating, track, autor);

// масив

// const rgb = [233, 188, 33];

// const [red, green, blue];

const author = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 8,
};

const entries = Object.entries(author);
// const ratings = Object.values(authors);

// 3 уровень
for (const [name, rating] of entries) {
  // 2 уровень
  // const [name, rating] = entry;

  // 1 уровень
  // const name = entry[0];
  // const rating = entry[1];
  console.log(name, rating);
}

// for (const key of keys) {
// }

// const ratings = Object.values(authors);
// console.log(Math.min(...ratings));
