import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../../config/colors";

const IconWithText = ({
  color = colors.black,
  iconName,
  iconSize = 40,
  text,
  textSize = iconSize / 2,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />
      <Text style={{ fontSize: textSize }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default IconWithText;
