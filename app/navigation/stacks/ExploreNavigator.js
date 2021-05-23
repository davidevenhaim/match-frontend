import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AthleteProfileScreen from "../../screens/home/explore/athletes/AthleteProfileScreen";
import CoachPageScreen from "../../screens/home/explore/coaches/CoachPageScreen";
import EventScreen from "../../screens/home/explore/events/EventScreen";
import EventsFeed from "../../screens/home/explore/events/EventsFeedScreen";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 600,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.9,
  },
};

const ExploreStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: colors.white },
      gestureEnabled: true,
      gestureDirection: "horizontal",
      transitionSpec: {
        open: config,
        close: config,
      },
    }}
    initialRouteName={routes.FEED}
    // mode="modal"
  >
    <Stack.Screen name={routes.FEED} component={EventsFeed} />
    <Stack.Screen
      name={routes.ATHLETE_PROFILE}
      component={AthleteProfileScreen}
    />
    <Stack.Screen name={routes.COACH_PROFILE} component={CoachPageScreen} />
    <Stack.Screen name={routes.EVENT_SCREEN} component={EventScreen} />
  </Stack.Navigator>
);

export default ExploreStack;
