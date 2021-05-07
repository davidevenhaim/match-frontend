import React from "react";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import UserSettings from "../../../components/athletes/profile/UserSettings";

import { writeInfo } from "../../../store/actions";

import routes from "../../../navigation/routes";
import { useNavigation } from "@react-navigation/core";

const MySettings = ({ mainNavigation }) => {
  const navigation = useNavigation();
  const signOut = () => {
    SecureStore.deleteItemAsync("token").then(
      mainNavigation.navigate(routes.AUTH)
    );
  };

  const beCoach = () => {
    console.log("Becoming coach... Please wait.");
    navigation.navigate(routes.BE_COACH);
  };

  return <UserSettings beCoach={beCoach} signOut={signOut} />;
};
export default MySettings;
