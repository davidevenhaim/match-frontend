import React from "react";
import { View, StyleSheet } from "react-native";

import ShowPlayer from "./ShowPlayer";
import Text from "../layouts/Text";
import colors from "../../config/colors";

const ShowEventPlayers = ({ limit, players, ...otherProps }) => {
  return (
    <>
      {players.map(({ avatar, name, id }, index) => {
        if (index >= limit) return null;
        return (
          <View key={id}>
            <ShowPlayer avatar={avatar} name={name} id={id} {...otherProps} />
            <Text style={styles.text}>{name}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 15,
    bottom: 3,
  },
  captainStyle: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 30,
  },
});

export default ShowEventPlayers;
