import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import routes from "../../../navigation/routes";
import ShowEventPlayers from "../ShowPlayers";

const ConnectionsList = ({ connections }) => {
  const navigation = useNavigation();
  return (
    <>
      {connections.length ? (
        <View style={styles.playersContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <ShowEventPlayers
              players={connections}
              size="medium"
              limit={connections.length}
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
    height: 65,
    width: "100%",
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
  },
});

export default ConnectionsList;
