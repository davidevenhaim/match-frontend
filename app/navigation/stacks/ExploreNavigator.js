import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AthleteProfileScreen from "../../screens/home/explore/athletes/AthleteProfileScreen";
import AthletesFeedScreen from "../../screens/home/explore/athletes/AthletesFeedScreen";
import EventScreen from "../../screens/home/explore/events/EventScreen";
import EventsFeed from "../../screens/home/explore/events/EventsFeedScreen";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <Stack.Screen name={routes.EVENTS_FEED} component={EventsFeed} />
    <Stack.Screen
      name={routes.ATHLETE_PROFILE}
      component={AthleteProfileScreen}
    />
    <Stack.Screen name={routes.ATHLETE_FEED} component={AthletesFeedScreen} />
    <Stack.Screen name={routes.EVENT_SCREEN} component={EventScreen} />
  </Stack.Navigator>
);

export default ExploreStack;
