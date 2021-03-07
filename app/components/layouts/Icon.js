import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

const Icon = ({
  style,
  name,
  backgroundSize = 80,
  size = backgroundSize / 1.5,
}) => {
  return (
    <View
      style={[
        styles.container,
        { height: backgroundSize, width: backgroundSize },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    margin: 10,
    width: 80,
  },
});

export default Icon;
