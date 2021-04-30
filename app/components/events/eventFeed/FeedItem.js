import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { format } from "date-fns";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import IconWithText from "../../layouts/IconWithText";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import { itemFeedSpec } from "../../../config/eventFeedTheme";
import SportsIcon from "../../layouts/SportsIcon";
const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE } = itemFeedSpec;

const FeedItem = ({
  captain,
  date,
  description,
  index,
  name,
  onPress,
  level,
  location,
  playersAmount,
  sport,
  scrollX,
  width,
}) => {
  date = new Date(date);
  const inputRange = [
    (index - 1) * FULL_SIZE,
    index * FULL_SIZE,
    (index + 1) * FULL_SIZE,
  ];

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.1, 1],
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.conatiner}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { overflow: "hidden", borderRadius: RADIUS },
        ]}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: colors.sportColors[sport],
              opacity: 0.25,
              resizeMode: "cover",
              transform: [{ scale }],
            },
          ]}
        />
        <Animated.Text
          style={[styles.locationText, { transform: [{ translateX }] }]}
        >
          {location}
        </Animated.Text>
        <View style={styles.captainContainer}>
          <AthleteAvatar
            athleteImage={captain.avatar}
            athleteName={captain.name}
          />
          <Text>{captain.name}</Text>
        </View>
        <View style={styles.playersContainer}>
          <Text style={styles.playersText}>
            {playersAmount[0]}/{playersAmount[1]}
          </Text>
          <Text style={styles.playersLabel}>Players</Text>
        </View>
        <View style={styles.sportContainer}>
          <SportsIcon sport={sport} backgroundSize={ITEM_WIDTH * 0.2} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
  },
  captainContainer: {
    right: "50%",
    borderRadius: ITEM_WIDTH * 0.15,
    position: "absolute",
    // backgroundColor: colors.selected,
    width: ITEM_WIDTH * 0.3,
    height: ITEM_WIDTH * 0.3,
    justifyContent: "center",
    alignItems: "center",
    top: ITEM_WIDTH * 0.5,
  },
  locationText: {
    fontSize: 30,
    fontFamily: "Righteous-font",
    color: colors.primary,
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING,
    left: SPACING,
  },
  playersContainer: {
    bottom: SPACING + 12,
    position: "absolute",
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  playersText: {
    color: colors.white,
    fontSize: 18,
  },
  playersLabel: {
    color: colors.white,
    fontSize: 9,
  },
  sportContainer: {
    bottom: SPACING,
    position: "absolute",
    right: SPACING,
  },
});

export default FeedItem;

/*

<View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconWithText
          iconName="calendar"
          iconSize={iconSize}
          text={format(date, "MMM do")}
        />
        <View style={{ marginLeft: 60 }}>
          <IconWithText
            iconName="account-group"
            iconSize={iconSize}
            text={`${playersAmount[0]}/${playersAmount[1]}`}
          />
          <Text>{name}</Text>
        </View>
      </View>
      <AthleteAvatar athleteImage={captain.avatar} athleteName={captain.name} />
      <Text>{captain.name}</Text>

      <IconWithText
        iconName="google-maps"
        iconSize={iconSize + 10}
        text={location}
        style={styles.locationStyle}
      />
*/
