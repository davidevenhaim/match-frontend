import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../api/gql/mutation";
import * as SecureStore from "expo-secure-store";

import Logo from "../../components/layouts/Logo";
import KeyboardAvoid from "../../components/KeyboardAvoid";
import LogInForm from "../../components/forms/LogInForm";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import Text from "../../components/layouts/Text";
import Screen from "../../components/Screen";

import routes from "../../navigation/routes";
import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ITEM_WIDTH, ICON_SIZE, ITEM_HEIGHT } = itemPageSpec;

const AppLogin = ({ mainNavigation }) => {
  const [error, setError] = useState({ message: "", visible: false });

  const [signIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      storeToken(data.signIn);
    },
    onError: (error) => setError({ message: error.message, visible: true }),
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync("token", token).then(
      mainNavigation.navigate(routes.APP)
    );
  };

  return (
    <Screen>
      <KeyboardAvoid>
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
      </KeyboardAvoid>
    </Screen>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 18,
  },
  continueBtn: {
    marginTop: ICON_SIZE * 0.5,
    width: "80%",
    alignSelf: "center",
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
    marginTop: ICON_SIZE * 0.2,
    color: colors.mediumGrey,
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
