import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyProfileScreen from "../../screens/home/profile/MyProfileScreen";
import MySettingsScreen from "../../screens/home/profile/MySettingsScreen";

import routes from "../routes";
import { useNavigation } from "@react-navigation/core";

const Stack = createStackNavigator();

const ProfileStack = ({ mainNavigation}) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={routes.MY_PROFILE} component={MyProfileScreen}/>
    <Stack.Screen name={routes.MY_SETTINGS}>
      { () => <MySettingsScreen mainNavigation={mainNavigation} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default ProfileStack;
