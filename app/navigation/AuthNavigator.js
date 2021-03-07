import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoginScreen from "../screens/registering/AppLoginScreen";
import AppRegisterScreen from "../screens/registering/AppRegisterScreen";
import ExploreNearbyScreen from "../screens/registering/ExploreNearbyScreen";
import OnboardingScreen from "../screens/registering/OnboardingScreen";
import RegisterFormScreen from "../screens/registering/RegisterFormScreen";

import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
    <Stack.Screen name={routes.SIGN_UP} component={AppRegisterScreen} />
    <Stack.Screen name={routes.SIGN_IN} component={AppLoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterFormScreen} />
    <Stack.Screen
      name={routes.EXPLORE_NEARBY}
      component={ExploreNearbyScreen}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
