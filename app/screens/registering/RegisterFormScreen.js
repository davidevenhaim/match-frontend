import React from "react";
import { useMutation } from "@apollo/client";

import { SIGN_UP } from "../../api/gql/mutation";
import Logo from "../../components/layouts/Logo";
import RegisterForm from "../../components/forms/RegisterForm";

const RegisterScreenStepOne = () => {
  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <Logo />
      <RegisterForm onSubmit={signUp} />
    </>
  );
};

export default RegisterScreenStepOne;
