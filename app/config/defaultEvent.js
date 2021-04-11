import defaultAthlete from "./defaultAthlete";

export default {
  id: "1234",
  eventName: "Match & Roll",
  eventDate: new Date(),
  sport: "default",
  captain: defaultAthlete,
  players: [defaultAthlete],
  curPlayersAmount: 0,
  maxPlayersAmount: 0,
};
