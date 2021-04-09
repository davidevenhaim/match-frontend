import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import ProgressIndictor from "../../layouts/ProgressIndictor";

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
  },
};

const textIndex = {
  1: {
    title: "Meet New Friends",
    body: `Explore & Join Sport Events that match the best for you.`,
  },
  2: {
    title: "Create Events",
    body: `Create your own custom sport events and athletes will join you`,
  },
  3: {
    title: "Have Fun!",
    body: `You are ready to start, it's completley free. With friendly and easy to adapt UI`,
  },
};

const MakeScrollable = ({ cardIndex }) => {
  return (
    <>
      <View style={[styles.screen, { width: SCREEN_WIDTH }]}>
        {colorIndex[cardIndex] && textIndex[cardIndex] && (
          <>
            <View style={[colorIndex[cardIndex], styles.scrollPage]} />
            <View style={styles.text}>
              <Text style={styles.textTitle}>{textIndex[cardIndex].title}</Text>
              <Text style={styles.textBody}>{textIndex[cardIndex].body}</Text>
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    borderRadius: 60,
    height: "100%",
  },
  scrollPage: {
    width: SCREEN_WIDTH - 5,
    height: "80%",
    padding: 20,
  },
  text: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  textTitle: {
    fontSize: 27,
  },
  textBody: {
    textAlign: "center",
  },
});

export default MakeScrollable;
