const profile = {
  name: "Мой плейлист",
  rating: 7,
  track: ["трек-1", "трек-2"],
  trackCount: 3,
  stats: {
    follower: 4323,
    view: 18223,
    likes: 1247,
  },
};

const {
  name,
  ratting,
  track,
  trackCount,
  stats: { follower, view, likes },
} = profile;

console.log(ratting, track, trackCount, follower, view, likes);