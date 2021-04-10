import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

import HeaderProfile from "./HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";
import ConnectionsList from "./ConnectionsList";

import colors from "../../../config/colors";

const AthleteProfile = ({ athlete, isOwner = false, navigation }) => {
  const [showConnection, setShowConnection] = useState(false);
  // console.log(athlete.connection);

  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        {/* <LinearGradient
          colors={[colors.primary, colors.primaryLight]}
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0.5, y: 0.9 }}
          locations={[0, 0.8]}
          style={styles.headerBackground}
        /> */}
        <HeaderProfile
          athlete={athlete}
          isOwner={isOwner}
          navigation={navigation}
          toggleShowConnection={toggleShowConnection}
        />
      </View>
      {showConnection && <ConnectionsList connections={athlete.connection} />}
      <ScrollView style={styles.scrollView}>
        <UpcomingEvents events={athlete.upcomingEvents} isOwner={isOwner} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    backgroundColor: colors.primary,

    borderRadius: 30,
    opacity: 0.05,
    flexGrow: 1,
  },
  headerContainer: {
    height: 300,
  },
});

export default AthleteProfile;
