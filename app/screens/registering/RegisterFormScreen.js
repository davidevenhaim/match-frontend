import React, { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";

import { SIGN_UP } from "../../api/gql/mutation";

import Logo from "../../components/layouts/Logo";
import SubmitAnimation from "../../components/layouts/SubmitAnimation";
import RegisterForm from "../../components/forms/RegisterForm";

const RegisterScreenStepOne = () => {
  const client = useApolloClient();

  const [error, setError] = useState({ message: "", visible: false });

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => setError({ message: error.message, visible: true }),
  });

  return (
    <>
      <Logo />
      <SubmitAnimation error={error} loading={loading}>
        <RegisterForm action={signUp} />
      </SubmitAnimation>
    </>
  );
};

export default RegisterScreenStepOne;
