import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./Text";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const AppButton = ({ style, btnHeight = 50, onPress, text, iconName }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { height: btnHeight, borderRadius: btnHeight / 2 },
        style,
      ]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{text}</AppText>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={colors.white}
          style={styles.iconStyle}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
  iconStyle: {
    position: "absolute",
    right: 10,
  },
  text: {
    color: defaultStyles.colors.white,
  },
});
export default AppButton;
