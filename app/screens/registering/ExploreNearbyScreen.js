import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../config/colors";
import Logo from "../../components/layouts/Logo";
import Screen from "../../components/Screen";
import Text from "../../components/layouts/Text";

const OnboardingPage = ({ navigation }) => {
  return (
    <>
      <Logo />
      <Text style={styles.title}>What do you want to do next?</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.athleteNearby}
          onPress={() => navigation.navigate("")}
        >
          <FontAwesome name="users" size={90} />
          <Text>Athletes Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.eventsNearby}>
            <FontAwesome name="calendar" size={90} />
            <Text>Events Nearby</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  athleteNearby: {
    backgroundColor: colors.primary,
    height: 180,
    width: 180,
    marginLeft: 20,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  eventsNearby: {
    height: 180,
    width: 180,
    backgroundColor: colors.secondary,
    borderRadius: 60,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 60,
  },
});

export default OnboardingPage;
