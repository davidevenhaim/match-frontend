import { useRoute } from "@react-navigation/core";
import React from "react";
import { View, StyleSheet, Image } from "react-native";

import IconWithText from "../layouts/IconWithText";
import Text from "../layouts/Text";
import SportsIcon from "../SportsIcon";
import { format } from "date-fns";

import colors from "../../config/colors";
import ShowEventPlayers from "../athletes/ShowEventPlayers";
import { Avatar } from "react-native-elements";

const EventPage = () => {
  const route = useRoute();

  const event = route.params.event;
  const sport = event.sport.toLowerCase();
  const date = new Date(event.eventDate);
  const iconSize = 25;

  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/sports/soccer.jpg")}
        />
        <Text style={styles.eventName}>{event.eventName}</Text>
        <Text style={styles.evetnDetails}>{event.eventName}</Text>
      </View>
      <View
        style={[
          styles.detailsContainer,
          { borderColor: colors.sportColors[sport] },
        ]}
      >
        <View style={styles.detailsElement}>
          <IconWithText
            iconName="account-group"
            iconSize={iconSize}
            text={`${event.curPlayersAmount}/${event.maxPlayersAmount}`}
          />
        </View>
        <View style={styles.detailsElement}>
          <SportsIcon sport={sport} backgroundSize={35} />
          <Text>{sport}</Text>
        </View>
        <View style={styles.detailsElement}></View>
        <View style={styles.detailsElement}>
          <IconWithText
            iconName="calendar"
            iconSize={iconSize}
            text={format(date, "MMM do")}
          />
        </View>
      </View>
      <Text>Players: </Text>
      <View style={styles.playersContainer}>
        <ShowEventPlayers players={event.players} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    height: 100,
    shadowOpacity: 0.5,
    shadowRadius: 7,
    width: "90%",
  },
  detailsElement: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
  },
  eventName: {
    fontSize: 28,
    marginBottom: 10,
  },
  headerContainer: {
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 35,
  },
  image: {
    marginLeft: 20,
    borderRadius: 50,
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  playersContainer: {
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    height: 200,
    borderWidth: 1,
  },
});

export default EventPage;
