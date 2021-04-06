/*
CREDIT TO: github member: yoobi55
refer link: https://github.com/yoobi55/scrollView-Animation-RN
*/

import React from "react";
import { Animated, Dimensions, StyleSheet, View, Image, StatusBar } from "react-native";

import MakeScrollable from "./MakeScrollable";
import Text from '../../layouts/Text';

import firstSlide from "../../../assets/images/AppIntro/firstSlide.png";
import colors from "../../../config/colors";

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
          outputRange: [1, 0.9, 0.5],
        }),
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: ["0deg", "0deg", "15deg"],
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
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollViews}
      >
        <View style={styles.firstPage}>
        <MakeScrollable
          cardIndex={1}
          transitionAnimation={transitionAnimation}
        >
          {/* <Image source={firstSlide} resizeMode="center" /> */}
        </MakeScrollable>
        </View>
        <MakeScrollable
          cardIndex={2}
          transitionAnimation={transitionAnimation}
        >
        </MakeScrollable>
        <MakeScrollable
          cardIndex={3}
          transitionAnimation={transitionAnimation}
        >
        </MakeScrollable>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: "80%",
    marginBottom: 15,
  },
  scrollViews: {
    flexDirection: "row",
  },
  firstPageText: {
    color: colors.white,
    fontSize: 40,
    textAlign: "center"
  }
});

export default AppWalkthrough;
