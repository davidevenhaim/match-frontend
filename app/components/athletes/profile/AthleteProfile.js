import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import HeaderProfile from "./header/HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";
import ConnectionsList from "./ConnectionsList";

import { defaultAthlete } from "../../../config/defaultValues";
import colors from "../../../config/colors";

const AthleteProfile = ({ athlete }) => {
  const [showConnection, setShowConnection] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const curAthlete = useSelector((state) => state.userInfo);

  if (!athlete) {
    athlete = defaultAthlete;
    opacity = 0.7;
  }

  const isOwner = curAthlete.id === athlete.id;

  let opacity = 1;
  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };

  console.log(curAthlete.connection[0]);
  useEffect(() => {
    setIsConnected(
      curAthlete.connection.find((ath) => ath.id === athlete.id) ? true : false
    );
  }, [curAthlete.connection]);

  return (
    <SafeAreaView style={{ opacity }}>
      <View
        style={[
          styles.headerContainer,
          { marginBottom: showConnection ? undefined : 25 },
        ]}
      >
        <HeaderProfile
          athlete={athlete}
          isOwner={isOwner}
          toggleShowConnection={toggleShowConnection}
          isConnected={isConnected}
        />
      </View>
      {showConnection && <ConnectionsList connections={athlete.connection} />}
      <View style={styles.scrollView}>
        <UpcomingEvents events={athlete.upcomingEvents} isOwner={isOwner} />
      </View>
    </SafeAreaView>
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
    height: 280,
  },
  scrollView: {
    // backgroundColor: "black",
    flexShrink: 0.5,
  },
});

export default AthleteProfile;
