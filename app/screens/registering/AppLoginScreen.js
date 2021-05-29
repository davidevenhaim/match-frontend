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
const { ITEM_WIDTH, ICON_SIZE, ITEM_HEIGHT, TEXT_SIZE, MARGIN } = itemPageSpec;

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
        <Logo logoStyle={styles.appLogo} />
        <Text style={styles.title}>Sign In With:</Text>
        <View style={styles.socialIconsContainers}>
          <SocialIcon
            type="facebook"
            iconSize={ICON_SIZE * 0.75}
            onPress={() => console.log("sign with facebook")}
            style={[styles.socialIcon, { marginRight: MARGIN * 3 }]}
            Component={TouchableOpacity}
          />
          <SocialIcon
            type="google"
            style={styles.socialIcon}
            iconSize={ICON_SIZE * 0.75}
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
  appLogo: {
    height: ICON_SIZE * 2.2,
    width: ICON_SIZE * 2.2,
  },
  bottomText: {
    fontSize: TEXT_SIZE,
  },
  continueBtn: {
    marginTop: ICON_SIZE * 0.5,
    width: "80%",
    alignSelf: "center",
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
  socialIcon: {
    height: ICON_SIZE * 1.6,
    width: ICON_SIZE * 1.6,
  },
  socialIconsContainers: {
    marginTop: MARGIN,
    marginBottom: MARGIN,
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    marginTop: MARGIN,
    textAlign: "center",
    color: colors.mediumGrey,
  },
});

export default AppLogin;
