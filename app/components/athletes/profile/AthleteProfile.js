import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import HeaderProfile from "./header/HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";
import ConnectionsList from "./ConnectionsList";

import { defaultAthlete } from "../../../config/defaultValues";
import colors from "../../../config/colors";

const AthleteProfile = ({ athlete }) => {
  const [showConnection, setShowConnection] = useState(false);

  const curAthleteId = useSelector((state) => state.userInfo.id);

  if (!athlete) {
    athlete = defaultAthlete;
    opacity = 0.7;
  }

  const isOwner = curAthleteId === athlete.id;

  let opacity = 1;
  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };

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
      <View style={styles.scrollView}>
        <UpcomingEvents events={athlete.upcomingEvents} isOwner={isOwner} />
      </View>
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

export default AthleteProfile;
