import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";
import { SIGN_IN } from "../../api/gql/mutation";
import * as SecureStore from "expo-secure-store";

import Logo from "../../components/layouts/Logo";
import LogInForm from "../../components/forms/LogInForm";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import Text from "../../components/layouts/Text";

import colors from "../../config/colors";

const AppLogin = ({ navigation }) => {
  const [error, setError] = useState({ message: "", visible: false });

  const [signIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      console.log(data.signIn);
      storeToken(data.signIn);
    },
    onError: (error) => setError({ message: error.message, visible: true }),
    // onPress: () => setError({ visible: false }),
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync("token", token).then(navigation.navigate("app"));
  };

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
      <SubmitAnimation loading={loading} error={error}>
        <LogInForm
          action={signIn}
          actionLoading={loading}
          actionError={error}
        />
      </SubmitAnimation>
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
  loadingIndicator: {
    position: "absolute",
    alignSelf: "center",
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
