import React from "react";
import { StyleSheet, View } from "react-native";

import EventPage from "../../../components/events/EventPage";

const MyEventScreen = () => {
  return <EventPage isParticipant={true} />;
};
const styles = StyleSheet.create({});

export default MyEventScreen;
