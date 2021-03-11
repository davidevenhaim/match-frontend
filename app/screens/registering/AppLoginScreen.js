import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../../api/gql/mutation";
import colors from "../../config/colors";
import Logo from "../../components/layouts/Logo";
import LogInForm from "../../components/forms/LogInForm";
import Text from "../../components/layouts/Text";

const AppLogin = () => {
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Sign In With:</Text>
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
      <LogInForm onSubmit={signIn} />
      <View style={styles.continueBtn}></View>
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
