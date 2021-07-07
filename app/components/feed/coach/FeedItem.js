import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import SportsIconList from "../../layouts/SportsIconList";
import Text from "../../layouts/Text";

import { itemPageSpec, SPACING } from "../../../config/theme";
import colors from "../../../config/colors";
import Rating from "./helpers/Rating";
const { ITEM_WIDTH, RADIUS, ICON_SIZE, MARGIN, TEXT_SIZE } = itemPageSpec;

const ShowPlayer = ({
  avatar,
  sports,
  name,
  onPress,
  price,
  size = ICON_SIZE * 1.5,
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
        <SportsIconList
          userSports={sports}
          touch={false}
          iconSize={ICON_SIZE * 0.7}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Rating userRating={rating} ratingCount={ratingCount} />
        <Text style={styles.priceText}>{price}₪/hr</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    margin: SPACING * 0.8,
  },
  container: {
    height: ITEM_WIDTH * 0.4,
    marginRight: RADIUS * 0.5,
    width: ITEM_WIDTH,
  },
  priceText: {
    right: MARGIN * 2,
    fontSize: TEXT_SIZE,
  },
});

export default ShowPlayer;
