import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateEvent from "../../screens/home/createEvent/CreateEvent";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const CreateEventStack = () => {
  return (
    <Stack.Screen
      name={routes.CREATE_EVENT}
      component={CreateEvent}
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
    />
  );
};

export default CreateEventStack;
