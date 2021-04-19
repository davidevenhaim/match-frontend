import React from "react";
import * as SecureStore from "expo-secure-store";

import UserSettings from "../../../components/athletes/profile/UserSettings";

import routes from "../../../navigation/routes";

const MySettings = ({ mainNavigation }) => {
  const signOut = () => {
    SecureStore.deleteItemAsync("token").then(
      mainNavigation.navigate(routes.AUTH)
    );
  };

  const beCoach = () => {
    console.log("Becoming coach... Please wait.");
  };

  return <UserSettings beCoach={beCoach} signOut={signOut} />;
};
export default MySettings;
