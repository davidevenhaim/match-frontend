import React from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/core";

import EventPage from "../../../components/feed/event/EventPage";
import { useSelector } from "react-redux";

const MyEventScreen = () => {
  const route = useRoute();
  const eventId = route.params.event.id;
  const curAthlete = useSelector((state) => state.userInfo);
  const event = curAthlete.upcomingEvents.find((event) => event.id === eventId);
  let isParticipant = false;
  if (event) {
    isParticipant = true;
  }

  return <EventPage isParticipant={isParticipant} />;
};
const styles = StyleSheet.create({});

export default MyEventScreen;
