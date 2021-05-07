import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { differenceInDays, format } from "date-fns";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import IconWithText from "../../layouts/IconWithText";
import Text from "../../layouts/Text";
import SportsIcon from "../../layouts/SportsIcon";

import colors from "../../../config/colors";
import eventConfig from "../../../config/events";
import { itemFeedSpec, ICON_SIZE } from "../../../config/eventFeedTheme";

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
  const today = new Date();
  const daysUntilEvent = differenceInDays(date, today);
  const dateArray = format(date, "MMM do EEEE").split(" ");

  const levelIndex = eventConfig.EVENT_LEVELS.indexOf(level) + 1;
  const levelSliderWidth = Math.min(levelIndex * 25, 100);

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
          { overflow: "hidden", borderRadius: RADIUS * 2 },
        ]}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: colors.sportColors[sport],
              opacity: 0.6,
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
        <View style={styles.dateContainer}>
          <Text
            style={{
              fontSize: 13,
              color: daysUntilEvent < 7 ? colors.dark : colors.white,
              textAlign: "center",
            }}
          >
            {"Hapening\n"}
            {daysUntilEvent === 0
              ? `Today!`
              : daysUntilEvent === 1
              ? `In ${daysUntilEvent} days`
              : `In ${daysUntilEvent} day`}
          </Text>
        </View>
        <View style={styles.captainContainer}>
          <AthleteAvatar
            athleteImage={captain.avatar}
            athleteName={captain.name}
            size="large"
          />
          <Text style={styles.captainText}>{captain.name}</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={{ fontSize: 13, color: colors.white }}>Level:</Text>
          <View style={styles.levelIndicator}>
            <View
              style={{
                backgroundColor: colors.sportLevelColors[level],
                width: `${levelSliderWidth}%`,
                height: "100%",
                borderRadius: ITEM_WIDTH * 0.2,
              }}
            />
          </View>
          <Text style={styles.levelText}>{level}</Text>
        </View>
        <View style={styles.playersContainer}>
          <Text style={styles.playersText}>
            {playersAmount[0]}/{playersAmount[1]}
          </Text>
          <Text style={styles.playersLabel}>Players</Text>
        </View>
        <View style={styles.sportContainer}>
          <SportsIcon sport={sport} backgroundSize={ICON_SIZE * 1.4} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    height: ITEM_HEIGHT,
    margin: SPACING / 2,
    width: ITEM_WIDTH,
  },
  captainContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderRadius: ITEM_WIDTH * 0.15,
    height: ITEM_WIDTH * 0.3,
    justifyContent: "center",
    position: "absolute",
    top: ITEM_WIDTH * 0.3,
    width: ITEM_WIDTH * 0.3,
  },
  captainText: {
    textTransform: "capitalize",
    fontSize: 18,
  },
  dateContainer: {
    alignItems: "center",
    position: "absolute",
    right: SPACING,
    top: SPACING,
  },
  dateLabel: {
    alignItems: "center",
    borderColor: colors.black,
    borderWidth: 0.2,
    borderRadius: 45,
    height: 80,
    width: 80,
    justifyContent: "center",
  },
  dateText: {
    textAlign: "center",
  },
  locationText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "Righteous-font",
    left: SPACING,
    position: "absolute",
    textTransform: "uppercase",
    top: SPACING,
    width: ITEM_WIDTH * 0.8,
  },
  levelContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    top: ITEM_WIDTH * 0.65,
  },
  levelIndicator: {
    backgroundColor: colors.white,
    borderRadius: ITEM_WIDTH * 0.2,
    borderWidth: 1,
    borderColor: colors.primary,
    height: ITEM_HEIGHT * 0.05,
    width: ITEM_WIDTH * 0.4,
  },
  levelText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
  playersContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 26,
    bottom: SPACING + 12,
    height: 52,
    justifyContent: "center",
    left: SPACING,
    position: "absolute",
    width: 52,
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
