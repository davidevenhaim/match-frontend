import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../../config/colors";
import HeaderProfile from "./HeaderProfile";

const AthleteProfile = ({ athlete, isOwner = false }) => {
  return (
    <View>
      <View style={styles.headerBackground} />
      <HeaderProfile athlete={athlete} />
    </View>
  );
};
const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    backgroundColor: colors.primary,
    height: 200,
    borderRadius: 20,
  },
});

export default AthleteProfile;
