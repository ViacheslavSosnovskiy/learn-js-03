// const playlist = {
//   name: [1, 2, 3],
//   tracks: "мой плейлист",
// };

// console.log(playlist.tracks);
// console.log(playlist["name"]);

// сокращение

// const userName = "Mango";
// const email = saintstill@gmail.com;

// const singupData = {
//   username,
//   email,
// };

// const playlist = {
//   name: "Слава",
//   tracks: ["мой плейлист"],
//   rating: 5,
//   changeName(newName) {
//     console.log("this внутри changeName:", this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName("новое имя");

// playlist.addTrack("новый трек");

// playlist.updateRating(5);

// console.log(playlist);

const playlist = {
  name: "Слава",
  tracks: ["мой плейлист", "альбом 2005"],
  rating: 5,
  addTrack(track) {
    this.tracks.push(track);
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.addTrack("НОВЫЙ АЛЬБОМ 2021");
console.log(playlist.getTrackCount());

playlist.addTrack("НОВЫЙ АЛЬБОМ 2022");
console.log(playlist.getTrackCount());
