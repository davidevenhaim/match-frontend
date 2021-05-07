import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import Logo from "../../../components/layouts/Logo";
import SubmitAnimation from "../../../components/layouts/SubmitAnimation";
import BeCoachForm from "../../../components/forms/BeCoachForm";
import Screen from "../../../components/Screen";

import { BE_COACH } from "../../../api/gql/mutation";

import routes from "../../../navigation/routes";

const BeCoachFormScreen = () => {
  const [beCoach, { loading }] = useMutation(BE_COACH, {
    onCompleted: (data) => console.log(data),
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync("token", token).then(
      mainNavigation.navigate(routes.APP)
    );
  };
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

export default BeCoachFormScreen;
