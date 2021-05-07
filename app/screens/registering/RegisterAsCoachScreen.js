import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import Logo from "../../components/layouts/Logo";
import BeCoachForm from "../../components/forms/BeCoachForm";
import Screen from "../../components/Screen";

const RegisterAsCoachScreen = () => {
  const beCoach = () => console.log("Be Coach");
  return (
    <Screen>
      <KeyboardAvoidingView>
        {/* <SubmitAnimation error={error} loading={loading}> */}
        <Logo />
        <BeCoachForm action={beCoach} />
        {/* </SubmitAnimation> */}
      </KeyboardAvoidingView>
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default RegisterAsCoachScreen;
