import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import routes from "../../../navigation/routes";

const ConnectionsList = ({ connections }) => {
  const navigation = useNavigation();
  return (
    <>
      {connections.length ? (
        <FlatList
          data={connections}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: athlete }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.ATHLETE_PROFILE, { id: athlete.id })
              }
              style={styles.connectionFeed}
            >
              <AthleteAvatar
                athleteImage={athlete.avatar}
                athleteName={athlete.name}
              />
              <Text>{athlete.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.connectionsContainer}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={styles.connectionsContainer}>
          <Text style={styles.text}> No connections yet...</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  connectionsContainer: {
    alignSelf: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 200,
    height: 90,
    marginBottom: 10,
    width: "90%",
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
