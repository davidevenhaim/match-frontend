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
  text,
  textColor = backgroundColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      style={styles.container}
    >
      <RoundIcon
        backgroundSize={backgroundSize}
        iconColor={iconColor}
        name={iconName}
        style={iconStyle}
      />
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: backgroundSize / 4 },
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
    top: -3,
  },
});

export default RoundIconButtonText;
