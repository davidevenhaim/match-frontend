import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";

const IconWithText = ({
  iconName,
  iconSize,
  text,
  textSize = iconSize / 2,
}) => {
  return (
    <>
      <MaterialCommunityIcons name={iconName} size={iconSize} />
      <Text style={{ fontSize: textSize }}>{text}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default IconWithText;
