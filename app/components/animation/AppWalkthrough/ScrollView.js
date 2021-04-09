/*
CREDIT TO: github member: yoobi55
refer link: https://github.com/yoobi55/scrollView-Animation-RN
*/

import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from "react-native";

import MakeScrollable from "./MakeScrollable";
import ProgressIndictor from "../../layouts/ProgressIndictor";

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
  const [indicator, setIndicator] = useState(1);
  const pages = [1, 2, 3];

  return (
    <View style={styles.scrollContainer}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollViews}
      >
        {pages.map((pageIndex) => (
          <MakeScrollable cardIndex={pageIndex} key={pageIndex} />
        ))}
      </Animated.ScrollView>
      <ProgressIndictor amount={pages.length} index={indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: "80%",
    marginBottom: 15,
  },
});

export default AppWalkthrough;
