import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./Text";

import defaultStyles from "../../config/styles";

const AppLogo = ({ textStyle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/appLogo.png")} />
      <AppText style={[styles.text, textStyle]}>Match</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  logo: {
    height: 120,
    width: 100,
  },
  text: {
    color: defaultStyles.colors.primary,
    fontSize: 30,
  },
});
export default AppLogo;
