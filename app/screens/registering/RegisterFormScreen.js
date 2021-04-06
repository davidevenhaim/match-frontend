import React, { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import { SIGN_UP } from "../../api/gql/mutation";

import Logo from "../../components/layouts/Logo";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import RegisterForm from "../../components/forms/RegisterForm";
import routes from "../../navigation/routes";

const RegisterFormScreen = ({ mainNavigation }) => {
  const [error, setError] = useState({ message: "", visible: false });

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      console.log(data.signUp);
      storeToken(data.signUp);
    },
    onError: (error) => setError({ message: error.message, visible: true }),
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync("token", token).then(mainNavigation.navigate(routes.APP));
  };

  return (
    <>
      <Logo />
      <SubmitAnimation error={error} loading={loading}>
        <RegisterForm action={signUp} />
      </SubmitAnimation>
    </>
  );
};

export default RegisterFormScreen;
