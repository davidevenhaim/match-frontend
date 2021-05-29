import React from "react";
import { StyleSheet, View } from "react-native";

import ShowPlayer from "../../../../athletes/ShowPlayer";
import SportsIconList from "../../../../layouts/SportsIconList";
import Text from "../../../../layouts/Text";

import colors from "../../../../../config/colors";
import { defaultAthlete } from "../../../../../config/defaultValues";
import { itemPageSpec } from "../../../../../config/theme";

const {
  ITEM_WIDTH,
  ITEM_HEIGHT,
  ICON_SIZE,
  MARGIN,
  RADIUS,
  PADDING,
  TEXT_SIZE,
} = itemPageSpec;

const ShowCaptainInfo = ({ captain, eventSport }) => {
  const sportsListWidth = Math.min(
    (ICON_SIZE / 2) * captain.favoriteSport.length,
    60
  );

  if (!captain) {
    captain = defaultAthlete;
  }

  return (
    <View style={[styles.captainInfoContainer]}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.sportColors[eventSport],
            opacity: 0.3,
            overflow: "hidden",
            borderRadius: RADIUS,
          },
        ]}
      />
      <Text style={styles.captainLabel}>Our captain</Text>
      <View style={{ flexDirection: "row" }}>
        <ShowPlayer
          avatar={captain.avatar}
          name={captain.name}
          id={captain.id}
          size={ITEM_HEIGHT * 0.13}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.captainName}>{captain.name}</Text>
          <View style={styles.sportsIconList}>
            <SportsIconList
              userSports={captain.favoriteSport}
              touch={false}
              iconSize={ICON_SIZE * 0.6}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    alignItems: "flex-start",
    marginLeft: MARGIN,
    marginTop: MARGIN,
  },
  captainLabel: {
    color: colors.white,
    left: ICON_SIZE,
    fontSize: TEXT_SIZE * 1.8,
    marginBottom: MARGIN * 0.5,
  },
  captainName: {
    left: ICON_SIZE,
  },
  captainInfoContainer: {
    alignSelf: "center",
    height: ITEM_HEIGHT * 0.3,
    width: ITEM_WIDTH * 1.2,
    padding: PADDING,
  },
  eventsLabel: {
    left: ICON_SIZE,
  },
  sportsIconList: {
    flexGrow: 1,
    width: "93%",
    overflow: "hidden",
  },
});

export default ShowCaptainInfo;
