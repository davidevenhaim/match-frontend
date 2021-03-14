import React from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";
import Button from "../../../components/layouts/Button";

const MySettings = ({ navigation }) => {
  const signOut = () => {
    SecureStore.deleteItemAsync("token").then(navigation.navigate("Auth"));
  };

  return (
    <View>
      <Button text="Sign Out" onPress={signOut} />
    </View>
  );

  Settings.navigationOptions = {
    title: "My Settings",
  };
};
export default MySettings;
