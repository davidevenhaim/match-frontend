import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../../components/layouts/Button";
import Logo from "../../components/layouts/Logo";
import Text from "../../components/layouts/Text";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE, MARGIN, TEXT_SIZE } = itemPageSpec;

const AppLogin = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <Logo style={styles.appLogo} />
      <Text style={styles.title}>Sign Up With:</Text>
      <View style={styles.socialIconsContainer}>
        <SocialIcon
          type="facebook"
          iconSize={ICON_SIZE * 0.75}
          onPress={() => console.log("sign with facebook")}
          style={[styles.socialIcon, { marginRight: MARGIN * 3 }]}
          Component={TouchableOpacity}
        />
        <SocialIcon
          type="google"
          iconSize={ICON_SIZE * 0.75}
          style={styles.socialIcon}
          onPress={() => console.log("sign with google")}
          Component={TouchableOpacity}
        />
      </View>
      <Text style={styles.middleText}>or be classic:</Text>
      <View style={styles.continueBtn}>
        <Button
          text="Continue To Sign Up"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
      <View style={styles.currentOnline}>
        <Text style={styles.bottomText}>
          {Math.round(Math.random() * 30)} athletes currently online
          <MaterialCommunityIcons name="circle" color="lightgreen" size={15} />
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  appLogo: {
    height: ICON_SIZE * 2,
    width: ICON_SIZE * 2,
  },
  bottomText: {
    fontSize: TEXT_SIZE * 1.5,
  },
  continueBtn: {
    marginTop: MARGIN * 2.5,
    width: "80%",
    alignSelf: "center",
  },
  currentOnline: {
    marginTop: MARGIN * 3,
    height: ICON_SIZE * 1.5,
    width: "100%",
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    marginRight: MARGIN * 2.5,
  },
  middleText: {
    textAlign: "center",
    marginTop: MARGIN,
    color: colors.mediumGrey,
  },
  nameInput: {
    marginTop: MARGIN,
    marginBottom: MARGIN * 1.5,
  },
  socialIcon: {
    height: ICON_SIZE * 1.6,
    width: ICON_SIZE * 1.6,
  },
  socialIconsContainer: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    marginTop: 30,
    textAlign: "center",
    color: colors.mediumGrey,
  },
});

export default AppLogin;
