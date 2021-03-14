import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import * as SecureStore from "expo-secure-store";

import SwitchNavigator from "./app/navigation/SwitchNavigator";
import Screen from "./app/components/Screen";

import getEnvVars from "./config";

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await SecureStore.getItemAsync("token")) || "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <Screen>
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
      </Screen>
    </ApolloProvider>
  );
};
