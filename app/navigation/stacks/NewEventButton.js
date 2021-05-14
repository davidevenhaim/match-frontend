import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import colors from "../../config/colors";

const { width, height } = Dimensions.get("screen");

const NewEventButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={height * 0.028}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: height * 0.035,
    borderWidth: 7,
    // bottom: 2,
    width: height * 0.07,
    height: height * 0.07,
    justifyContent: "center",
  },
});

export default NewEventButton;
