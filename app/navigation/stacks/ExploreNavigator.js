import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AthleteProfileScreen from "../../screens/home/explore/athletes/AthleteProfileScreen";
import AthletesFeedScreen from "../../screens/home/explore/athletes/AthletesFeedScreen";
import EventScreen from "../../screens/home/explore/events/EventScreen";
import EventsFeed from "../../screens/home/explore/events/EventsFeedScreen";

const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="EventsFeed" component={EventsFeed} />
    <Stack.Screen name="AthleteProfile" component={AthleteProfileScreen} />
    <Stack.Screen name="AthleteFeed" component={AthletesFeedScreen} />
    <Stack.Screen name="EventScreen" component={EventScreen} />
  </Stack.Navigator>
);

export default ExploreStack;
