import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import SportsIconList from "../../layouts/SportsIconList";
import Text from "../../layouts/Text";

import { itemPageSpec, SPACING } from "../../../config/theme";
import colors from "../../../config/colors";
import Rating from "./helpers/Rating";
const { ITEM_WIDTH, RADIUS } = itemPageSpec;

const ShowPlayer = ({
  avatar,
  sports,
  name,
  onPress,
  size = "medium",
  rating,
  ratingCount,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.secondary,
            borderRadius: RADIUS * 1.2,
            opacity: 0.4,
            overflow: "hidden",
          },
        ]}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.avatarContainer}>
          <AthleteAvatar athleteImage={avatar} athleteName={name} size={size} />
          <Text>{name}</Text>
        </View>
        <SportsIconList userSports={sports} touch={false} iconSize={20} />
      </View>
      <Rating
        userRating={rating || 5}
        ratingCount={ratingCount || parseInt(Math.random() * 100)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    margin: SPACING * 0.8,
  },
  container: {
    height: ITEM_WIDTH * 0.5,
    margin: RADIUS * 0.5,
    width: ITEM_WIDTH,
  },
});

export default ShowPlayer;
