import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyProfileScreen from "../../screens/home/profile/MyProfileScreen";
import MySettingsScreen from "../../screens/home/profile/MySettingsScreen";
import MyEventScreen from "../../screens/home/profile/MyEventScreen";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const ProfileStack = ({ mainNavigation }) => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <Stack.Screen name={routes.MY_PROFILE} component={MyProfileScreen} />
    <Stack.Screen name={routes.MY_EVENT} component={MyEventScreen} />
    <Stack.Screen name={routes.MY_SETTINGS}>
      {() => <MySettingsScreen mainNavigation={mainNavigation} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default ProfileStack;
