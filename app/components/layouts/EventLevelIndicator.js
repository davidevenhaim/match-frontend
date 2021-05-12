import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "./Text";

import colors from "../../config/colors";
import eventConfig from "../../config/events";

const EventLevelIndicator = ({
  itemHeight,
  itemWidth,
  level,
  style,
  textStyle,
}) => {
  const levelIndex = eventConfig.EVENT_LEVELS.indexOf(level) + 1;
  const levelSliderWidth = Math.min(levelIndex * 25, 100);

  // Declared "styles" here to make this component reusable in other views/sizes.
  const extraStyles = {
    levelIndicator: {
      backgroundColor: colors.white,
      borderRadius: itemWidth * 0.2,
      borderWidth: 1,
      borderColor: colors.primary,
      height: itemHeight * 0.05,
      width: itemWidth * 0.4,
    },
  };

  return (
    <View style={style}>
      <Text style={{ fontSize: 13, color: colors.white }}>Level:</Text>
      <View style={extraStyles.levelIndicator}>
        <View
          style={{
            backgroundColor: colors.sportLevelColors[level],
            width: `${levelSliderWidth}%`,
            height: "100%",
            borderRadius: itemWidth * 0.2,
          }}
        />
      </View>
      <Text style={[styles.levelText, textStyle]}>{level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  levelText: {
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default EventLevelIndicator;
