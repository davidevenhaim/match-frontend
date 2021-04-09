import React from "react";
import { Animated, StyleSheet, View } from "react-native";

import Screen from "../Screen";
import Text from "../layouts/Text";

const ScrollViewCard = ({ cardIndex, text }) => {
  const xOffset = new Animated.Value(0);

  return (
    <Screen>
      <View style={styles.scrollPage}>
        <Animated.View style={[styles.screen, transitionAnimation(cardIndex)]}>
          <Text style={styles.text}>Match{text}</Text>
        </Animated.View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  screen: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white",
  },
  text: {
    fontSize: 48,
  },
});

export default ScrollViewCard;
