import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../../components/layouts/Button";
import colors from "../../config/colors";
import Logo from "../../components/layouts/Logo";
// import Screen from "../../components/Screen";
import Text from "../../components/layouts/Text";

const AppLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Sign Up With:</Text>
      <View style={styles.socialIcons}>
        <SocialIcon
          type="facebook"
          onPress={() => console.log("sign with facebook")}
          style={styles.facebook}
          Component={TouchableOpacity}
        />
        <SocialIcon
          type="google"
          onPress={() => console.log("sign with google")}
          Component={TouchableOpacity}
        />
      </View>
      <Text style={styles.middleText}>or be classic:</Text>
      <View style={styles.continueBtn}>
        <Button
          text="Continue To Sign Up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.currentOnline}>
        <Text style={styles.bottomText}>
          {Math.round(Math.random() * 30)} athletes currently online
          <MaterialCommunityIcons name="circle" color="lightgreen" size={15} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 18,
  },
  container: {},
  continueBtn: {
    marginTop: 60,
    width: "80%",
    alignSelf: "center",
  },
  currentOnline: {
    marginTop: 40,
    height: 50,
    width: "100%",
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    marginRight: 60,
  },
  middleText: {
    textAlign: "center",
    marginTop: 30,
    color: colors.mediumGrey,
  },
  nameInput: {
    marginTop: 30,
    marginBottom: 40,
  },
  socialIcons: {
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
