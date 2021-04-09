import React from "react";
import { StyleSheet, View, Animated } from "react-native";

import AppLogo from "../layouts/Logo";
import OneSportPicker from "../OneSportPicker";
import TextInput from "../forms/TextInput";

import APP_SPORTS from "../../config/events";
import colors from "../../config/colors";

const EventFeedHeader = ({ height, isSelected, setSearchFilters, setSportFilters, translateY }) => {
  return (
    <View style={[styles.container, { height: height}]}>
      <View style={styles.topContainer}>
        <AppLogo showText={false} logoStyle={styles.logoStyle} />
        <TextInput iconName="filter" width="60%" placeholder="Custom Place" />
      </View>
      <OneSportPicker
        iconSize={33}
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
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.secondary,
    // borderTopColor: colors.secondary,
    // borderRightColor: colors.secondary,
    // borderBottomColor: colors.secondary,
    // borderLeftColor: colors.secondary,
    margin: 2,
    overflow: "hidden",
  },
  logoStyle: {
    height: 80,
    marginTop: 0,
    alignSelf: "flex-start",
    width: 60,
    // position: "relative",
    marginRight: 30,
  },
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
});

export default EventFeedHeader;
