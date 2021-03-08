import React from "react";
import LottieView from "lottie-react-native";

const SearchingIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animations/loading.json")}
    />
  );
};
export default SearchingIndicator;
