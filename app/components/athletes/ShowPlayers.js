import React from "react";
import { View, StyleSheet } from "react-native";

import ShowPlayer from "./ShowPlayer";
import Text from "../layouts/Text";

import { itemPageSpec } from "../../config/theme";
const { TEXT_SIZE } = itemPageSpec;

const ShowEventPlayers = ({ fontSize = 13, limit, players, ...otherProps }) => {
  return (
    <>
      {players.map(({ avatar, name, id }, index) => {
        if (index >= limit) return null;
        return (
          <View key={id} style={{ marginLeft: -TEXT_SIZE * 0.1 }}>
            <ShowPlayer avatar={avatar} name={name} id={id} {...otherProps} />
            <Text style={[styles.text, { fontSize: fontSize * 0.1 }]}>
              {name}
            </Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    bottom: 3,
  },
});

export default ShowEventPlayers;
