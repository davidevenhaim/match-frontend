import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import { FontAwesome5 } from "@expo/vector-icons";

import AthleteAvatar from "../layouts/AthleteAvatar";

import routes from "../../navigation/routes";
import { Badge } from "react-native-elements";
import colors from "../../config/colors";

const ShowPlayer = ({ avatar, name, id, size = "large", style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.push(routes.ATHLETE_PROFILE, { id })}
    >
      <AthleteAvatar athleteImage={avatar} athleteName={name} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: -6,
  },
});

export default ShowPlayer;
