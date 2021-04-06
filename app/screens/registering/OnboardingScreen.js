import React from "react";
import { StyleSheet } from "react-native";

import Button from "../../components/layouts/Button";
import colors from "../../config/colors";
import ScrollView from "../../components/animation/AppWalkthrough/ScrollView";
import routes from "../../navigation/routes";
// import Screen from "../../components/Screen";

const OnboardingScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView />
      <Button
        text="Sign Up"
        iconName="chevron-right"
        onPress={() => navigation.navigate(routes.SIGN_UP)}
      />
      <Button
        text="Already a member? Sign In!"
        btnHeight={40}
        iconName="chevron-right"
        style={styles.memberBtn}
        onPress={() => navigation.navigate(routes.SIGN_IN)}
      />
    </>
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
