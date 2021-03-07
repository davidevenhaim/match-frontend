import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyProfileScreen from "../../screens/home/profile/MyProfileScreen";
import MySettingsScreen from "../../screens/home/profile/MySettingsScreen";

import routes from "../routes";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={routes.MY_PROFILE} component={MyProfileScreen} />
    <Stack.Screen name={routes.MY_SETTINGS} component={MySettingsScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
