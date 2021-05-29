import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { KeyboardAvoidingView, StyleSheet } from "react-native";

import { SIGN_UP } from "../../api/gql/mutation";

import Logo from "../../components/layouts/Logo";
import RegisterForm from "../../components/forms/RegisterForm";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import Screen from "../../components/Screen";

import routes from "../../navigation/routes";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE } = itemPageSpec;

const RegisterFormScreen = ({ mainNavigation }) => {
  const [error, setError] = useState({ message: "", visible: false });

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      storeToken(data.signUp);
    },
    onError: (err) => {
      setError({ message: err.message, visible: true });
    },
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync("token", token).then(
      mainNavigation.navigate(routes.APP)
    );
  };

  return (
    <Screen>
      <KeyboardAvoidingView>
        <SubmitAnimation error={error} loading={loading}>
          <Logo style={styles.appLogo} />
          <RegisterForm action={signUp} />
        </SubmitAnimation>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  appLogo: {
    height: ICON_SIZE * 2,
    width: ICON_SIZE * 2,
  },
});

export default RegisterFormScreen;
