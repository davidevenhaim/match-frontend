import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";
import Text from "../layouts/Text";

const ShowPlayers = ({ avatar, name }) => {
  return (
    <View style={styles.container}>
      <Avatar source={avatar} rounded />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowPlayers;
