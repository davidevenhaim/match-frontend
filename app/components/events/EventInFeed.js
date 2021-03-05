import React from "react";
import { View, StyleSheet } from "react-native";

import SportsIcon from "../SportsIcon";
import Text from "../layouts/Text";

import colors from "../../config/colors";
// import { format } from 'date-fns';
// {format(event.eventDate, 'MMM Do')}

const Event = ({ event }) => {
  const eventSport = event.sport.toLowerCase();
  return (
    <View
      style={[
        styles.container,
        { borderColor: colors.sportColors[eventSport] },
      ]}
    >
      <Text>{event.eventName}</Text>
      <Text>
        {event.curPlayersAmount}/{event.maxPlayersAmount}
      </Text>
      <Text>{event.eventDate}</Text>
      <SportsIcon sport={eventSport} iconSize={25} backgroundSize={35} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
  },
});

export default Event;
