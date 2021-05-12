import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";

import RoundIcon from "./RoundIcon";
import Text from "./Text";

const RoundIconButtonText = ({
  backgroundSize = 80,
  backgroundColor = colors.primary,
  iconColor = colors.white,
  iconName,
  iconStyle,
  onPress,
  textStyle,
  style,
  text,
  textColor = backgroundColor,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <RoundIcon
        backgroundSize={backgroundSize}
        iconColor={iconColor}
        name={iconName}
        style={iconStyle}
        {...otherProps}
      />
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: backgroundSize / 4 },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    // textAlign: "center",
    top: -10,
  },
});

export default RoundIconButtonText;
