import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { KeyboardAvoidingView } from "react-native";

import { SIGN_UP } from "../../api/gql/mutation";

import Logo from "../../components/layouts/Logo";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import RegisterForm from "../../components/forms/RegisterForm";
import Screen from "../../components/Screen";

import routes from "../../navigation/routes";

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
          <Logo />
          <RegisterForm action={signUp} />
        </SubmitAnimation>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default RegisterFormScreen;
