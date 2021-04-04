import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateEvent from "../../screens/home/createEvent/CreateEvent";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const CreateEventStack = () => (
  <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
    <Stack.Screen name={routes.CREATE_EVENT} component={CreateEvent} />
  </Stack.Navigator>
);

export default CreateEventStack;
