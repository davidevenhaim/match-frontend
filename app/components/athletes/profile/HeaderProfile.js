import React from "react";
import { StyleSheet, View } from "react-native";

import TouchableIcon from "../../layouts/TouchableIcon";

import routes from "../../../navigation/routes";
import colors from "../../../config/colors";

const HeaderProfile = ({ navigation, athlete }) => {
  return (
    <View style={styles.conatiner}>
      <TouchableIcon
        text={"settings"}
        onPress={() => navigation.navigate(routes.MY_SETTINGS)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    height: 200,
    width: 320,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: colors.primary,
    alignSelf: "center",
  },
});

export default HeaderProfile;
