import React from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";
import Button from "../../../components/layouts/Button";
import routes from "../../../navigation/routes";

const MySettings = ({ mainNavigation }) => {
  const signOut = () => {
    SecureStore.deleteItemAsync("token").then(mainNavigation.navigate(routes.AUTH));
  };

  return (
    <View>
      <Button text="Sign Out" onPress={signOut} />
    </View>
  );
};
export default MySettings;
