import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

const MyProfileScreen = () => {
  const me = useSelector((state) => state.userInfo);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AthleteProfile athlete={me} />
    </SafeAreaView>
  );
};

export default MyProfileScreen;
