import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MakeScrollable = ({ cardIndex, transitionAnimation, children }) => {
  return (
    <View style={[styles.scrollPage, { width: SCREEN_WIDTH }]}>
      <Animated.View style={[styles.screen, transitionAnimation(cardIndex)]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    backgroundColor: "white",
  },
  scrollPage: {
    padding: 20,
  },
  text: {
    fontSize: 48,
  },
});

export default MakeScrollable;
