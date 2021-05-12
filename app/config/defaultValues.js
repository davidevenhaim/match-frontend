export const defaultEvent = {
  id: "1234",
  eventName: "Match & Roll",
  eventDate: new Date(),
  sport: "default",
  captain: { avatar: "", name: "Match", favoriteSport: ["default"] },
  players: [defaultAthlete],
  curPlayersAmount: 0,
  maxPlayersAmount: 0,
};

export const defaultAthlete = {
  avatar: "Match",
  id: "123456",
  name: "Match",
  favoriteSport: ["default"],
  upcomingEvents: [defaultEvent],
  connection: [],
};
