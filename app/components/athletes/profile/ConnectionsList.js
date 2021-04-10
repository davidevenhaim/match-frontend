import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";

const ConnectionsList = ({ connections }) => {
  return (
    <View style={styles.connectionsContainer}>
      <ScrollView horizontal>
        {connections.length ? (
          <FlatList
            data={connections}
            keyExtractor={(item) => console.log(item.id)}
            renderItem={({ item: athlete }) => (
              <AthleteAvatar
                athleteImage={athlete.avatar}
                athleteName={athlete.name}
              />
            )}
          />
        ) : (
          <Text> No connections yet, Search for athletes now!</Text>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  connectionsContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: colors.primary,
    borderRadius: 20,
    height: 80,
    marginBottom: 10,
    width: "90%",
  },
});

export default ConnectionsList;
