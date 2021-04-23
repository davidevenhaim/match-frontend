const event = {
  id: "1234",
  eventName: "Match & Roll",
  eventDate: new Date(),
  sport: "default",
  captain: athlete,
  players: [athlete],
  curPlayersAmount: 0,
  maxPlayersAmount: 0,
};

const athlete = {
  id: "123456",
  name: "Match",
  favoriteSport: ["default"],
  upcomingEvents: [event],
  connection: [],
};

export default {
  event,
  athlete,
};
