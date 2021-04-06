import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoginScreen from "../screens/registering/AppLoginScreen";
import AppRegisterScreen from "../screens/registering/AppRegisterScreen";
import ExploreNearbyScreen from "../screens/registering/ExploreNearbyScreen";
import OnboardingScreen from "../screens/registering/OnboardingScreen";
import RegisterFormScreen from "../screens/registering/RegisterFormScreen";

import routes from "./routes";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AuthNavigator = ({ navigation }) => {
  const mainNavigation = navigation;
  return (
  <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.white } }} >
    <Stack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
    <Stack.Screen name={routes.SIGN_UP} component={AppRegisterScreen} />
    <Stack.Screen name={routes.SIGN_IN}>
    { () => <AppLoginScreen mainNavigation={mainNavigation} />}
    </Stack.Screen>
    <Stack.Screen name={routes.REGISTER}>
      { () => <RegisterFormScreen mainNavigation={mainNavigation} />}
    </Stack.Screen>
    <Stack.Screen
      name={routes.EXPLORE_NEARBY}
      component={ExploreNearbyScreen}
    />
  </Stack.Navigator>
);}
export default AuthNavigator;
