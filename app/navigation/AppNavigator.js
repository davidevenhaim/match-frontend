import React, { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import ActivityIndicator from "../components/layouts/ActivityIndicator";
import CreateEventScreen from "../screens/home/createEvent/CreateEvent";
import ExploreNavigator from "./stacks/ExploreNavigator";
import ErrorIndicator from "../components/layouts/ErrorIndicator";
import NewEventButton from "./stacks/NewEventButton";
import ProfileNavigator from "./stacks/ProfileNavigator";
import Text from "../components/layouts/Text";
import Screen from "../components/Screen";

import { GET_ME } from "../api/gql/query";
import { writeInfo } from "../store/actions";

import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_ME);
  if (loading) {
    SplashScreen.preventAutoHideAsync();
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  dispatch(writeInfo(data.Me));

  const mainNavigation = navigation;
  let numOfNotifications;

  return (
    <Screen>
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
          component={CreateEventScreen}
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
                name="account-circle"
                size={35}
                color={color}
                style={{ marginTop: 2 }}
              />
            ),
            tabBarLabel: ({ color }) => <Text style={{ color: color }}></Text>,
            tabBarBadge: numOfNotifications || 5,
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
};

export default AppNavigator;
