import React from "react";
import { useSelector } from "react-redux";

import EventPage from "../../../../components/feed/event/EventPage";

const EventScreen = ({ route }) => {
  const eventId = route.params.event.id;
  const curAthlete = useSelector((state) => state.userInfo);
  const event = curAthlete.upcomingEvents.find((event) => event.id === eventId);
  let isParticipant = false;
  if (event) {
    isParticipant = true;
  }
  return <EventPage isParticipant={isParticipant} />;
};

export default EventScreen;
