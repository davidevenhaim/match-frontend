import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

import HeaderProfile from "./HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";
import ConnectionsList from "./ConnectionsList";

import defaultAthlete from "../../../config/defaultAthlete";
import colors from "../../../config/colors";

const AthleteProfileOwner = ({ athlete, isOwner = false }) => {
  const [showConnection, setShowConnection] = useState(false);

  let opacity = 1;
  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };
  if (!athlete) {
    athlete = defaultAthlete;
    opacity = 0.7;
  }

  return (
    <View style={{ opacity }}>
      <View style={styles.headerContainer}>
        <HeaderProfile
          athlete={athlete}
          isOwner={isOwner}
          toggleShowConnection={toggleShowConnection}
        />
      </View>
      {showConnection && <ConnectionsList connections={athlete.connection} />}
      <ScrollView style={styles.scrollView}>
        <UpcomingEvents events={athlete.upcomingEvents} isOwner={isOwner} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 30,
    opacity: 0.25,
    flexGrow: 1,
  },
  headerContainer: {
    height: 300,
  },
  scrollView: {
    // backgroundColor: "black",
    flexShrink: 0.5,
  },
});

export default AthleteProfileOwner;
