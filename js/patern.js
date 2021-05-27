const showProfileInfo = function ({
  name,
  rating,
  track,
  trackCount,
  stats: { follower, view, likes },
}) {
  console.log(name, rating, track, trackCount, follower, view, likes);
};

const profile = {
  name: "Слава",
  rating: 7,
  track: ["трек-1", "трек-2"],
  trackCount: 3,
  stats: {
    follower: 4323,
    view: 18223,
    likes: 1247,
  },
};

showProfileInfo(profile);
