import React, { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import ActivityIndicator from "../components/layouts/ActivityIndicator";
import CreateEventScreen from "../screens/home/createEvent/CreateEvent";
import ExploreNavigator from "./stacks/ExploreNavigator";
import NewEventButton from "./stacks/NewEventButton";
import ProfileNavigator from "./stacks/ProfileNavigator";
import Text from "../components/layouts/Text";
import Screen from "../components/Screen";

import useLocation from "../hooks/useLocation";
import { writeUserInfo } from "../store/actions";
import { GET_ME } from "../api/gql/query";
import { itemPageSpec } from "../config/theme";
const { ICON_SIZE } = itemPageSpec;

import routes from "./routes";
import colors from "../config/colors";
const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    navigation.navigate(routes.AUTH);
    return null;
  }

  dispatch(writeUserInfo({ ...data.Me, location }));

  const mainNavigation = navigation;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.EXPLORE}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="search"
              size={ICON_SIZE * 0.8}
              color={color}
              style={{ marginTop: 10, height: 40, width: 40 }}
            />
          ),
          tabBarLabel: () => <Text></Text>,
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
              size={ICON_SIZE}
              color={color}
              style={{ marginTop: 10, height: 40, width: 40 }}
            />
          ),
          tabBarLabel: () => <Text></Text>,
          // tabBarBadge: numOfNotifications || 5
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
