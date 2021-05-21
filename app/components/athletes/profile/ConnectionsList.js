import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Text from "../../layouts/Text";
import ShowPlayers from "../ShowPlayers";

import { itemPageSpec } from "../../../config/theme";
const { ICON_SIZE, TEXT_SIZE } = itemPageSpec;

const ConnectionsList = ({ connections, iconSize = ICON_SIZE * 1.4 }) => {
  return (
    <>
      {connections.length ? (
        <View style={styles.playersContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <ShowPlayers
              players={connections}
              size={iconSize}
              limit={connections.length}
              fontSize={TEXT_SIZE}
            />
          </ScrollView>
        </View>
      ) : (
        <View style={styles.connectionsContainer}>
          <Text style={styles.text}> No connections yet...</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  playersContainer: {
    width: "100%",
    overflow: "hidden",
  },
  connectionFeed: {
    marginLeft: 6,
    marginRight: 6,
    alignItems: "center",
    top: "10%",
  },
  text: {
    textAlign: "center",
    top: 25,
    fontSize: TEXT_SIZE - 10,
  },
});

export default ConnectionsList;
