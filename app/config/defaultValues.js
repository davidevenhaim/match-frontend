export const defaultEvent = {
  id: "1234",
  captain: { avatar: "", name: "Match", favoriteSport: ["default"] },
  curPlayersAmount: 0,
  eventName: "Match & Roll",
  eventDate: new Date(),
  location: {},
  maxPlayersAmount: 0,
  players: [defaultAthlete],
  sport: "default",
};

export const defaultAthlete = {
  avatar: "Match",
  id: "123456",
  name: "Match",
  favoriteSport: ["default"],
  upcomingEvents: [defaultEvent],
  connection: [],
};
