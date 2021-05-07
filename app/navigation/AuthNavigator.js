import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoginScreen from "../screens/registering/AppLoginScreen";
import AppRegisterScreen from "../screens/registering/AppRegisterScreen";
import OnboardingScreen from "../screens/registering/OnboardingScreen";
import RegisterFormScreen from "../screens/registering/RegisterFormScreen";
import RegisterAsCoachScreen from "../screens/registering/RegisterAsCoachScreen";

import routes from "./routes";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AuthNavigator = ({ navigation }) => {
  const mainNavigation = navigation;
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
    >
      <Stack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={routes.SIGN_UP} component={AppRegisterScreen} />
      <Stack.Screen
        name={routes.REGISTER_COACH}
        component={RegisterAsCoachScreen}
      />
      <Stack.Screen name={routes.SIGN_IN}>
        {() => <AppLoginScreen mainNavigation={mainNavigation} />}
      </Stack.Screen>
      <Stack.Screen name={routes.REGISTER}>
        {() => <RegisterFormScreen mainNavigation={mainNavigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AuthNavigator;
