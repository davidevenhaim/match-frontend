import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import Index from "../../components/animation/AppFirstPage";
import routes from "../../navigation/routes";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Index
      signUp={() => navigation.navigate(routes.SIGN_UP)}
      signIn={() => navigation.navigate(routes.SIGN_IN)}
    />
  );
};

const styles = StyleSheet.create({
  memberBtn: {
    marginTop: 25,
    backgroundColor: colors.secondary,
    width: "95%",
  },
});

export default OnboardingScreen;
