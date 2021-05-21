import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import AthleteAvatar from "../layouts/AthleteAvatar";

import routes from "../../navigation/routes";

const ShowPlayer = ({ avatar, name, id, size = "large", style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.push(routes.ATHLETE_PROFILE, { id })}
    >
      <AthleteAvatar athleteImage={avatar} athleteName={name} size={size} />
    </TouchableOpacity>
  );
};

export default ShowPlayer;
