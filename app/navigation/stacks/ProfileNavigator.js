import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyProfileScreen from "../../screens/home/profile/MyProfileScreen";
import MySettingsScreen from "../../screens/home/profile/MySettingsScreen";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="MyProfile" component={MyProfileScreen} />
    <Stack.Screen name="MySettings" component={MySettingsScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
