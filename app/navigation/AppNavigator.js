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

const AppNavigator = ({ navigation }) => {
  const mainNavigation = navigation;
  let numOfNotifications;
  return (
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
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      children={() => <ProfileNavigator mainNavigation={mainNavigation} />}
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
        tabBarBadge: numOfNotifications || 1,
      }}
    />
  </Tab.Navigator>
)};

export default AppNavigator;
