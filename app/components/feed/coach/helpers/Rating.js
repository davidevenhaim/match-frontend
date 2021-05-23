import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../../layouts/Text";

import colors from "../../../../config/colors";

const RATING = [1, 2, 3, 4, 5];

const Rating = ({ userRating, ratingCount, size = 18 }) => {
  userRating = Math.random() * userRating + 1;
  return (
    <View style={styles.container}>
      {RATING.map((rate) => {
        return (
          <MaterialCommunityIcons
            name="star"
            color={rate <= userRating ? colors.primary : colors.white}
            size={size}
          />
        );
      })}
      <Text style={styles.text}>from {ratingCount} votes </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    left: 5,
  },
});

export default Rating;
