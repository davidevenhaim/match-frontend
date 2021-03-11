import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./Text";

import defaultStyles from "../../config/styles";

const AppLogo = ({ logoStyle, textStyle, showText = true }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, logoStyle]}
        source={require("../../assets/appLogo.png")}
      />
      {showText && <AppText style={[styles.text, textStyle]}>Match</AppText>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // marginBottom: 40,
  },
  logo: {
    marginTop: 50,
    height: 120,
    width: 100,
  },
  text: {
    color: defaultStyles.colors.primary,
    fontSize: 30,
  },
});
export default AppLogo;
