import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateEvent from "../../screens/home/createEvent/CreateEvent";

import routes from "../routes";

const Stack = createStackNavigator();

const CreateEventStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.CREATE_EVENT} component={CreateEvent} />
  </Stack.Navigator>
);

export default CreateEventStack;
