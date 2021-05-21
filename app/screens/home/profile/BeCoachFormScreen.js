import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/core";

import Logo from "../../../components/layouts/Logo";
import BeCoachForm from "../../../components/forms/BeCoachForm";
import Screen from "../../../components/Screen";

import { BE_COACH } from "../../../api/gql/mutation";
import { GET_ME } from "../../../api/gql/query";

import routes from "../../../navigation/routes";

const BeCoachFormScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState({ message: "", visible: false });
  const [beCoach, { loading }] = useMutation(BE_COACH, {
    onCompleted: () => navigation.navigate(routes.MY_SETTINGS),
    refetchQueries: [{ query: GET_ME }],
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
        {/* <SubmitAnimation error={error} loading={loading}> */}
        <Logo />
        <BeCoachForm action={beCoach} error={error} />
        {/* </SubmitAnimation> */}
      </KeyboardAvoidingView>
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default BeCoachFormScreen;
