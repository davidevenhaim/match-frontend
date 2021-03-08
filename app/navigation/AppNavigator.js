import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import Text from "../components/layouts/Text";
import CreateEvent from "./stacks/CreateEvent";
import ExploreNavigator from "./stacks/ExploreNavigator";
import NewEventButton from "./stacks/NewEventButton";
import ProfileNavigator from "./stacks/ProfileNavigator";

import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.EXPLORE}
      component={ExploreNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome
            name="search"
            size={30}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
        tabBarLabel: ({ color }) => <Text style={{ color: color }}></Text>,
      }}
    />
    <Tab.Screen
      name={routes.CREATE_EVENT}
      component={CreateEvent}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewEventButton
            onPress={() => navigation.navigate(routes.CREATE_EVENT)}
          />
        ),
        tabBarLabel: () => <Text></Text>,
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ color }) => (
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
