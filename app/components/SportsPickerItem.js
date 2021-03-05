import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./layouts/Text";
import colors from "../config/colors";
import SportsIcon from "./SportsIcon";

function SportsPickerItem({
  backgroundSize = 80,
  iconSize = 55,
  item,
  isSelected,
  onPress,
  style,
}) {
  let selectedStyle = null;
  if (isSelected) selectedStyle = styles.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selectedStyle, style]}
    >
      {item && (
        <SportsIcon
          iconSize={iconSize}
          backgroundSize={backgroundSize}
          sport={item}
        />
      )}
      <AppText style={styles.text}>{item}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    textAlign: "center",
    textTransform: "capitalize",
  },
  selected: {
    backgroundColor: colors.selected,
  },
});

export default SportsPickerItem;
