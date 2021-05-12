import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../../../layouts/Text";
import SportsIconList from "../../../../layouts/SportsIconList";

import colors from "../../../../../config/colors";

import { itemPageSpec, SIZE } from "../../../../../config/eventPageTheme";
import ShowPlayer from "../../../../athletes/ShowPlayer";
const { ITEM_WIDTH, ITEM_HEIGHT } = itemPageSpec;
const ICON_SIZE = 20;

const ShowCaptainInfo = ({ captain, sport }) => {
  const sportsListWidth = Math.min(
    ICON_SIZE * captain.favoriteSport.length + 10,
    60
  );

  return (
    <View style={[styles.captainInfoContainer]}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.sportColors[sport],
            opacity: 0.3,
            overflow: "hidden",
            borderRadius: 20,
          },
        ]}
      />
      <Text style={styles.captainLabel}>Our captain</Text>
      <View style={{ flexDirection: "row" }}>
        <ShowPlayer
          avatar={captain.avatar}
          name={captain.name}
          id={captain.id}
          size={60}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.captainName}>{captain.name}</Text>
          <SportsIconList
            userSports={captain.favoriteSport}
            touch={false}
            iconSize={ICON_SIZE}
            style={[styles.sportsIconList, { width: `${sportsListWidth}%` }]}
          />
        </View>
      </View>
      {/* <Text numberOfLines={2} style={styles.eventsLabel}>
        {"Particpaiting in 15 events more,\ncheck them out"}
      </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 3,
  },
  captainLabel: {
    color: colors.white,
    left: ICON_SIZE,
    fontSize: 20,
    marginBottom: 10,
  },
  captainName: {
    left: ICON_SIZE,
    top: 5,
  },
  captainInfoContainer: {
    alignSelf: "center",
    height: ITEM_HEIGHT * 0.35,
    width: ITEM_WIDTH * 1.2,
  },
  eventsLabel: {
    left: ICON_SIZE,
    marginTop: 7,
  },
  sportsIconList: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
});

export default ShowCaptainInfo;
