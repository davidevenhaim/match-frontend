import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../components/layouts/Text";
import CreateEvent from "./stacks/CreateEvent";
import ExploreNavigator from "./stacks/ExploreNavigator";
import NewEventButton from "./stacks/NewEventButton";
import ProfileNavigator from "./stacks/ProfileNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Explore"
      component={ExploreNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={30}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color: color }}></Text>,
      }}
    />
    <Tab.Screen
      name="CreateEvent"
      component={CreateEvent}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewEventButton onPress={() => navigation.navigate("CreateEvent")} />
        ),
        tabBarLabel: () => <Text></Text>,
      })}
    />
    <Tab.Screen
      name="Account"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="circle"
            size={35}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color: color }}></Text>,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
