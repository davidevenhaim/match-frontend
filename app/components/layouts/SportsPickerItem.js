import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import SportsIcon from "./SportsIcon";

import colors from "../../config/colors";

function SportsPickerItem({
  backgroundSize = 80,
  iconSize = 55,
  item,
  isSelected,
  onPress,
  style,
}) {
  let iconStyle = null;
  let selectedTextStyle = null;

  if (isSelected) {
    iconStyle = {
      backgroundColor: colors.sportColors[item],
    };
    selectedTextStyle = { color: colors.sportColors[item] };
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {item && (
        <SportsIcon
          iconSize={iconSize}
          backgroundSize={backgroundSize}
          sport={item}
          style={[styles.icon, iconStyle]}
        />
      )}
      <Text style={[styles.text, selectedTextStyle]}>{item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.notSelected,
    textAlign: "center",
    textTransform: "capitalize",
  },
  icon: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.notSelected,
  },
});

export default SportsPickerItem;
