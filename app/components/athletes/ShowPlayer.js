import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Text from "../layouts/Text";

const ShowPlayers = ({ avatar, name, id }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Navigate to: ", id)}
    >
      <Avatar source={{ uri: avatar }} rounded activeOpacity={0.7} size={60} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
});

export default ShowPlayers;
