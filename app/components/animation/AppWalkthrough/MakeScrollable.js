import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

import Text from '../../layouts/Text';

import colors from "../../../config/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const colorIndex = {
  1: {
    backgroundColor: colors.primary,
    borderTopEndRadius: 190,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 90,
  },
  2: {
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 100,
    borderTopEndRadius: 400,
    borderBottomLeftRadius: 230,
    borderBottomRightRadius: 90,
  },
  3: {
    backgroundColor: colors.cyan,
    borderTopLeftRadius: 400,
    borderBottomEndRadius: 80,
    borderBottomLeftRadius: 80,
  }
} 

const textIndex = {
  1: { 
    title: "Meet New Friends",
    body: `Explore & Join Sport Events that match the best for you.`
  },
2: {
  title: "Create Events",
  body:  `Create your own custom events.`
},
3: {
  title: "You Are All Set!",
  body: `You are ready to start, it's completley free! Friendly and easy to adapt UI`
}
}

const MakeScrollable = ({ cardIndex, transitionAnimation, children }) => {

  return (
    <>
      <View style={[styles.scrollPage, { width: SCREEN_WIDTH }, colorIndex[cardIndex]]}>
        <Animated.View style={[styles.screen, transitionAnimation(cardIndex)]}>
          {children}
        </Animated.View>
      </View>
        <View style={styles.text}>
        <Text style={styles.textTitle}>{textIndex[cardIndex].title}</Text>
        <Text style={styles.textBody}>{textIndex[cardIndex].body}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  scrollPage: {
    padding: 20,
    height: "80%",
  },
  text: {
    width: SCREEN_WIDTH,
    alignContent: "center",
    alignSelf: "center"
  },
  textTitle: {
    fontSize: 30,
  },
  textBody: {

  }
});

export default MakeScrollable;
