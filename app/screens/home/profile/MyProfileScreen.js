import React from "react";
import { useSelector } from "react-redux";

import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

const MyProfileScreen = () => {
  const me = useSelector((state) => state.userInfo);

  return <AthleteProfile athlete={me} />;
};

export default MyProfileScreen;
