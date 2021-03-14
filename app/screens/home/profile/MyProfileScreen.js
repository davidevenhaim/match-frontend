import React from "react";
import { View } from "react-native";

import AppButton from "../../../components/layouts/Button";
import Text from "../../../components/layouts/Text";

import routes from "../../../navigation/routes";

const MyProfileScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <AppButton
        text={"settings"}
        onPress={() => navigation.navigate(routes.MY_SETTINGS)}
      />
    </View>
  );
};

export default MyProfileScreen;
