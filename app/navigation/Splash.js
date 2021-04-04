import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

import ActivityIndicator from "../components/layouts/ActivityIndicator";

const AuthLoading = ({ navigation }) => {
  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    navigation.navigate(userToken ? "App" : "Auth");
  };

  useEffect(() => {
    checkLoginState();
  });
  return <ActivityIndicator />;
};

export default AuthLoading;
