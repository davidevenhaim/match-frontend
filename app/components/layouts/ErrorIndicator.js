import React from "react";
import LottieView from "lottie-react-native";

const ErrorIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animations/error.json")}
    />
  );
};
export default ErrorIndicator;
