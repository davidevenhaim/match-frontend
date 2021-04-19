import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import AthleteAvatar from "../layouts/AthleteAvatar";
import Text from "../layouts/Text";
import routes from "../../navigation/routes";

const ShowPlayers = ({ avatar, name, id, size = "large" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(routes.ATHLETE_PROFILE, { id })}
    >
      <AthleteAvatar athleteImage={avatar} athleteName={name} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
});

export default ShowPlayers;
