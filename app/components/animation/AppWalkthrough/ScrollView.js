/*
CREDIT TO: github member: yoobi55
refer link: https://github.com/yoobi55/scrollView-Animation-RN
*/

import React from "react";
import { Animated, Dimensions, StyleSheet, View, Image } from "react-native";

import MakeScrollable from "./MakeScrollable";

import firstSlide from "../../../assets/images/AppIntro/firstSlide.png";

const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);

const transitionAnimation = (index) => {
  return {
    transform: [
      { perspective: 200 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: [1, 0.9, 0.25],
        }),
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: ["0deg", "0deg", "10deg"],
        }),
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: ["0deg", "0deg", "0deg"],
        }),
      },
    ],
  };
};

const AppWalkthrough = () => {
  return (
    <View style={styles.scrollContainer}>
      <Animated.ScrollView
        scrollEventThrottle={12}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollViews}
      >
        <MakeScrollable
          cardIndex={1}
          transitionAnimation={transitionAnimation}
        >
          <Image source={firstSlide} resizeMode="center" />
        </MakeScrollable>
        <MakeScrollable
          cardIndex={2}
          transitionAnimation={transitionAnimation}
        />
        <MakeScrollable
          cardIndex={3}
          transitionAnimation={transitionAnimation}
        />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: "80%",
    marginBottom: 5,
  },
  scrollViews: {
    flexDirection: "row",
  },
});

export default AppWalkthrough;
