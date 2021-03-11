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
  let selectedIconStyle = null;
  let selectedTextStyle = null;
  if (isSelected) {
    selectedIconStyle = styles.selectedIcon;
    selectedTextStyle = styles.selectedText;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {item && (
        <SportsIcon
          iconSize={iconSize}
          backgroundSize={backgroundSize}
          sport={item}
          style={selectedIconStyle}
        />
      )}
      <AppText style={[styles.text, selectedTextStyle]}>{item}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    textAlign: "center",
    textTransform: "capitalize",
  },
  selectedIcon: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  selectedText: {
    color: colors.primary,
  },
});

export default SportsPickerItem;
