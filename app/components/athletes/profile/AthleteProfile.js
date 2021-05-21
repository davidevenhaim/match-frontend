import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import HeaderProfile from "./header/HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";

import { defaultAthlete } from "../../../config/defaultValues";
import colors from "../../../config/colors";
import { itemPageSpec } from "../../../config/theme";
const { ITEM_HEIGHT, ITEM_WIDTH, DEVICE_HEIGHT } = itemPageSpec;

const AthleteProfile = ({ athlete }) => {
  const [showConnection, setShowConnection] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const curAthlete = useSelector((state) => state.userInfo);

  if (!athlete) {
    athlete = defaultAthlete;
    opacity = 0.7;
  }

  let opacity = 1;
  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };

  useEffect(
    () => {
      setIsConnected(
        curAthlete.connection.find((ath) => ath.id === athlete.id)
      );
      setIsOwner(curAthlete.id === athlete.id);
    }
    /*,[] not good without this. */
  );

  return (
    <SafeAreaView style={{ opacity }}>
      <View
        style={[styles.headerContainer, { marginBottom: ITEM_HEIGHT * 0.04 }]}
      >
        <HeaderProfile
          athlete={athlete}
          isOwner={isOwner}
          toggleShowConnection={toggleShowConnection}
          showConnection={showConnection}
          isConnected={isConnected}
        />
      </View>
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
    height: DEVICE_HEIGHT * 0.3,
  },
  scrollView: {
    // backgroundColor: "black",
    flexShrink: 0.5,
  },
});

export default AthleteProfile;
