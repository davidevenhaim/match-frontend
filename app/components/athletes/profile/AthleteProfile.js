import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import HeaderProfile from "./header/HeaderProfile";
import UpcomingEvents from "./UpcomingEvents";

import { defaultAthlete } from "../../../config/defaultValues";

import colors from "../../../config/colors";
import { itemPageSpec } from "../../../config/theme";
import ExpandableList from "./ExpandableList";

const { ITEM_HEIGHT, DEVICE_HEIGHT } = itemPageSpec;

const AthleteProfile = ({ athlete, error, loadingEvents }) => {
  const [showConnection, setShowConnection] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const curAthlete = useSelector((state) => state.userInfo);

  let opacity = 1;

  if (!athlete || error) {
    athlete = defaultAthlete;
    opacity = 0.7;
  }

  const toggleShowConnection = () => {
    const newShowConnection = !showConnection;
    setShowConnection(newShowConnection);
  };
  console.log(athlete.pastEvents);
  useEffect(
    () => {
      setIsConnected(
        curAthlete.connection.find((ath) => ath.id === athlete.id)
      );
      setIsOwner(curAthlete.id === athlete.id);
    },
    []
    /*,[] not good without this. */
  );

  return (
    <ScrollView>
      <SafeAreaView>
        <HeaderProfile
          athlete={athlete}
          isOwner={isOwner}
          toggleShowConnection={toggleShowConnection}
          showConnection={showConnection}
          isConnected={isConnected}
        />
        <View style={styles.scrollView}>
          {loadingEvents ? null : (
            <UpcomingEvents events={athlete.upcomingEvents} isOwner={isOwner} />
          )}
        </View>
        <ExpandableList athlete={athlete} isOwner={isOwner} />
      </SafeAreaView>
    </ScrollView>
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
  scrollView: {
    flexShrink: 1,
    position: "relative",
  },
});

export default AthleteProfile;
