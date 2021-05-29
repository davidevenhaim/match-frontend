import React from "react";
import { StyleSheet, View } from "react-native";
import RoundIconButtonText from "../../../layouts/RoundIconButtonText";

const FeedbackHandlerButton = ({
  iconName,
  onPress,
  text,
  backgroundSize = 40,
}) => {
  return (
    <RoundIconButtonText
      onPress={onPress}
      iconName={iconName}
      text={text}
      backgroundSize={backgroundSize}
    />
  );
};
const styles = StyleSheet.create({});

export default FeedbackHandlerButton;
