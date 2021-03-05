import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateEvent from "../../screens/home/createEvent/CreateEvent";

const Stack = createStackNavigator();

const CreateEventStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CreateEvent" component={CreateEvent} />
  </Stack.Navigator>
);

export default CreateEventStack;
