import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import SportsIcon from "../SportsIcon";
import Text from "../layouts/Text";
import IconWithText from "../layouts/IconWithText";

const Event = ({ event }) => {
  const navigation = useNavigation();
  const date = new Date(event.eventDate);
  const iconSize = 25;
  const eventSport = event.sport.toLowerCase();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EventScreen", { event: event })}
      style={[
        styles.container,
        { height: Math.min(180 + 20 * event.curPlayersAmount, 400) },
      ]}
    >
      <Text>{event.eventName}</Text>
      <View style={styles.eventDetails}>
        <IconWithText
          iconName="account-group"
          iconSize={iconSize}
          text={`${event.curPlayersAmount}/${event.maxPlayersAmount}`}
        />
        <IconWithText
          iconName="calendar"
          iconSize={iconSize}
          text={format(date, "MMM do")}
        />
      </View>
      <SportsIcon sport={eventSport} iconSize={iconSize} backgroundSize={35} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 9,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
  },
  eventDetails: {
    margin: 10,
  },
});

export default Event;
