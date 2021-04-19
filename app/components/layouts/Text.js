import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import defaultStyles from "../../config/styles";

const AppText = ({ children, size = 15, style, ...otherProps }) => {
  let [fontsLoaded] = useFonts({
    "Righteous-font": require("../../assets/fonts/Righteous-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <Text style={[styles.text, { fontSize: size }, style]} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.black,
    fontFamily: "Righteous-font",
  },
});
export default AppText;
