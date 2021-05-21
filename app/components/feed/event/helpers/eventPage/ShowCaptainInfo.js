import React from "react";
import { StyleSheet, View } from "react-native";

import ShowPlayer from "../../../../athletes/ShowPlayer";
import SportsIconList from "../../../../layouts/SportsIconList";
import Text from "../../../../layouts/Text";

import colors from "../../../../../config/colors";
import { defaultAthlete } from "../../../../../config/defaultValues";
import { itemPageSpec } from "../../../../../config/theme";

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS } = itemPageSpec;
const ICON_SIZE = 20;

const ShowCaptainInfo = ({ captain, sport }) => {
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
            backgroundColor: colors.sportColors[sport],
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
          <SportsIconList
            userSports={captain.favoriteSport}
            touch={false}
            iconSize={ICON_SIZE}
            style={[styles.sportsIconList, { width: `${sportsListWidth}%` }]}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    alignItems: "flex-start",
    marginLeft: ITEM_HEIGHT * 0.1,
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
    height: ITEM_HEIGHT * 0.3,
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
