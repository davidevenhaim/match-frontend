import React from "react";
import { StyleSheet, View, Animated } from "react-native";

import AppLogo from "../layouts/Logo";
import SportsIconList from "../layouts/SportsIconList";
import TextInput from "../forms/TextInput";

import APP_SPORTS from "../../config/events";
import { itemPageSpec, SPACING } from "../../config/theme";
import colors from "../../config/colors";

const { FULL_SIZE, ICON_SIZE, ITEM_HEIGHT, ITEM_WIDTH, RADIUS } = itemPageSpec;
const EventFeedHeader = ({ isSelected, setSearchFilters, setSportFilters }) => {
  return (
    <View style={[styles.container, { height: FULL_SIZE * 0.52 }]}>
      <View style={styles.topContainer}>
        <AppLogo showText={false} logoStyle={styles.logoStyle} />
        <TextInput iconName="filter" width="60%" placeholder="Custom Place" />
      </View>
      <SportsIconList
        iconSize={ICON_SIZE * 0.9}
        itemSelected={isSelected}
        onPress={setSportFilters}
        userSports={APP_SPORTS.SPORTS_CATERGORIES}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderLeftWidth: 1,
    borderBottomLeftRadius: RADIUS * 1.5,
    borderEndWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: RADIUS * 1.5,
    borderBottomWidth: 1,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderLeftColor: colors.secondary,
    margin: 2,
    overflow: "hidden",
  },
  logoStyle: {
    height: ICON_SIZE * 1.5,
    width: ICON_SIZE * 1.5,
  },
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: SPACING,
  },
});

export default EventFeedHeader;
