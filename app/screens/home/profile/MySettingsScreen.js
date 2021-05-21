import React from "react";
import * as SecureStore from "expo-secure-store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native";

import UserSettings from "../../../components/athletes/profile/UserSettings";

import routes from "../../../navigation/routes";
import { defaultAthlete } from "../../../config/defaultValues";
import { writeUserInfo } from "../../../store/actions";

const MySettings = ({ mainNavigation }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const signOut = () => {
    dispatch(writeUserInfo(defaultAthlete));
    SecureStore.deleteItemAsync("token").then(
      mainNavigation.navigate(routes.AUTH)
    );
  };
  const beCoach = () => {
    navigation.push(routes.BE_COACH);
  };

  const toggleCoachView = () => {
    console.log("Change to coach view");
    navigation.navigate(routes.MY_PROFILE);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserSettings
        beCoach={beCoach}
        isCoach={userInfo.isCoach}
        toggleCoachView={toggleCoachView}
        signOut={signOut}
      />
    </SafeAreaView>
  );
};
export default MySettings;
