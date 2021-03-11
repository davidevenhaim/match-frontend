import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const ErrorIndicator = ({ visible = true }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/error.json")}
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  lottie: {
    height: 250,
    width: 250,
  },
});

export default ErrorIndicator;
