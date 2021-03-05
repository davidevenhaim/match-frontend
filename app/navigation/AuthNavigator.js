import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoginScreen from "../screens/registering/AppLoginScreen";
import AppRegisterScreen from "../screens/registering/AppRegisterScreen";
import ExploreNearbyScreen from "../screens/registering/ExploreNearbyScreen";
import OnboardingScreen from "../screens/registering/OnboardingScreen";
import RegisterFormScreen from "../screens/registering/RegisterFormScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="SignUp" component={AppRegisterScreen} />
    <Stack.Screen name="SignIn" component={AppLoginScreen} />
    <Stack.Screen name="Register" component={RegisterFormScreen} />
    <Stack.Screen name="ExploreNearbyScreen" component={ExploreNearbyScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
